import express from 'express';
import { Project } from '../models/Project.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:category', async (req, res) => {
  try {
    const projects = await Project.find({ category: req.params.category });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { router as projectRouter };