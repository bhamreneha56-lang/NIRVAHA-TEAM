import { Router } from 'express';
import { Problem } from '../models/Problem';
import { Project } from '../models/Project';

const router = Router();

router.get('/summary', async (req, res) => {
  try {
    const totalProblems = await Problem.countDocuments();
    const verifiedProblems = await Problem.countDocuments({ status: 'Verified' });
    const totalProjects = await Project.countDocuments();
    res.json({ totalProblems, verifiedProblems, totalProjects });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;
