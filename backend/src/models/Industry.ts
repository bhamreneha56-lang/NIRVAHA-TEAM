import mongoose from 'mongoose';

const industrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  sector: String,
  fundingCapacity: Number,
  contactEmail: String
}, { timestamps: true });

export const Industry = mongoose.model('Industry', industrySchema);
