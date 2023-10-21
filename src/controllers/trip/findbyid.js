import { tourconst, contactconst, testmonyconst,bookingconst, userconst } from "../../models"; 
const findOneDynamic = model => {
  return async (req, res) => {
    try {
      const id = req.params.id;
      console.log("ID from request:", id);
const allDocs = await model.find();
console.log("allldocsin correction ",allDocs);

console.log("All IDs in collection:", allDocs.map(doc => doc._id));

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
    } catch (error) {
      console.log(`Error retrieving ${model.modelName}`, error);
      res.status(500).json({
        message: `There was an error retrieving the ${model.modelName}.`,
        error: error.message
      });
    }
  };
};
export const findUser= findOneDynamic(userconst);
export const findTour = findOneDynamic(tourconst);
export const findContact = findOneDynamic(contactconst);
export const findTestimony = findOneDynamic(testmonyconst);
export const findBooking = findOneDynamic(bookingconst);


