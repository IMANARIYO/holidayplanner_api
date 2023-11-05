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
    type: Object,
    default: undefined
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

const contactreplySchema = mongoose.Schema({
  contactId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  adminEmail: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    default: "replying your last contact received"
  },
  reply: {
    type: String,
    required: true
  }
});

export const relpyconst = mongoose.model("repliesToContacts", contactreplySchema);

export const contactconst=mongoose.model("contacts",contactSchema)