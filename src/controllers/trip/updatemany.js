import { tourconst, contactconst, testmonyconst,bookingconst,userconst } from "../../models";
const updateManyByUserId = model => {
  return async (req, res) => {
    const { userId } = req.params; 
    const update = req.body;

    try {
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
    } catch (error) {
      res.status(500).json({
        message: `There was an error updating documents in the ${model.modelName}.`,
        error: error.message
      });
    }
  };
};

export const updateManyTours = updateManyByUserId(tourconst);
export const updateManyContacts = updateManyByUserId(contactconst);
export const updateManyUsers = updateManyByUserId(userconst);
export const updateManyBookings = updateManyByUserId(bookingconst);
export const updateManyTestimonies = updateManyByUserId(testmonyconst);
