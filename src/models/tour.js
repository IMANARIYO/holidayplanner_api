import mongoose from "mongoose";
const { Schema } = mongoose;
const tourSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
   ref: "userSchema", // Assuming you have a userSchema model/schema
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  groupSize: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  tourType: {
    type: String,
    required: true
  },
  departure: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  fromMonth: {
    type: String,
    required: true
  },
  toMonth: {
    type: String,
    required: true
  },
  departureTime: {
    type: Date,
    required: true
  },
  returnTime: {
    type: Date,
    required: true
  },
image:{type:String,required:true},

  gallery: [
    {
      type: String
    }
  ],
  priceIncluded: [
    {
      type: String
    }
  ],
  priceNotIncluded: [
    {
      type: String
    }
  ]
});

export const tourconst = mongoose.model("tours", tourSchema);

