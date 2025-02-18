export const getOrders = async (req, res) => {
  res.status(200).json({ status: "success", payload: "GetOrders" });
};
export const getOrderById = async (req, res) => {
  res.status(200).json({ status: "success", payload: "GetOrderByID" });
};
export const createOrder = async (req, res) => {
  res.status(201).json({ status: "success", payload: "CreateOrder" });
};
export const resolveOrder = async (req, res) => {
  res.status(201).json({ status: "success", payload: "ResolveOrder" });
};
