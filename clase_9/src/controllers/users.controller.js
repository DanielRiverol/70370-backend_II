// import users from "../data/users.data.js";
import usersService from "../services/users.service.js";
const getUsersAll = (req, res) => {
  const data = usersService.getUsersAll();
  res.status(200).json({ message: "OK", payload: data });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const userFound = usersService.getUserById(+id);
  if (!userFound) return res.status(404).json({ message: "error" });
  res.status(200).json({ message: "OK", payload: userFound });
};

const createUser = (req, res) => {
  const { nombre, email, rol } = req.body;
  const newUser = {
    id: users.length + 1,
    nombre,
    email,
    rol,
  };
  users.push(newUser);

  res.status(201).json({ message: "OK", payload: newUser });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  const userFound = usersService.getUserById(+id);
  if (!userFound) return res.status(404).json({ message: "error" });
  const users = usersService.deleteUser(+id);
  res.status(200).json({ menssage: "borrado", payload: users });//no es lo que deberia pasar
};
export default { getUsersAll, getUserById, createUser, deleteUser };
