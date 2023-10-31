import mongoose from "mongoose";
import { tokengenerating, passHashing } from "../../utils/index.js";
import { userconst } from "../../models/index.js";
import { sendEmail } from "../../utils/index.js";
import nodemailer from"nodemailer"
import { htmlMessage } from "./messages.js";
import { catchAsync } from "../../middleware/index.js";
 export const signup =catchAsync( async (req, res,next) => {
    //Check if user exists
     let user = await userconst.findOne({ email: req.body.email });
     if (user) {
       return res.status(409).json({ message: "Email is already in use."
    
      });
     }
     // Hash the password and create a new user
     let hashedPassword = await passHashing(req.body.password);
     let newUserDetails = { ...req.body, password: hashedPassword };
     let newUser = await userconst.create(newUserDetails);
await sendEmail(newUser.email, "Welcome to Our Platform title", "Thank you for registering with useeeeeeeeeeeeeeee!", htmlMessage);
     // Generate token
     let token = tokengenerating({ _id: newUser._id, email: newUser.email });
     //Return response
     res
       .status(200)
       .json({
         message: "User registered successfully",
         accesstoken: token,
         user: {
           email: newUser.email,
           fullnames: newUser.fullNames,
           phoneNumber: newUser.phoneNumber,
           location: newUser.location,
           role: newUser.role
         }
       });
 });
