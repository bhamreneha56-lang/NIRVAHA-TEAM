import { Router } from 'express';
import { Project } from '../models/Project';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().populate('problemId universityId industryId');
    res.json(projects);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;
