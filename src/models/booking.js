import mongoose from "mongoose";
const { Schema } = mongoose;
const bookingSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId, // Similarly, this refers to an ObjectId
    ref: "userSchema", // This is a reference to the User model
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  tourId: {
    type: Schema.Types.ObjectId, // This refers to an ObjectId in MongoDB
    ref: "tourSchema", // This is a reference to another model (the Tour model)
    required: true
  },

  isPayed: {
    type: Boolean,
    default: false
  },
  paymentMethod: {
    type: String,
    enum: ["credit_card", "paypal", "bank_transfer"], // Example payment methods, you can adjust this array
    required: true
  }
});
export const bookingconst = mongoose.model("bookings", bookingSchema);

