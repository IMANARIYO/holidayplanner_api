import mongoose from "mongoose";
const { Schema } = mongoose;
const testmontSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userEmail: { type: String, required: true },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  body: {
    type: String,
    required: true
  }
});
export const testmonyconst = mongoose.model("testimonies", testmontSchema);