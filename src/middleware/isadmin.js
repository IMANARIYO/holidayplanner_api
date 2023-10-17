import { userconst } from "../models/index.js";

export const isAdmin = async(req,res,next)=>{
    const { userId } = req;
    
let user=await userconst.findById(userId);
if(!user){
    return res.status(401).json({message:"user not found"})
}
let isadmin=user.role == "admin"?true:false;
if(!isadmin){
    console.log(user.role)
  return  res.status(401).json({message:"action is only reseverd for admins"})
}
console.log("in is admin debugging", userId);
res.status(200).json({ message: "this is admin" });
next()

}