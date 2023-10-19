import dotenv from "dotenv";
import cloudinary from "cloudinary";
dotenv.config();
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
const uploadClaudinary=async (file)=>{
    try {
        const result = await cloudinary.v2.uploader.upload(file.path,
            {
                folder:"imagesfolder",
            })
return result.secure_url; 

        
    } catch (error) {
        console.log("in utils claudinary",error.message,error)
    }
};

export default uploadClaudinary;