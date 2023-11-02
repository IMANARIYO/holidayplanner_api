import {userconst,
  tourconst,
  contactconst,
  testmonyconst,
  bookingconst
} from "../../models";
import { catchAsync } from "../../middleware/index.js";

export const deleteAllUsers = catchAsync(async (req, res, next) => {
         await bookingconst.deleteMany({}); // This will delete all documents from the 'users' collection
         res
           .status(200)
           .json({ message: "All users deleted successfully" });
       });
