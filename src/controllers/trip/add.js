// import { tourconst, contactconst, testmonyconst,bookingconst } from "../../models";
// import uploadClaudinary from "../../utils/claudinary";

//    const insertOneDynamic = model => {
//       return async (req, res) => {
//         try {

//           const { userEmail, userId } = req;
//           req.body.userEmail = userEmail;
//           req.body.userId = userId;
// if(req.file){
//   const image=await uploadClaudinary(req.file);
//   console.log(image)
// }
//           if (req.file && req.file.path) {
//             req.body.image = req.file.path; // For models that have an image
//           }
//           const data = await model.create(req.body);

//           res
//             .status(201)
//             .json({
//               message: `${model.modelName} added successfully.`,
//               data: data
//             });
//             if (!req.body.discount) {
//               req.tourId = null;
//             }
//            req.tourId = data._id;
//         } catch (err) {
//           console.log(`Error adding ${model.modelName}`, err);
//           res
//             .status(500)
//             .json({
//               message: `There was an error adding the ${model.modelName}.`,
//               error: err.message
//             });
//         }
//       };
//     };
// export const insertTour= insertOneDynamic(tourconst);
// export const insertContact = insertOneDynamic(contactconst);
// export const insertTestimony = insertOneDynamic(testmonyconst);
// export const insertBooking = insertOneDynamic(bookingconst)

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
      let imagesArray=[]
      let  Image=((await cloudinary.uploader.upload(req.files['image'][0].path)).secure_url);
     console.log(req.files);
      for(let index = 0;index < 4;index++){
          imagesArray.push((await cloudinary.uploader.upload(req.files.gallery[index].path)).secure_url);
      }
      let add=await model.create({...req.body,gallery:imagesArray,image:Image});
      if(!add){
          return res.status(404).json({message:"tour failed to add"});
      }
      res.status(200).json({
          message:"tour created successfully",
          data:add,
      }) }
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
