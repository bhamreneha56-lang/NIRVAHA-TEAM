import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

import authRoutes from './src/routes/auth';
import problemRoutes from './src/routes/problems';
import projectRoutes from './src/routes/projects';
import analyticsRoutes from './src/routes/analytics';

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/nirvaha';
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/analytics', analyticsRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
