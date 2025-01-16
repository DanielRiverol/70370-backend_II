import passport from "passport";
import local from "passport-local";
import userModel from "../models/users.model.js";
import { createHash, isValidPassword } from "../utils.js";

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
          const user = await userModel.findOne({ email: username });
          if (user) {
            console.log("Usuario ya existe");
            return done(null, false);
          }
          const newUser = {
            first_name,
            last_name,
            email,
            password: createHash(password),
          };
          const result = await userModel.create(newUser)

          return done(null, result)
        } catch (error) {
            return done(`error al crear el usuario ${error}`)
        }
      }
    )
  );
// Aqui realizar el login con las diapos Vamos que vos podes!!!!
// passport.use()


  passport.serializeUser((user, done)=>{
    done(null, user._id)
  })
  passport.deserializeUser(async(id,done)=>{
    const user = await userModel.findById(id)
    done(null, user)
  })
};

export default initializePassport;
