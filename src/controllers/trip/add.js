import {
  tourconst,
  contactconst,
  testmonyconst,
  bookingconst
} from "../../models";
import uploadCloudinary from "../../utils/cloudinary";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const insertOneDynamic = model => {
  return async (req, res) => {
    try {
      if (req.files) {
        let imagesArray = [];
        let Image = (await cloudinary.uploader.upload(
          req.files["image"][0].path
        )).secure_url;
        console.log(req.files);
        for (let index = 0; index < 4; index++) {
          imagesArray.push(
            (await cloudinary.uploader.upload(req.files.gallery[index].path))
              .secure_url
          );
        }
        let add = await model.create({
          ...req.body,
          gallery: imagesArray,
          image: Image
        });
        if (!add) {
          return res.status(404).json({ message: "tour failed to add" });
        }
        res.status(200).json({
          message: "tour created successfully",
          data: add
        });
      }
    } catch (err) {
      console.log(`Error adding ${model.modelName}`, err);
      return res.status(500).json({
        message: `There was an error adding the ${model.modelName}.`,
        error: err.message
      });
    }
  };
};

export const insertTour = insertOneDynamic(tourconst);
export const insertContact = insertOneDynamic(contactconst);
export const insertTestimony = insertOneDynamic(testmonyconst);
export const insertBooking = insertOneDynamic(bookingconst);
