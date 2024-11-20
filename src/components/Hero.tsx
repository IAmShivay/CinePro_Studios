import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Beyond the Stars",
      description: "An epic sci-fi adventure that pushes the boundaries of imagination.",
      category: "Sci-Fi Epic"
    },
    {
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "The Last Chapter",
      description: "A thrilling mystery that will keep you guessing until the end.",
      category: "Mystery Thriller"
    },
    {
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Urban Legends",
      description: "Where myths meet reality in modern-day New York.",
      category: "Urban Fantasy"
    }
  ];

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-4xl px-4 space-y-8 animate-fade-in">
                  <span className="inline-block px-4 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-medium">
                    {slide.category}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-300">
                    {slide.description}
                  </p>
                  <div className="flex justify-center gap-4">
                    <button className="button-primary flex items-center gap-2">
                      Watch Trailer <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-3 rounded-full border-2 border-white/20 hover:border-red-500 
                                     transition-colors duration-300 font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Hero