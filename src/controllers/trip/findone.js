import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models"; 
const findOneByUserId = model => {
  return async (req, res) => {
    const { userId } = req.params;

    try {
      const document = await model.findOne({ userId: userId });

      if (!document) {
        return res.status(404).json({
          message: `No document with userId: ${userId} found in ${model.modelName} collection.`
        });
      }

      res.status(200).json({
        message: `Document retrieved successfully from ${model.modelName} collection.`,
        data: document
      });
    } catch (error) {
      res.status(500).json({
        message: `There was an error retrieving the document from the ${model.modelName}.`,
        error: error.message
      });
    }
  };
};

export const findTourByUserId = findOneByUserId(tourconst);
export const findContactByUserId = findOneByUserId(contactconst);
export const findUserByUserId = findOneByUserId(userconst);
export const findBookingByUserId = findOneByUserId(bookingconst);
export const findTestimonyByUserId = findOneByUserId(testmonyconst);
