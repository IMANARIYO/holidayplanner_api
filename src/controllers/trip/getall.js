
import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models"; 
import { catchAsync } from "../../middleware/index.js";
const getAllFromModel = model => {
  return async (req, res,next) => {
const page=req.query.page
const limit=req.query.limit
// let page=2;
// let limit=3;
const startIndex=(page-1)*limit
const endIndex=page*limit


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

