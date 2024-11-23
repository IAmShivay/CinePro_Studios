import React from 'react';
import { Award, Film, Users, Globe } from 'lucide-react';

const stats = [
  { icon: Film, label: 'Productions', value: '50+' },
  { icon: Award, label: 'Awards', value: '25+' },
  { icon: Users, label: 'Team Members', value: '100+' },
  { icon: Globe, label: 'Countries', value: '30+' },
];

const About = () => {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">About CinePro Studios</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Crafting cinematic excellence since 1970, we've been at the forefront of storytelling and visual innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center p-6 bg-gray-900/50 rounded-xl hover-card">
              <Icon className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{value}</div>
              <div className="text-gray-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-900/50 p-8 rounded-xl hover-card">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h2>
            <p className="text-gray-400">
              To create compelling visual narratives that inspire, entertain, and push the boundaries of cinematic artistry while nurturing the next generation of storytellers.
            </p>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-xl hover-card">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h2>
            <p className="text-gray-400">
              To be the global leader in innovative storytelling, setting new standards in film production while maintaining our commitment to artistic excellence and authenticity.
            </p>
          </div>
        </div>

        {/* History */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Studio History"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">From Humble Beginnings</h3>
                <p className="text-gray-400">
                  Starting as a small production house in 1970, we've grown into a leading force in the film industry. Our commitment to quality and innovation has remained unchanged throughout our journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;