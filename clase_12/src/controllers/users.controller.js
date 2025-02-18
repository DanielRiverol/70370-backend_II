export const getUsers= async (req,res)=>{
    res.status(200).json({status:"success", payload:"GetUsers"})
}
export const getUserById= async (req,res)=>{
    res.status(200).json({status:"success", payload:"GetUserByID"})
}
export const createUser= async (req,res)=>{
    res.status(201).json({status:"success", payload:"CreateUser"})
}