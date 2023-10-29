import {
  tourconst,
  contactconst,
  testmonyconst,
  bookingconst
} from "../../models";
import uploadCloudinary from "../../utils/cloudinary";
import { contactHtmlMessage } from "../authentication/index.js";
import { sendEmail } from "../../utils";
import {catchAsync} from"../../middleware/index.js"
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const insertOneDynamic = model =>
 {    
    return async (req, res,next) =>
   {
    
       let tourId=req.tourId;
       let userId=req.userId,userEmail=req.userEmail
      let newObject = { ...req.body,userId,userEmail };
      

      if (req.files && req.files["image"])
       {
                newObject.image = (await cloudinary.uploader.upload(
                  req.files["image"][0].path
                )).secure_url;
      }

      if (req.files && req.files.gallery)
       {
           console.log("in gallery")
           let imagesArray = [];
           for (let index = 0; index < req.files.gallery.length; index++)
            {imagesArray.push((await cloudinary.uploader.upload(req.files.gallery[index].path)) .secure_url); }
           newObject.gallery = imagesArray;
        }

      let data = await model.create(newObject);
      //checking if the request is contact as it has the message field
      if(req.body.message)
      {
        await sendEmail(userEmail, "your contact message have been received", "thank yoou for contacting us!", contactHtmlMessage);
        console.log(req.body.message)
        console.log(userEmail)
      }

      if (!data)
       {
          return res
          .status(404)
          .json({ message: `${model.modelName} failed to add` });
      }

      return res.status(200).json({message: `${model.modelName} created successfully`,
        data: data });
    }
  }
export const insertTour = catchAsync(insertOneDynamic(tourconst));
export const insertContact = catchAsync(insertOneDynamic(contactconst));
export const insertTestimony = catchAsync(insertOneDynamic(testmonyconst));
export const insertBooking = catchAsync(insertOneDynamic(bookingconst));
