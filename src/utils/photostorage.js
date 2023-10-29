import multer from "multer";
import fs from "fs";
import path from "path";
async function ensureDir(directory) {
  try {
    await fs.promises.access(directory, fs.constants.F_OK);
  } catch (e) {
    await fs.promises.mkdir(directory, { recursive: true });
  }
}

export const storage = multer.diskStorage({
  destination(req, files, cb) {
    const dir = "tour_assets";
  ensureDir(dir);
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
