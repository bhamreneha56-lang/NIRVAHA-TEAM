import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  role: String,
  message: { type: String, required: true },
  type: String,
  relatedProblemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem' },
  relatedProjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  read: { type: Boolean, default: false }
}, { timestamps: true });

export const Notification = mongoose.model('Notification', notificationSchema);
