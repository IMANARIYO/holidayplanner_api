import multer from "multer";
import fs from "fs";
import path from "path";
export const storage = multer.diskStorage({
  destination(req, files, cb) {
    cb(null, "tour_assets");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
const upload = multer({ storage: storage });

export const uploaded = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "gallery", maxCount: 20 }
]);
