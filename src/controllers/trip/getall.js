import { tourconst } from "../../models";
export const getall=async (req,res)=>{
    try {
        let data=await tourconst.find();
        if(!data){
            return res.status(404).json({message:"no data found"})
        }
        res.status(200).json({data})
    } catch (error) {
     console.log(error.message)   
    }  
}
