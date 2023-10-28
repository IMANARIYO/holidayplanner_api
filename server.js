import dotenv from "dotenv";
dotenv.config();
import yaml from "yamljs";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import mainRouter from "./src/routes/index.js";
import swaggerUi from "swagger-ui-express";
import { badroutes } from "./src/middleware/index.js";
const app = express();

const swaggerDocument = yaml.load("./yamlfile.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(cors());
app.use(bodyParser.json());
app.use("/", mainRouter);
app.all('*',badroutes)


mongoose
  .connect(process.env.DB_CONNECTION_LIVE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  
});
