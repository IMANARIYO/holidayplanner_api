import { tourconst } from "../../models";
export const updateone=async (req,res)=>{
const{id}=req.params;
const update=req.body;
try {
 const updatedDoc = await tourconst.findByIdAndUpdate(id, update, { new: true });

        if (!updatedDoc) {
            return res.status(404).json({ message: "No document found with that ID." });
        }

        res.status(200).json({ message: "Document updated successfully.", data: updatedDoc });
    
} catch (error) {
    console.log((error.message));
    res.status(500).json({ message: "Error updating the document.", error: err.message });
}
}