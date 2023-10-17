import { insertone,getall,deleteonef,updateone } from "../controllers/trip/index.js";
import multer from "multer";
const upload=multer({dest:"tour-images"})
import express from "express";
const tripRouter=express.Router();
tripRouter.post("/",upload.single("backDropImage"),insertone);
tripRouter.get("/",getall);
tripRouter.delete("/:id",deleteonef);
tripRouter.patch("/:id",updateone)
export default tripRouter;