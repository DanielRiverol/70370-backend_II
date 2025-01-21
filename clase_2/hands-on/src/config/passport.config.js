import passport from "passport";
import local from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import userModel from "../models/users.model.js";
import { createHash, isValidPassword } from "../utils.js";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "register",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
      },
      async (req, username, password, done) => {
        const { first_name, last_name, email } = req.body;
        try {
          const userFound = await userModel.findOne({ email: username }); //email:usernaem = email: email
          if (userFound) {
            console.log("Usuario ya existe");
            return done(null, false);
          }
          const newUser = {
            first_name,
            last_name,
            email,
            password: createHash(password),
          };
          const user = await userModel.create(newUser);

          return done(null, user);
        } catch (error) {
          return done(`error al crear el usuario ${error}`, false);
        }
      }
    )
  );
  
  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email", passReqToCallback: true },
      async (req, username, password, done) => {
        try {
          const userExist = await userModel.findOne({ email: username });
          if (!userExist) return done(null, false);
          const isValid = isValidPassword(password, userExist.password);
          if (!isValid) {
            return done(null, false);
          } else {
            req.session.user = {
              first_name: userExist.first_name,
              last_name: userExist.last_name,
              email: userExist.email,
            };
            console.log(req.session.user);

            return done(null, userExist);
          }
        } catch (error) {
          return done(error.message);
        }
      }
    )
  );
  // GOOGlE register/login
  passport.use('google',
    new GoogleStrategy({
      clientID: googleClientId,
      clientSecret:googleClientSecret,
      callbackURL:'http://localhost:3000/auth/google/callback'
    },async(request, accesToken, refreshToken,profile,done)=>{
      try {
        const userFound = await userModel.findOne({ email: profile.emails[0]?.value });
        if(userFound){
          return done(null, userFound)
        }
          //si no existe lo crea
          const newUser = {
            first_name: profile.name.givenName || "",
            last_name: profile.name.familyName || "",
            email: profile.emails[0]?.value || "",

            password: "", // Dejar vacío ya que la autenticación es con Google
          };

         const user= await userModel.create(newUser)
         return done(null, user)
      } catch (error) {
        return done(error)
      }
    })
  )

  // aca ocurre magia
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id);
    done(null, user);
  });
};

export default initializePassport;
