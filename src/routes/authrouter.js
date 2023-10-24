import express  from "express";
import { isAdmin } from "../middleware/index.js";
import { deleteUser, getAllUsers } from "../controllers/trip";
import { signup,login,changepassword }from "../controllers/authentication/index.js";
import { verifyingtoken } from "../middleware/index.js";
const authRouter=express.Router();
authRouter.post("/signup", signup);
authRouter.post("/login", login);
// authRouter.use(verifyingtoken)
// authRouter.get("/", getAllUsers);

authRouter.post("/changepassword",verifyingtoken, changepassword);
//authRouter.post("/isadmin", verifyingtoken,isAdmin);
// authRouter.delete("/deleteuser/:id",isAdmin,deleteUser);
authRouter.get("/", getAllUsers);
authRouter.delete("/deleteuser/:id",deleteUser);
export default authRouter;