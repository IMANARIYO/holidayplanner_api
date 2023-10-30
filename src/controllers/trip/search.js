import { tourconst, contactconst, testmonyconst, bookingconst, userconst } from "../../models"; 
import { catchAsync } from "../../middleware/index.js";
export const searchTours =catchAsync( async (req, res,next) => {

        let field = req.body.field;
        let value = req.body.value;
        const results = await tourconst.find({[field]: value});
        res.status(200).json({ message: "Search results", data: results });
    
});
