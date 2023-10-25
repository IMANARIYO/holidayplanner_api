import express  from "express";
import { isAdmin } from "../middleware/index.js";
import { deleteUser, getAllUsers, deleteAllUsers,updateUser } from "../controllers/trip";
import { signup,login,changepassword }from "../controllers/authentication/index.js";
import { verifyingtoken } from "../middleware/index.js";
const authRouter=express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);

//authRouter.use(verifyingtoken)
authRouter.get("/", getAllUsers);
authRouter.post("/changepassword",changepassword)
authRouter.delete("/deleteAll", deleteAllUsers);
authRouter.post("/isadmin",isAdmin);
authRouter.delete("/deleteuser/:id",deleteUser);
authRouter.patch("/updateuserbyid/:id",updateUser)


export default authRouter;