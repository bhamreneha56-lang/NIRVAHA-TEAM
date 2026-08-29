import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  district: String,
  departments: [String],
  researchCentres: [String],
  facultyExpertise: [String],
  contactEmail: String
}, { timestamps: true });

export const University = mongoose.model('University', universitySchema);
