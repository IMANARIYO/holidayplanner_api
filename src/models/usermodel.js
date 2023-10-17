import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = mongoose.Schema({
  fullNames:{type:String,required:true},
  email: { type: String, required: true },

  password: { type: String, required: true },
  phoneNumber: Number,
  location: String,
  role: { type: String, default: "user"}
});
export const userconst = mongoose.model("USER", userSchema);
