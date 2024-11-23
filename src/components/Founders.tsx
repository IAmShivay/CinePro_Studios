import React from 'react';

const founders = [
  {
    name: "John Smith",
    role: "CEO & Creative Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote: "Cinema is not just about telling stories; it's about creating experiences that touch hearts and inspire minds."
  },
  {
    name: "Sarah Johnson",
    role: "Executive Producer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote: "Every frame should tell a story, every scene should move the soul. That's our commitment to cinematic excellence."
  }
];

const Founders = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our Visionaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 hover-card"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-500 animate-pulse"></div>
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-red-500 mb-6">{founder.role}</p>
                <blockquote className="text-gray-400 italic">
                  "{founder.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;