import express  from "express";
import { deleteTestimoniesByUserId,insertTestimony, getAllTestimonies,deleteTestimony,findTestimonyByUserId, updateTestimony,findTestimoniesByUserId,updateManyTestimonies } from "../controllers/trip";

import { verifyingtoken } from "../middleware";

const testmonyRouter=express.Router();

//testmonyRouter.use(verifyingtoken)
testmonyRouter.get("/",getAllTestimonies);
testmonyRouter.get("/findone/:userId",findTestimonyByUserId)
testmonyRouter.get("/findmany/:userId", findTestimoniesByUserId);
testmonyRouter.post("/",insertTestimony);
testmonyRouter.delete("/delete/:id",deleteTestimony);
testmonyRouter.delete("/deletemany/:userId", deleteTestimoniesByUserId);
testmonyRouter.patch("/update/:id",updateTestimony);
testmonyRouter.patch("/updatemany/:userId", updateManyTestimonies);
export default testmonyRouter;
