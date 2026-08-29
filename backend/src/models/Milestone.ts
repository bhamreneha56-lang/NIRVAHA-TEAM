import mongoose from 'mongoose';

const milestoneSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
  targetDate: Date,
  completedDate: Date
}, { timestamps: true });

export const Milestone = mongoose.model('Milestone', milestoneSchema);
