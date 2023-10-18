import express  from "express";
import { isAdmin } from "../middleware/index.js";
import { insertContact, getAllUsers } from "../controllers/trip";
import { signup,login,changepassword }from "../controllers/authentication/index.js";
import { verifyingtoken } from "../middleware/index.js";
const authRouter=express.Router();
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.use(verifyingtoken)
authRouter.get("/", getAllUsers);
authRouter.post("/changepassword", changepassword);
authRouter.post("/isadmin",isAdmin)
authRouter.post("/contact",insertContact)
export default authRouter;