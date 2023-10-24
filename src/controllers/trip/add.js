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
let tourId=req.tourId;

let userId=req.userId,userEmail=req.userEmail
      let newObject = { ...req.body,userId,userEmail,tourId };

      if (req.files && req.files["image"]) {
        newObject.image = (await cloudinary.uploader.upload(
          req.files["image"][0].path
        )).secure_url;
      }

      if (req.files && req.files.gallery) {
        let imagesArray = [];
        for (let index = 0; index < req.files.gallery.length; index++) {
          imagesArray.push(
            (await cloudinary.uploader.upload(req.files.gallery[index].path))
              .secure_url
          );
        }
        newObject.gallery = imagesArray;
      }

      let data = await model.create(newObject);

      if (!data) {
        return res
          .status(404)
          .json({ message: `${model.modelName} failed to add` });
      }

      return res.status(200).json({
        message: `${model.modelName} created successfully`,
        data: data
      });
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
