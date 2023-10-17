import mongoose from "mongoose";
const { Schema } = mongoose;
const testmontSchema = mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1, // Assuming a scale of 1 to 5 for simplicity
    max: 5
  },
  body: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "USER", // Assuming you have a User model/schema
    required: true
  }
});
export const testmonyconst = mongoose.model("TESTIMONIES", testmontSchema);