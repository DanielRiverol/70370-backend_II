import express from "express";
import clientsRouter from "./routes/clients.routes.js";
import ClientsRouter from "./routes/clients.js";
import UserRouter from "./routes/user.js";

//settings
const app = express();
app.set("PORT", 3000);

const clientsRoutes = new ClientsRouter();
const userRoutes= new UserRouter()

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
// app.get("/", (req, res) => {
//   res.json({ title: "Home Page" });
// });
app.use("/clients", clientsRouter);

app.use("/", clientsRoutes.getRouter());
app.use('/users', userRoutes.getRouter())
//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
