import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  problemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true },
  universityId: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true },
  title: { type: String, required: true },
  description: String,
  facultyMentor: String,
  students: [String],
  industryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Industry' },
  status: { 
    type: String, 
    enum: ['Proposal', 'Prototype', 'Testing', 'Pilot', 'Deployed', 'Impact Measured'],
    default: 'Proposal'
  },
  fundingAsk: Number,
  fundingPledged: Number,
  ipStatus: String
}, { timestamps: true });

export const Project = mongoose.model('Project', projectSchema);
