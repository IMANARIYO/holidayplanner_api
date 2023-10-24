import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models"; 
const findManyByUserId = (model) => {
  return async (req, res) => {
    const { userId } = req.params;

    try {
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
    } catch (error) {
      res.status(500).json({
        message: `There was an error retrieving documents from the ${model.modelName}.`,
        error: error.message
      });
    }
  };
};
export const findToursByUserId = findManyByUserId(tourconst);
export const findContactsByUserId = findManyByUserId(contactconst);
export const findUsersByUserId = findManyByUserId(userconst);
export const findBookingsByUserId = findManyByUserId(bookingconst);
export const findTestimoniesByUserId = findManyByUserId(testmonyconst);
