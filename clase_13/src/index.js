import express from "express";
import __dirname from "./utils/index.js";
import nodemailer from "nodemailer";
import { config } from "dotenv";
import twilio from "twilio";
config();
//settings
const app = express();
app.set("PORT", 3000);
// nodemailer
const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});
// twilio settings
const client = twilio(process.env.TWILIO_SSID, process.env.AUTH_TOKEN); 

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

// Mail
app.get("/mail", async (req, res) => {
  const { email } = req.body;
  const result = await transport.sendMail({
    from: `Correo de prueba <${process.env.MAIL_USERNAME}>`,
    to: email,
    subject: "Imagen Graciosa",
    html: `<div>
              <h1>La verdad del backend</h1>
              
             Hola ${email} mira lo que te envie
          </div>`,
    attachments: [
      {
        filename: "img1.jpg",
        path: "./src/public/img/img1.jpg",
        cid: "img1",
      },
    ],
  });
  console.log(__dirname);

  res.send("Correo enviado");
});
app.get('/sms',async(req,res)=>{
    const {message}= req.body
    const result = await client.messages.create({
      body: message,
      to: process.env.PHONE_NUMBER_TO,
      from: process.env.PHONE_NUMBER,
    });
    res.send("Sms enviado")
})
//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
