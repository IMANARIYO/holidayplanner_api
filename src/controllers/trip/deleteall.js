import {userconst,
  tourconst,
  contactconst,
  testmonyconst,
  bookingconst
} from "../../models";
export const deleteAllUsers = async (req, res) => {
  try {
    await userconst.deleteMany({}); // This will delete all documents from the 'users' collection
    res.status(200).json({ message: "All users deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
