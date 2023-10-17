import mongoose from "mongoose";
const { Schema } = mongoose;
const contactSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
   
  },
  message: {
    type: String,
    required: true
  },
  reply: {
    type: String,
    default: null // Initially, there won't be a reply, so it can be set to null or left undefined
  },
  dateSent: {
    type: Date,
    default: Date.now
  },
  dateReplied: {
    type: Date,
    default: null // Initially, the message hasn't been replied to, so this can be set to null
  }
});
export const contactconst=mongoose.model("CONTACT",contactSchema)