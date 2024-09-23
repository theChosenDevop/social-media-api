import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();

app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://tobbeyadesanya:X21nPjDeUAp2VD7Q@cluster0.2nupq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to Database and listening to Localhost 5000")
  )
  .catch((err) => console.log(err));
