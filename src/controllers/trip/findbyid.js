import { tourconst, contactconst, testmonyconst,bookingconst, userconst } from "../../models"; 
import { catchAsync } from "../../middleware/index.js";

const findOneDynamic = model => {
  return async (req, res,next) => {
    // try {
      const id = req.params.id;
const allDocs = await model.find();
      let document = await model.findOne({_id:id});
      if (!document) {
        return res.status(404).json({
          message: `No document with ID: ${id} found in ${model.modelName} collection.`
        });
      }

      res.status(200).json({
        message: `${model.modelName} retrieved successfully.`,
        data: document
      });
    // // } catch (error) {
    // //   res.status(500).json({
    // //     message: `There was an error retrieving the ${model.modelName}.`,
    // //     error: error.message
    // //   });
    // }
  };
};
export const findUser= catchAsync(findOneDynamic(userconst));
export const findTour = catchAsync(findOneDynamic(tourconst));
export const findContact =catchAsync( findOneDynamic(contactconst));
export const findTestimony =catchAsync(findOneDynamic(testmonyconst));
export const findBooking = catchAsync(findOneDynamic(bookingconst));


