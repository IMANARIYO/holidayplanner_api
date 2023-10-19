
import { insertTour,getalltours,deleteTour,updateTour,findTourByUserId,findToursByUserId,deleteToursByUserId,updateManyTours} from "../controllers/trip/index.js";
import { verifyingtoken } from "../middleware/verifytoken.js";
import multer from "multer";
import fs from "fs";
import express from "express";
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // making folder
    const dir = "./imagescontainer";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    // endnof making
    cb(null, "imagescontainer/");
  },
  filename: function(req, file, cb) {
    cb(null,file.originalname);
  }
})
const upload = multer({dest:"imagescontainer/" ,storage: storage });
const tourRouter=express.Router();
tourRouter.use(verifyingtoken);
tourRouter.post("/", upload.single("image"), insertTour);
tourRouter.get("/", getalltours);
tourRouter.get("/findone/:userId",findTourByUserId);
tourRouter.get("/findmany/:userId", findToursByUserId);
tourRouter.delete("/delete/:id",deleteTour);
tourRouter.delete("/deletemany/:userId", deleteToursByUserId);
tourRouter.patch("/update/:id", upload.single("image"), updateTour);
tourRouter.patch("/updatemany/:userId", upload.single("image"), updateManyTours);

export default tourRouter;