import mongoose from "mongoose";
const { Schema } = mongoose;
const bookingSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId, 
    ref: "userSchema", 
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  tourId: {
    type: Schema.Types.ObjectId, 
    ref: "tourSchema",
    required: true
  },

  isPayed: {
    type: Boolean,
    default: false
  },
  paymentMethod: {
    type: String,
    enum: ["credit_card", "paypal", "bank_transfer"], 
    required: true
  }
});
export const bookingconst = mongoose.model("bookings", bookingSchema);

