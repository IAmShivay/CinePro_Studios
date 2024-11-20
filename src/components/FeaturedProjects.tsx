import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  director: string;
  cast: string[];
}

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects/featured');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching featured projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={project._id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              <div className="w-full lg:w-1/2">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div>
                  <p className="font-semibold">Director: <span className="text-red-600">{project.director}</span></p>
                  <p className="font-semibold">Cast:</p>
                  <ul className="list-disc list-inside text-gray-400">
                    {project.cast.map((actor, idx) => (
                      <li key={idx}>{actor}</li>
                    ))}
                  </ul>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;