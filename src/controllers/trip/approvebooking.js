import { tourconst,bookingconst } from "../../models/index.js";
import { catchAsync } from "../../middleware/err.js";
export const approveBooking=async (req,res,next)=>{
let id= req.params.id;
// console.log("id in approval",id)
let booking= await bookingconst.findById(id)
        if (!booking) {
          return res
            .status(404)
            .json({
              message: `No booking with ID: ${id} found in booing collection collection.`
            });
        }
        if(booking.status=="approved"){
          return res
            .status(200)
            .json({
              message: "booking already approved !!!!!!!!!!",
              approvedebooking: booking
            });
        }
    booking.status="approved";
    await booking.save();
    return res.status(200).json({message:"booking approved successsfully"
    ,approvedebooking:booking})
}
catchAsync(approveBooking)