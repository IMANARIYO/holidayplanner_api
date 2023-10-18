import express  from "express";
import { insertTestimony, getAllTestimonies,deleteTestimony } from "../controllers/trip";

import { verifyingtoken } from "../middleware";
const testmonyRouter=express.Router();
testmonyRouter.use(verifyingtoken)
testmonyRouter.get("/",getAllTestimonies);
testmonyRouter.post("/",insertTestimony);
testmonyRouter.delete("/delete/:id",deleteTestimony);
export default testmonyRouter;
