import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['CITIZEN', 'GOVERNMENT', 'UNIVERSITY', 'INDUSTRY'] },
  universityId: { type: mongoose.Schema.Types.ObjectId, ref: 'University' },
  industryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Industry' }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
