import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models"; 
import { catchAsync } from "../../middleware/index.js";
const deleteOneDynamic = model => {
  return async (req, res,next) => {

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
  
  };
};
export const deleteUser =catchAsync(deleteOneDynamic(userconst));
export const deleteTour =catchAsync(deleteOneDynamic(tourconst));
export const deleteContact =catchAsync(deleteOneDynamic(contactconst));
export const deleteTestimony =catchAsync(deleteOneDynamic(testmonyconst));
export const deleteBooking =catchAsync(deleteOneDynamic(bookingconst));



