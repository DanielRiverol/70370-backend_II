import passport from "passport";
// install and import strategy (local, google,github,etc)
import userModel from "../models/user.model.js";
const initializePassport = () => {
  //Strategies
  //   passport.use(
  //     'register',
  //     //strategy
  //   );
  //   passport.use(
  //     'login',
  //     //strategy
  //   );

  passport.serializeUser((user, done) => {
    return done(null, user._id);
  });
  passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id);
    return done(null, user);
  });
};

export default initializePassport;
