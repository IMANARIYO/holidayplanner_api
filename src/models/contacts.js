import mongoose from "mongoose";
const { Schema } = mongoose;
const date = new Date(); // This gets the current date and time

// Now, format the date as desired
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  fractionalSecondDigits: 3, // Milliseconds
  hour12: false, // Use 24-hour format
  timeZoneName: "short"
};

 export const formattedDate = date.toLocaleString("en-US", options);

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
    type: String,
    default: formattedDate
  },
  dateReplied: {
    type: String,
    default: "notReplied"
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