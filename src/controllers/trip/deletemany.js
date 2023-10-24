import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models"; 
const deleteManyByUserId = model => {
  return async (req, res) => {
    const { userId } = req.params;

    try {
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
    } catch (error) {
      res.status(500).json({
        message: `There was an error deleting documents from the ${model.modelName}.`,
        error: error.message
      });
    }
  };
};

export const deleteToursByUserId = deleteManyByUserId(tourconst);
export const deleteContactsByUserId = deleteManyByUserId(contactconst);
export const deleteUsersByUserId = deleteManyByUserId(userconst);
export const deleteBookingsByUserId = deleteManyByUserId(bookingconst);
export const deleteTestimoniesByUserId = deleteManyByUserId(testmonyconst);
