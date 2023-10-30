import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models"; 
import { catchAsync } from "../../middleware/index.js";
const findManyByUserId = (model) => {
  return async (req, res) => {
    const { userId } = req.params;

      const documents = await model.find({ userId: userId });

      if (!documents || documents.length === 0) {
        return res.status(404).json({
          message: `No documents with userId: ${userId} found in ${model.modelName} collection.`
        });
      }

      res.status(200).json({
        message: `Documents retrieved successfully from ${model.modelName} collection.`,
        data: documents
      });
    
  };
};
export const findToursByUserId = catchAsync(findManyByUserId(tourconst));
export const findContactsByUserId = catchAsync(findManyByUserId(contactconst));
export const findUsersByUserId = catchAsync(findManyByUserId(userconst));
export const findBookingsByUserId = catchAsync(findManyByUserId(bookingconst));
export const findTestimoniesByUserId = catchAsync(findManyByUserId(testmonyconst));
