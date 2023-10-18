import express from "express";
import { verifyingtoken } from "../middleware/index.js";
import { getallcontacts, insertContact,deleteContact } from "../controllers/trip/index.js";

const contactRouter = express.Router();
contactRouter.use(verifyingtoken);
contactRouter.post("/",insertContact);
contactRouter.get("/",getallcontacts);
contactRouter.delete("/delete/:id",deleteContact);

export default contactRouter;