import express from 'express';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { validateRequest } from '../middleware/validateRequest';

const router = express.Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerSchema = loginSchema.extend({
  password: z.string().min(6),
});

router.post('/register', validateRequest(registerSchema), async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.status(201).json({ token, user: { email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

router.post('/login', validateRequest(loginSchema), async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({ token, user: { email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
});

export { router as authRouter };