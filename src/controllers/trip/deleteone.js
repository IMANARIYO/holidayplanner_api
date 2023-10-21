import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models"; 
// export const deleteonef=async  (req,res)=>{
//     let id=req.params.id
// try {
// let trip= await tourconst.findById(id);
// if(!trip){
//     return res
//       .status(409)
//       .json({
//         message: `no trip wiht this specifiic id  ${id} found in   tour db`
//       });
// }
// let deleted= await tourconst.findByIdAndDelete(id);
// if (!deleted) {
//   return res.status(404).json({ message: "No document found with that ID." });
// }

// res
//   .status(200)
//   .json({ message: "Document deleted successfully.", data: deleted }); 
// } catch (error) {
// console.log("message",error)
// }
// }

const deleteOneDynamic = model => {
  return async (req, res) => {
    try {
      const id = req.params.id;

      let document = await model.findById(id);
      if (!document) {
        return res.status(404).json({
          message: `No document with ID: ${id} found in ${model.modelName} collection.`
        });
      }

      let deleted = await model.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(409).json({
          message: `Error deleting document with ID: ${id} in ${model.modelName} collection.`
        });
      }

      res.status(200).json({
        message: `${model.modelName} deleted successfully.`,
        data: deleted
      });
    } catch (error) {
      console.log(`Error deleting ${model.modelName}`, error);
      res.status(500).json({
        message: `There was an error deleting the ${model.modelName}.`,
        error: error.message
      });
    }
  };
};
export const deleteUser = deleteOneDynamic(userconst);
export const deleteTour = deleteOneDynamic(tourconst);
export const deleteContact = deleteOneDynamic(contactconst);
export const deleteTestimony = deleteOneDynamic(testmonyconst);
export const deleteBooking = deleteOneDynamic(bookingconst);



