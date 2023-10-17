import { userconst } from "../../models/index.js";
import { passComparer,passHashing } from "../../utils/index.js";
export const changepassword=async (req,res)=>{

try{
    const { currentpassword, newpassword } = req.body;
const { userId } = req;
const user=await userconst.findById(userId)

console.log(user);
if (!user) {
  return res.status(404).json({ message: "User not found" });
}
console.log(user.password);
console.log(currentpassword)
        let isPasswordCorrect=await passComparer(currentpassword,user.password)
if (!isPasswordCorrect) {
  return res.status(401).json({
    message: "the currentpassword is wrong"
  });
}
        let hashedPassword=await passHashing(newpassword);
        user.password=hashedPassword;
        user.save();
        res.status(200).json({message:"password changed successfuly"})
        

}catch(err){
    console.log("catch:",err.message,err.name)
}


}