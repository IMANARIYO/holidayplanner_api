import express from "express";
import { verifyingtoken } from "../middleware/index.js";
import { insertBooking, getAllBookings, deleteBooking } from "../controllers/trip/index.js";
const bookingRouter = express.Router();
bookingRouter.use(verifyingtoken)
bookingRouter.get("/",getAllBookings);
bookingRouter.post("/",insertBooking);
bookingRouter.delete("/delete/:id",deleteBooking);

export default bookingRouter;
