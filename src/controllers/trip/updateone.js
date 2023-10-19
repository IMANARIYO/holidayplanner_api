import { tourconst, contactconst, userconst,bookingconst,testmonyconst } from "../../models";
// export const updateone=async (req,res)=>{
// const{id}=req.params;
// const update=req.body;
// try {
//  const updatedDoc = await tourconst.findByIdAndUpdate(id, update, { new: true });

//         if (!updatedDoc) {
//             return res.status(404).json({ message: `No document found with that ${id}` });
//         }

//         res.status(200).json({ message: "Document updated successfully.", data: updatedDoc });
    
// } catch (error) {
//     console.log((error.message));
//     res.status(500).json({ message: "Error updating the document.", error: err.message });
// }
// }
const updateOneDynamic = model => {
  return async (req, res) => {
    const { id } = req.params;
    const update = req.body;

    try {
      const updatedDoc = await model.findByIdAndUpdate(id, update, {
        new: true
      });
console.log(req.body);
      if (!updatedDoc) {
        return res.status(404).json({
          message: `No document with ID: ${id} found in ${model.modelName} collection.`
        });
      }

      res.status(200).json({
        message: `${model.modelName} updated successfully.`,
        data: updatedDoc
      });
    } catch (error) {
      console.log(`Error updating ${model.modelName}`, error);
      res.status(500).json({
        message: `There was an error updating the ${model.modelName}.`,
        error: error.message
      });
    }
  };
};
   
export const updateTour = updateOneDynamic(tourconst);
export const updateContact = updateOneDynamic(contactconst);
export const updateUser = updateOneDynamic(userconst);
export const updateBooking = updateOneDynamic(bookingconst);
export const updateTestimony = updateOneDynamic(testmonyconst);
