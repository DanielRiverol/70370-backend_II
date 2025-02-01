import { verifyToken } from "../utils/index.js";

const handlePolicies = (policies) => (req, res, next) => {
  if (policies[0] === "PUBLIC") return next();
  const authHeaders = req.headers.authorization;
  if (!authHeaders)
    return res.status(401).json({
      status: "error",
      error: "Acceso denegado. Token no proporcionado o vencido",
    });
  const token = authHeaders.split(" ")[1]; //Bearer eY873459845uhfjhfiuhfiuh23456
  const user = verifyToken(token);

  if (!policies.includes(user.role.toUpperCase()))
    return res.status(403).json({
      status: "error",
      error: "Acceso prohibido. No tenes los permisos necesarios",
    });
  req.user = user;
  next();
};

export default handlePolicies;
