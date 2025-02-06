import users from "../data/users.data.js";
// modelo de mongo monngoose tiene sus porpios metodos

// import userModel from '../models/user.model.js (no existe)
const getUsersAll = () => {
    // return userModel.find()
  return users;
};

const getUserById = (id) => {
  return users.find((user) => user.id === id);
};

const deleteUser = (id) => {
  return users.filter((user) => user.id !== id);
};
export default { getUsersAll, getUserById, deleteUser };
