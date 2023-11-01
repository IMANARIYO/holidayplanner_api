import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models"; 
import { catchAsync,AppError } from "../../middleware/index.js";

const findOneByUserId = model => {
  return async (req, res,next) => {
    const { userId } = req.params;


      const document = await model.findOne({ userId: userId });

      if (!document) {
        
        return next(new AppError(`No document with userId: ${userId} found in ${model.modelName} collection.`,404));
      }

      res.status(200).json({
        message: `Document retrieved successfully from ${model.modelName} collection.`,
        data: document
      });
    
  };
};

export const findTourByUserId = catchAsync(findOneByUserId(tourconst));
export const findContactByUserId =catchAsync( findOneByUserId(contactconst));
export const findUserByUserId =catchAsync( findOneByUserId(userconst));
export const findBookingByUserId = catchAsync(findOneByUserId(bookingconst));
export const findTestimonyByUserId =catchAsync( findOneByUserId(testmonyconst));
