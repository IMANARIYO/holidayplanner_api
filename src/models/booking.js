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
  whoBooked: { type: Object },
  tourBooked: { type: Object },
  isPayed: {
    type: Boolean,
    default: false
  },
  paymentMethod: {
    type: String,
    enum: ["credit_card", "paypal", "bank_transfer"],
    required: false
  },
  numberOfTickets: {
    type: Number,
    required: true,
    default: 0
  },Date: {
    type: Date, // Change the type to Date for storing date values
    required: true
  },
  status: {
    type: String,
    default: "pending" // You can set a different default value if needed
  }
});

export const bookingconst = mongoose.model("bookings", bookingSchema);
