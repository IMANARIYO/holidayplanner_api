
import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models"; 
import { catchAsync } from "../../middleware/index.js";
const getAllFromModel = model => {
  return async (req, res,next) => {

      const data = await model.find();
      if (!data || data.length === 0) {
        return res.status(404).json({ message: "No data found" });
      }
      res.status(200).json({ data });
    
  };
};
export  const getAllUsers =catchAsync( getAllFromModel(userconst));
export const getalltours =catchAsync( getAllFromModel(tourconst));
export const getallcontacts = catchAsync(getAllFromModel(contactconst));
export const  getAllBookings =catchAsync( getAllFromModel(bookingconst));
export const getAllTestimonies = catchAsync(getAllFromModel(testmonyconst));