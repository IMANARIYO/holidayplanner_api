
import { search,insertTour,getalltours,deleteTour,updateTour,findTourByUserId,findToursByUserId,deleteToursByUserId,updateManyTours, searchTours} from "../controllers/trip/index.js";
import { verifyingtoken } from "../middleware";
import { uploaded } from "../utils";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { findTour } from "../controllers/trip/findbyid.js";
const tourRouter=express.Router();
tourRouter.use(verifyingtoken);
tourRouter.get("/", getalltours);
tourRouter.post("/search",searchTours);
tourRouter.post("/", uploaded, insertTour);
tourRouter.get("/findone/:userId",findTourByUserId);
tourRouter.get("/findmany/:userId", findToursByUserId);
tourRouter.get("/findbyid/:id", findTour);
tourRouter.delete("/delete/:id",deleteTour);
tourRouter.delete("/deletemany/:userId", deleteToursByUserId);
tourRouter.patch("/update/:id", uploaded, updateTour);
tourRouter.patch("/updatemany/:userId", uploaded, updateManyTours);
export default tourRouter;