import  jwt from "jsonwebtoken";
import { userconst } from "../models";
export const  verifyingtoken=(req,res,next)=>
{

    try{
let auth = req.headers.authorization;
 let token = auth?.split( " ")[1];
if(!token){
       return res.status(401).json({
           message:"no acess token  provided",
       });}
       
       
               
       jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
           if(err){
        return res.status(401).json({
            message:err.message,
        });
    }
    let email= req.body.email;
    let user=userconst.findOne({email:req.body.email})
    console.log("req.body.email",req.body.email)
    req.userId=decoded._id;
    req.userEmail=decoded.email
    next();
}
);

}catch(err){
    console.log(err,"server error");
    res.status(500).json({message:"internal server error"});
}
}