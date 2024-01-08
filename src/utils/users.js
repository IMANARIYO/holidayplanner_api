import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  fullNames:{type:String,required:true},
  email: { type: String, required: true },

  password: { type: String, required: true },
  phoneNumber: Number,
  location: String,
  role: { type: String, default: "user"},
  image:{type:String,required:false},
  otp:{type:String,
  required:false}
  
});
export const userconst = mongoose.model("users", userSchema);
