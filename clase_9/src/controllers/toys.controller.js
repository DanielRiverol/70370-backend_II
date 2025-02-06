import toys from '../data/toys.data.js'


const getToysAll = (req, res) => {
  res.status(200).json({ message: "OK", payload: toys });
};

export default {getToysAll}