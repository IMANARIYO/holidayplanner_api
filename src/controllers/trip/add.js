
import { tourconst, contactconst, testmonyconst,bookingconst } from "../../models"; 
import uploadClaudinary from "../../utils/claudinary";

// export const insertone = async (req, res) => {
//   try {
//     const { userEmail, userId } = req;
//      req.body.userEmail = userEmail;
//      req.body.userId = userId;
// //let data = await tourconst.create({...req.body,backDropImage:req.file.path});
//   let data=await tourconst.create({...req.body,image:req.file.path}) 
//     res.status(201).json({
//       message: "Tour added successfully.",
//       data: data
//     });
//   } catch (err) {
//      console.log("add.js tour adding", err);
//     res.status(500).json({
//       message: "There was an error adding the tour.",
//       error: err.message
//     });
//   }
// };
//making the contact    
// export const insertcontact=async (req,res)=>{
// try {
// const{userEmail,userId}  = req

//  req.body.userEmail = userEmail;
//  req.body.userId = userId;

//  let data=await contactconst.create(req.body) 
//     res.status(201).json({
//       message: "contact  added successfully.",
//       data: data
//     });
// } catch (err) {
//   res.status(500).json({
//     message: "There was an error adding the contact.",
//     error: err.message,
//     err
//   });
// } 
// }
//making a testmony
// export const inserttestmony=async (req,res)=>{
// try {
// const{userEmail,userId}  = req

//    req.body.userEmail = userEmail;
//    req.body.userId = userId;

//  let data=await testmonyconst.create(req.body) 
//     res.status(201).json({
//       message: "testmony  added successfully.",
//       data: data
//     });
// } catch (err) {
 
//   res.status(500).json({
//     message: "There was an error adding the testmony.",
//     error: err.message,
   
//   });
// } 
// }
  //using dynamic  function  
   const insertOneDynamic = model => {
      return async (req, res) => {
        try {
        
          const { userEmail, userId } = req;
          req.body.userEmail = userEmail;
          req.body.userId = userId;
if(req.file){
  const image=await uploadClaudinary(req.file);
  console.log(image)
}
          if (req.file && req.file.path) {
            req.body.image = req.file.path; // For models that have an image
          }
          const data = await model.create(req.body);

          res
            .status(201)
            .json({
              message: `${model.modelName} added successfully.`,
              data: data
            });
            if (!req.body.discount) {
              req.tourId = null;
            }
           req.tourId = data._id;
        } catch (err) {
          console.log(`Error adding ${model.modelName}`, err);
          res
            .status(500)
            .json({
              message: `There was an error adding the ${model.modelName}.`,
              error: err.message
            });
        }
      };
    };
export const insertTour= insertOneDynamic(tourconst);
export const insertContact = insertOneDynamic(contactconst);
export const insertTestimony = insertOneDynamic(testmonyconst);
export const insertBooking = insertOneDynamic(bookingconst)
