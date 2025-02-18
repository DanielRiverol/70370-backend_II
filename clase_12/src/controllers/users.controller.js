import User from "../dao/classes/users.dao.js";
const userService = new User();

export const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json({ status: "success", payload: users });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const getUserById = async (req, res) => {
  const { uid } = req.params;
  try {
    const user = await userService.getUserById(uid);
    res.status(200).json({ status: "success", payload: user });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const createUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await userService.createUser(user);
    res.status(201).json({ status: "success", payload: newUser });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
