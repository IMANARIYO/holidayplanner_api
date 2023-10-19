import mongoose from "mongoose";
const { Schema } = mongoose;
const contactSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "userSchema", // Assuming you have a userSchema model/schema
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },

  message: {
    type: String,
    required: true
  },
  reply: {
    type: String,
    default: null
  },
  dateSent: {
    type: Date,
    default: Date.now
  },
  dateReplied: {
    type: Date,
    default: null
  }
});
export const contactconst=mongoose.model("contacts",contactSchema)