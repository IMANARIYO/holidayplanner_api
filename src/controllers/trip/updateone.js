import { tourconst, contactconst, userconst,bookingconst,testmonyconst } from "../../models"
import { catchAsync } from "../../middleware/index.js";
const updateOneDynamic = model => {
  return async (req, res) => {
    let id = req.params.id;
    const update = req.body;

 console.log("id up on which to update is going to take place on is at ", req.params.id);
      const updatedDoc = await model.findByIdAndUpdate(id, update, {
        new: true
      });
      if (!updatedDoc) {
        return res.status(404).json({
          message: `No document with ID: ${id} found in ${model.modelName} collection.`
        });
      }

      res.status(200).json({
        message: `${model.modelName} updated successfully.`,
        data: updatedDoc
      });
    
  };
};
   
export const updateTour =  catchAsync(updateOneDynamic(tourconst));
export const updateContact = catchAsync( updateOneDynamic(contactconst));
export const updateUser =  catchAsync(updateOneDynamic(userconst));
export const updateBooking =  catchAsync(updateOneDynamic(bookingconst));
export const updateTestimony = catchAsync( updateOneDynamic(testmonyconst));
