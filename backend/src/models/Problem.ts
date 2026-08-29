import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: String,
  district: String,
  status: { type: String, default: 'Pending Verification' },
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  routedToUniversityId: { type: mongoose.Schema.Types.ObjectId, ref: 'University' },
  aiCategory: String,
  aiPriority: String,
  aiConfidence: Number,
  isDuplicateOf: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem' },
  upvotes: { type: Number, default: 0 }
}, { timestamps: true });

export const Problem = mongoose.model('Problem', problemSchema);
