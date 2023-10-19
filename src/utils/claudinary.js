import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
cloudinary.v2.config({
    // cloud_name:process.env.cloud_name,
    // api_key:process.env.api_key,
    // api_secret:process.env.api_secret
   cloud_name: 'dorjr1njc',
   api_key: 992729645554668,
    api_secret: "nEJMnOTcemTaYlGAvHGzuCvggqI"
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