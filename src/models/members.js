import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    default: '/path/to/default_profile_picture.jpg', // Provide a default path if needed
  },
  city: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  professionalStatus: {
    type: String,
    required: true,
  },
  applyingFor: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
  goalsIn1k: {
    type: String,
    required: true,
  },
  experienceIn1k: {
    type: String,
    required: true,
  },
});

const Member = mongoose.model('Member', memberSchema);
export default Member;
