import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/nirvaha').then(() => console.log('MongoDB connected'));

// 1. Citizen / Problem Module
const problemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String, // Domain classification
  subdomain: String, 
  district: String,
  gps: {
    lat: Number,
    lng: Number
  },
  submitterDetails: {
    name: String,
    type: String, // Individual, Community, PRI, ULB
    phone: String,
  },
  affectedPopulation: Number,
  mediaUrls: [String], // Photo/Video
  status: { type: String, default: 'Pending Verification' }, // Pending, Verified, Rejected, Assigned
  aiAnalysis: {
    priority: { type: String, default: 'Medium' },
    confidenceScore: Number,
    isDuplicate: Boolean,
    duplicateOf: mongoose.Schema.Types.ObjectId,
    requiredExpertise: [String],
  },
  reportedOn: { type: Date, default: Date.now },
  upvotes: { type: Number, default: 0 },
  communityFeedback: [{ text: String, date: Date }]
});
const Problem = mongoose.model('Problem', problemSchema);

// 2. University / HEI Profile
const universitySchema = new mongoose.Schema({
  name: String,
  location: String,
  departments: [String],
  researchCentres: [String],
  facultyExpertise: [String],
  assignedChallenges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Problem' }]
});
const University = mongoose.model('University', universitySchema);

// 3. Industry / CSR Profile
const industrySchema = new mongoose.Schema({
  name: String,
  sector: String,
  fundingCapacity: Number,
  fundedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});
const Industry = mongoose.model('Industry', industrySchema);

// 4. Project & Solution Lifecycle Module
const projectSchema = new mongoose.Schema({
  title: String,
  status: { type: String, default: 'Proposal Phase' }, // Proposal, Prototype, Pilot, Deployed
  problemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem' },
  universityId: { type: mongoose.Schema.Types.ObjectId, ref: 'University' },
  industryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Industry' },
  team: {
    facultyMentor: String,
    students: [String],
  },
  funding: {
    ask: { type: Number, default: 0 },
    pledged: { type: Number, default: 0 }
  },
  milestones: [{
    name: String,
    status: { type: String, default: 'To Do' },
    dueOn: Date
  }],
  ipManagement: { type: String, default: 'Pending' },
  socialImpact: {
    citizensImpacted: Number,
    villagesTransformed: Number
  }
});
const Project = mongoose.model('Project', projectSchema);

// AI Simulation Layer
function simulateAI(problemText, category) {
  const text = (problemText || '').toLowerCase();
  const rules = [
    { kw:['water','handpump','drinking','well','tap','jal','arsenic'], cat:'Water Management' },
    { kw:['toilet','sanitation','sewage','drainage','defecation'], cat:'Sanitation' },
    { kw:['road','pothole','nh-','highway','street'], cat:'Urban Infrastructure' },
    { kw:['farm','crop','paddy','millets','irrigation'], cat:'Agriculture' },
    { kw:['school','teacher','education','book'], cat:'Education' },
    { kw:['hospital','clinic','doctor','medicine','disease'], cat:'Healthcare' },
  ];
  let predicted = category || 'General Public Service';
  let matched = false;
  for (const r of rules) {
    if (r.kw.some(k => text.includes(k))) {
      predicted = r.cat;
      matched = true;
      break;
    }
  }
  const priority = /urgent|emergency|accident|death/.test(text) ? 'High' : (matched ? 'Medium' : 'Low');
  
  return { 
    predicted, 
    priority, 
    confidenceScore: matched ? 0.92 : 0.65,
    requiredExpertise: matched ? [predicted + ' Engineering', 'Policy'] : ['General']
  };
}

// API Routes
app.get('/api/problems', async (req, res) => {
  const problems = await Problem.find().sort({ reportedOn: -1 });
  const formatted = problems.map(p => ({ ...p.toObject(), id: p._id.toString() }));
  res.json(formatted);
});

app.post('/api/problems', async (req, res) => {
  const data = req.body;
  const aiResult = simulateAI(data.title + ' ' + data.description, data.category);
  
  const problem = new Problem({
    ...data,
    category: aiResult.predicted,
    status: 'Pending Verification',
    aiAnalysis: {
      priority: aiResult.priority,
      confidenceScore: aiResult.confidenceScore,
      isDuplicate: false,
      requiredExpertise: aiResult.requiredExpertise
    }
  });
  await problem.save();
  res.json({ ...problem.toObject(), id: problem._id.toString() });
});

// Clear DB Route (For testing/presentation)
app.post('/api/reset', async (req, res) => {
  await Problem.deleteMany({});
  await Project.deleteMany({});
  await University.deleteMany({});
  await Industry.deleteMany({});
  res.json({ message: "Database completely reset to empty state." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
