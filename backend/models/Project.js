import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['upcoming', 'featured', 'completed'],
    required: true
  },
  releaseDate: {
    type: Date
  },
  director: String,
  cast: [String]
}, {
  timestamps: true
});

export const Project = mongoose.model('Project', projectSchema);