import { tourconst } from "../../models";
export const deleteonef=async  (req,res)=>{
    let id=req.params.id
try {
let trip= await tourconst.findById(id);
if(!trip){
    return res
      .status(409)
      .json({
        message: `no trip wiht this specifiic id  ${id} found in   tour db`
      });
}
let deleted= await tourconst.findByIdAndDelete(id);
if (!deleted) {
  return res.status(404).json({ message: "No document found with that ID." });
}

res
  .status(200)
  .json({ message: "Document deleted successfully.", data: deleted }); 
} catch (error) {
console.log("message",error)
}
}