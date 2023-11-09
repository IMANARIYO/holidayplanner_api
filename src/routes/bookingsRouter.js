import express from "express";
import { verifyingtoken } from "../middleware/index.js";
import { approveBooking,insertBooking, getAllBookings, deleteBooking,updateBooking,findBookingByUserId,findBookingsByUserId,deleteBookingsByUserId,updateManyBookings} from "../controllers/trip/index.js";
const bookingRouter = express.Router();
//bookingRouter.use(verifyingtoken)
bookingRouter.get("/",getAllBookings);
bookingRouter.get("/findone/:userId",findBookingByUserId)
bookingRouter.get("/findmany/:userId", findBookingsByUserId);
bookingRouter.post("/",insertBooking);
bookingRouter.delete("/delete/:id",deleteBooking);
bookingRouter.delete("/deletemany/:userId", deleteBookingsByUserId);
bookingRouter.patch("/update/:id",updateBooking)
bookingRouter.patch("/approveBooking/:id", approveBooking);
bookingRouter.patch("/updatemany/:userId",updateManyBookings)
export default bookingRouter;









