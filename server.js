import dotenv from "dotenv";
dotenv.config();
import cors from"cors";
import express  from "express";
import bodyParser from"body-parser";
import mongoose from "mongoose";
import mainRouter from "./src/routes/index.js";

const app = express();
app.use(cors({origin:"*"}));
app.use(bodyParser.json());
app.use("/",mainRouter);

const PORT = 8800;

mongoose.connect(process.env.DB_CONNECTION_DEV, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
    console.log();
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
