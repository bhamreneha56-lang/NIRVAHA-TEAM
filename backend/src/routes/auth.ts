import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

const router = Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    // In a real app, verify password hash. For prototype, we'll mock or create if not exists
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name: email.split('@')[0], email, password: 'mock', role });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, 'secret-key-123', { expiresIn: '1d' });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
