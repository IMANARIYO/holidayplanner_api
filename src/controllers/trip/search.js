import { tourconst, contactconst, testmonyconst, bookingconst, userconst } from "../../models"; 

export const searchTours = async (req, res) => {
    try {
        let field = req.body.field;
        let value = req.body.value;
        const results = await tourconst.find({[field]: value});
        res.status(200).json({ message: "Search results", data: results });
    } catch (err) {
        res.status(500).json({
            message: "There was an error searching the tours.",
            error: err.message
        });
    }
};
