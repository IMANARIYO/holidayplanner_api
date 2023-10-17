import mongoose from "mongoose";
import { tokengenerating, passHashing} from "../../utils/index.js";
import { userconst } from "../../models/index.js";
  export const signup = async (req,res) =>{
    console.log("signup function")
    try{
        let user = await userconst.findOne({email:req.body.email})
        console.log(user)
if(user){
   console.log("the detail of   user  who is already in data base");
    console.log(user);
    return res.status(409).json({
         message:`user with this email----->    ${req.body.email}  <--------- is already in db so use another email`
    });
   
}
let hashedPassword=await passHashing(req.body.password);
req.body.password=hashedPassword;
let newUser=await userconst.create(req.body);
let token=tokengenerating({
    _id:newUser._id,
    email:newUser.email
});
res.status(200).json({
  message: "the user  registereD succseful",
  accesstoken: token,
  user: {
    email: newUser.email,
    fullnames: newUser.fullNames,
    password: newUser.password,
    phoneNumber: newUser.phoneNumber,
    location: newUser.location,
    role: newUser.role
  }
});

    }catch(err){
        console.log({message:err})
    }

 }










    
 