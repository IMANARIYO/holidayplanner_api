import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models";
import { catchAsync } from "../../middleware/index.js";
const updateManyByUserId = model => {
  return async (req, res,next) => {
    const { userId } = req.params; 
    const update = req.body;

    
      const updatedDocs = await model.updateMany({ userId: userId }, update);

      if (updatedDocs.nModified === 0) {
        return res.status(404).json({
          message: `No documents with userId: ${userId} found in ${model.modelName} collection.`
        });
      }

      res.status(200).json({
        message: `${updatedDocs.nModified} documents in ${model.modelName} updated successfully.`,
        data: updatedDocs
      });
    
  };
};

export const updateManyTours =catchAsync( updateManyByUserId(tourconst));
export const updateManyContacts =catchAsync(updateManyByUserId(contactconst));
export const updateManyUsers =catchAsync(updateManyByUserId(userconst));
export const updateManyBookings = catchAsync(updateManyByUserId(bookingconst));
export const updateManyTestimonies = catchAsync(updateManyByUserId(testmonyconst));
