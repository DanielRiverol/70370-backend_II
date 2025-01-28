import passport from "passport";
import jwt from "passport-jwt";
const JWTStratgy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

// install and import strategy (local, google,github,etc)
// import userModel from "../models/user.model.js";
const initializePassport = () => {
  //Strategies
  passport.use(
    "jwt",
    new JWTStratgy(
      {
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: "clave-secreta", //la misma que pase en utils al sign
      },
      async (jwt_payload, done) => {
        try {
          return done(null, jwt_payload);//user o false
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["authCookie"];//el nombre de la cookie
  }
  return token;
};
export default initializePassport;
