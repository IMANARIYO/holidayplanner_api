import { catchAsync } from "../../middleware/index.js";
import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models"; 
const deleteManyByUserId = model => {
  return async (req, res,next) => {
    const { userId } = req.params;
      const deletedDocuments = await model.deleteMany({ userId: userId });
      if (deletedDocuments.deletedCount === 0) {
        return res.status(404).json({
          message: `No documents with userId: ${userId} found in ${model.modelName} collection.`
        });
      }
      res.status(200).json({
        message: `Documents deleted successfully from ${model.modelName} collection.`,
        data: deletedDocuments
      });
    
  };
};

export const deleteToursByUserId = catchAsync(deleteManyByUserId(tourconst));
export const deleteContactsByUserId =catchAsync( deleteManyByUserId(contactconst));
export const deleteUsersByUserId =catchAsync(deleteManyByUserId(userconst));
export const deleteBookingsByUserId = catchAsync(deleteManyByUserId(bookingconst));
export const deleteTestimoniesByUserId = catchAsync(deleteManyByUserId(testmonyconst));
