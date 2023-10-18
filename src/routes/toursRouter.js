import { insertTour,getalltours,deleteTour,updateone } from "../controllers/trip/index.js";
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
tourRouter.delete("/delete/:id",deleteTour);
tourRouter.patch("/:id",updateone);
export default tourRouter;