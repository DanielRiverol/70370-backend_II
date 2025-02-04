import express from "express";
import connectDb from "./database/db.js";
import entorno from "./config/env.js";
import { fork } from "child_process";

//settings
const app = express();
app.set("PORT", entorno.port || 3000);
const dbUrl = entorno.mongodb_url || "mongodb://localhost:27017/users";

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const operacionCompleja = () => {
//   let result = 0;
//   for (let i = 0; i < 10000000000; i++) {
//     result += i;
//   }
//   return result;
// };

//routes
app.get("/", (req, res) => {
  // res.json({ title: "Home Page" });
  // const result = operacionCompleja();
  // res.send({ message: "el resultado de op compleja es ", result });
  const child = fork("./src/opCompleja.js");
  child.send("DALE ARRANCA EL PROCESO");
  child.on("message", (result) => {
    res.send({ message: "El resultado es", result });
  });
});
app.get("/login", (req, res) => {
  // res.json({ title: "Home Page" });

  res.send({ message: "Hiciste login" });
});

//listeners
connectDb(dbUrl);
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});

// Listeners en NODE
process.on("exit", (code) => {
  console.log("esto se ve cuando finaliza el proceso");
});
process.on("uncaughtException", (exception) => {
  console.log("Esto captura un error no controlado");
});
matete();
// process.exit()//return
