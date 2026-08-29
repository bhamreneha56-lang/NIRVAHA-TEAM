import { Router } from 'express';
import { Problem } from '../models/Problem';
import { simulateAI } from '../lib/ai';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const problems = await Problem.find().populate('submittedBy verifiedBy routedToUniversityId');
    res.json(problems);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, location } = req.body;
    const aiResult = await simulateAI(title, description);
    const problem = await Problem.create({
      title, description, location,
      aiCategory: aiResult.category,
      aiPriority: aiResult.priority,
      aiConfidence: aiResult.confidence
    });
    res.status(201).json(problem);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.patch('/:id/verify', async (req, res) => {
  try {
    const problem = await Problem.findByIdAndUpdate(req.params.id, { status: 'Verified' }, { new: true });
    res.json(problem);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;
