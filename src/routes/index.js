
import authRouter from "./authrouter.js";
import tripRouter from "./triprouter.js";
import express from "express";
const mainRouter=express.Router();
mainRouter.use("/auth",authRouter);
mainRouter.use("/trip",tripRouter)

export default mainRouter;

