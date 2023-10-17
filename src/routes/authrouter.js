import express  from "express";
import { isAdmin } from "../middleware/index.js";
import { signup,login,changepassword }from "../controllers/authentication/index.js";
import { verifyingtoken } from "../middleware/index.js";
const authRouter=express.Router();
authRouter.post("/changepassword", verifyingtoken, changepassword);
authRouter.post("/isadmin",verifyingtoken,isAdmin)
authRouter.post("/signup",signup);
authRouter.post("/login",login)
export default authRouter;