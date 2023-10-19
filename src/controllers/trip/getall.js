
// export const getalltours=async (req,res)=>{
//     try {
//         let data=await tourconst.find();
//         if(!data){
//             return res.status(404).json({message:"no data found"})
//         }
//         res.status(200).json({data})
//     } catch (error) {
//      console.log(error.message)   
//     }  
// }
import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models"; 
const getAllFromModel = model => {
  return async (req, res) => {
    try {
      const data = await model.find();
      if (!data || data.length === 0) {
        return res.status(404).json({ message: "No data found" });
      }
      res.status(200).json({ data });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
};
export  const getAllUsers = getAllFromModel(userconst);
export const getalltours = getAllFromModel(tourconst);
export const getallcontacts = getAllFromModel(contactconst);
export const  getAllBookings = getAllFromModel(bookingconst);
export const getAllTestimonies = getAllFromModel(testmonyconst);