//  import tourconst from "../../models/index.js";

import { tourconst } from "../../models";

export const insertone = async (req, res) => {
  try {
    let data = await tourconst.create({...req.body,backDropImage:req.file.path});
    
    res.status(201).json({
      message: "Tour added successfully.",
      data: data
    });
   

  } catch (err) {
    res.status(500).json({
      message: "There was an error adding the tour.",
      error: err.message,err
    });
  }
};
