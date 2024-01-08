import {
  tourconst,
  contactconst,
  testmonyconst,
  bookingconst,
  userconst,
  relpyconst,
  formattedDate
} from "../../models";
import ejs from"ejs"
import findContact from"./findbyid.js"
import { replymessage } from "../authentication/index.js";
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
       let tourId = req.tourId||req.body.tourId;
       if(!req.userId||!req.userEmail){
       var userId = req.userId||"653936f5fc45548814008e48",
         userEmail = req.userEmail || "admin@gmail.com";
        }else{
           var userId = req.userId ,
             userEmail = req.userEmail;
        } 
        console.log(userId,userEmail);
   let  whoBooked=await userconst.findById(userId)
   let tourBooked=await tourconst.findById(tourId) 
    if (!tourBooked && req.body.paymentMethod) {
      return res
        .status(404)
        .json({
          message: `No tour  with ID: ${tourId} found in  in tours collection.`
        });
    }
      
       
      let newObject = { ...req.body,userId,userEmail,whoBooked,tourBooked};
      let id=userId;

     //in case we are going to make    tour which has   fields of gallery and of image  which has to be of files
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
     if(req.body.message){req.body.dateSent = formattedDate;
       console.log(formattedDate)}
      let data = await model.create(newObject);
      //checking if the request is contact as it has the message field
      if(req.body.message)
      {
        await sendEmail(userEmail, "your contact message have been received", "thank yoou for contacting us!", contactHtmlMessage);
      }

      if (!data)
       {
          return res
          .status(404)
          .json({ message: `${model.modelName} failed to add` });
      }

      return res.status(200).json({message: `${model.modelName} created successfully`,
        data: data });
         next();
    }
   
  }
export const insertTour = catchAsync(insertOneDynamic(tourconst));
export const insertContact = catchAsync(insertOneDynamic(contactconst));
export const insertTestimony = catchAsync(insertOneDynamic(testmonyconst));
export const insertBooking = catchAsync(insertOneDynamic(bookingconst));
export const insertReply = catchAsync(insertOneDynamic(relpyconst));


//reply   
export const replyfunction=async (req,res,next)=>
{
    var id = req.params.id;
      const  contact=await contactconst.findById(id);
       if (!contact) {
         return res
           .status(404)
           .json({
             message: `No document with ID: ${id} found in  contacts  collection. please try to use  a valid contact id `
           });
           //auto consuming id of contact on which the
       }
       

     
  //auto consuming id of contact on which the contact was made
     req.body.contactId = id;
     req.body.adminEmail=req.userEmail;
     let ToBeReplied = contact.userEmail;
    
    contact.reply=req.body;
    contact.dateReplied = formattedDate;
    console.log("dateReplied", contact.dateReplied);
    await contact.save();
    console.log(contact)
    if(!req.body.reply||req.body.reply==" "){
       return res
         .status(404)
         .json({
           message: `you can not send empt reply`
         });
    }
    let reply=await relpyconst.create(req.body);
    
    const renderedTemplate = ejs.render(replymessage, { reply: contact.reply });
   // console.log("tobereplied",ToBeReplied)
     await sendEmail(ToBeReplied, " holiday planners response  to you", "thank yoou for contacting us!", replymessage,req.userEmail);
     return res.status(202).json({ message: `reply made successfully`,
     reply:reply});
    next()
  }
  catchAsync(replyfunction);