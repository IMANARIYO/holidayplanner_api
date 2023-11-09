import bookingRouter from "./bookingsRouter.js";
import authRouter from "./authrouter.js";
import tourRouter from "./toursRouter.js";
import contactRouter from "./contactsRouter.js";
import testmonyRouter from "./testmoniesRouter.js";
import express from "express";
import payRouter from "./payment.js";
const mainRouter=express.Router();

mainRouter.use("/auth",authRouter);
mainRouter.use("/tour",tourRouter);
mainRouter.use("/contact",contactRouter);
mainRouter.use("/book",bookingRouter);
mainRouter.use("/testmony",testmonyRouter);
mainRouter.use('/pay',payRouter)
export default mainRouter;

