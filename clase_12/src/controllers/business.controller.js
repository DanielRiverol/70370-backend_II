export const getBusiness = async (req, res) => {
  res.status(200).json({ status: "success", payload: "GetBusiness" });
};
export const getBusinessById = async (req, res) => {
  res.status(200).json({ status: "success", payload: "GetBusinessByID" });
};
export const createBusiness = async (req, res) => {
  res.status(201).json({ status: "success", payload: "CreateBusiness" });
};
export const addProduct = async (req, res) => {
  res.status(201).json({ status: "success", payload: "AddProduct" });
};
