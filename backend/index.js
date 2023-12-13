import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import cors from "cors";
import { frontEndUrl } from "./config.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(express.json());
// Cors policies
//app.use(cors())
// Only accept frontend requests
app.use(
  cors({
    origin: frontEndUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials:true,
  })
);

// Routes
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello World!");
});

app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

// Books model Routes
app.use("/books", bookRoutes);
app.use("/auth", authRoutes)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected succesfully");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
