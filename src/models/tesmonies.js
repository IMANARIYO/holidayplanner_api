import mongoose from "mongoose";
const { Schema } = mongoose;
const testmontSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "userSchema", // Assuming you have a userSchema model/schema
    required: true
  },
  userEmail: { type: String, required: true },

  rating: {
    type: Number,
    required: true,
    min: 1, // Assuming a scale of 1 to 5 for simplicity
    max: 5
  },
  body: {
    type: String,
    required: true
  }
});
export const testmonyconst = mongoose.model("TESTIMONIES", testmontSchema);