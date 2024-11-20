import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, Star } from 'lucide-react';

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  releaseDate: string;
}

const UpcomingProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects/upcoming');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching upcoming projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Placeholder data while API loads
  const placeholderProjects = [
    {
      _id: '1',
      title: 'The Quantum Effect',
      description: 'A mind-bending journey through space and time.',
      imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      releaseDate: '2024-12-25'
    },
    {
      _id: '2',
      title: 'Neon Dreams',
      description: 'A cyberpunk thriller set in Neo Tokyo 2089.',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      releaseDate: '2024-10-15'
    },
    {
      _id: '3',
      title: 'The Last Stand',
      description: 'One hero. One city. One last chance.',
      imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      releaseDate: '2025-01-30'
    }
  ];

  const displayProjects = projects.length > 0 ? projects : placeholderProjects;

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Upcoming Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <div 
              key={project._id}
              className="group bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden hover-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 gradient-text">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-red-500">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{new Date(project.releaseDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <button className="flex items-center gap-2 text-white hover:text-red-500 transition-colors">
                    <Star className="w-5 h-5" />
                    <span>Watchlist</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects