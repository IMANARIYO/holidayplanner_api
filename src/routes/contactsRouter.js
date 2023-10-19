import express from "express";
import { verifyingtoken } from "../middleware/index.js";
import { deleteContactsByUserId,getallcontacts, insertContact,deleteContact,updateContact,findContactByUserId,findContactsByUserId,updateManyContacts} from "../controllers/trip/index.js";

const contactRouter = express.Router();
contactRouter.use(verifyingtoken);
contactRouter.post("/",insertContact);
contactRouter.get("/",getallcontacts);
contactRouter.delete("/delete/:id",deleteContact);
contactRouter.delete("/deletemany/:userId",deleteContactsByUserId)
contactRouter.get("/findone/:userId",findContactByUserId);
contactRouter.get("/findmany/:userId", findContactsByUserId);
contactRouter.patch("/update/:id",updateContact);
contactRouter.patch("/updateMany/:userId",updateManyContacts);
export default contactRouter;