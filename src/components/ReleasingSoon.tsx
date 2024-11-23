// Video

// import React from 'react';
// import { Calendar, Clock, Play } from 'lucide-react';

// const ReleasingSoon = () => {
//   const upcomingReleases = [
//     {
//       id: 1,
//       title: "The Dark Horizon",
//       genre: "Sci-Fi Thriller",
//       releaseDate: "2024-12-10",
//       duration: "2h 15min",
//       thumbnail: "/api/placeholder/800/500",
//       progress: 85
//     },
//     {
//       id: 2,
//       title: "Lost in Tokyo",
//       genre: "Drama",
//       releaseDate: "2024-12-25",
//       duration: "1h 55min",
//       thumbnail: "/api/placeholder/800/500",
//       progress: 92
//     },
//     {
//       id: 3,
//       title: "The Last Symphony",
//       genre: "Musical Drama",
//       releaseDate: "2025-01-15",
//       duration: "2h 30min",
//       thumbnail: "/api/placeholder/800/500",
//       progress: 78
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-12">
//           <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
//             Releasing Soon
//           </h2>
//           <button className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 transition-opacity">
//             View All
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {upcomingReleases.map((movie, index) => (
//             <div 
//               key={movie.id}
//               className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800/50 hover:border-red-500/50 transition-all duration-300"
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               {/* Thumbnail Section */}
//               <div className="relative aspect-video">
//                 <img 
//                   src={movie.thumbnail} 
//                   alt={movie.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                
//                 {/* Progress Indicator */}
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <div className="flex items-center justify-between text-sm text-white mb-2">
//                     <span>Production Progress</span>
//                     <span>{movie.progress}%</span>
//                   </div>
//                   <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
//                     <div 
//                       className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300"
//                       style={{ width: `${movie.progress}%` }}
//                     />
//                   </div>
//                 </div>

//                 {/* Play Button Overlay */}
//                 <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-500/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <Play className="w-8 h-8 text-white" />
//                 </button>
//               </div>

//               {/* Content Section */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
//                 <p className="text-gray-400 mb-4">{movie.genre}</p>
                
//                 <div className="flex items-center justify-between text-sm text-gray-400">
//                   <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4" />
//                     <span>{new Date(movie.releaseDate).toLocaleDateString('en-US', {
//                       month: 'short',
//                       day: 'numeric',
//                       year: 'numeric'
//                     })}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-4 h-4" />
//                     <span>{movie.duration}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReleasingSoon;


import React from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

const ReleasingSoon = () => {
  const upcomingReleases = [
    {
      id: 1,
      title: "The Dark Horizon",
      genre: "Sci-Fi Thriller",
      releaseDate: "2024-12-10",
      estimatedRuntime: "2h 15min",
      thumbnail: "/api/placeholder/800/500",
      progress: 85,
      gallery: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
    },
    {
      id: 2,
      title: "Lost in Tokyo",
      genre: "Drama",
      releaseDate: "2024-12-25",
      estimatedRuntime: "1h 55min",
      thumbnail: "/api/placeholder/800/500",
      progress: 92,
      gallery: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
    },
    {
      id: 3,
      title: "The Last Symphony",
      genre: "Musical Drama",
      releaseDate: "2025-01-15",
      estimatedRuntime: "2h 30min",
      thumbnail: "/api/placeholder/800/500",
      progress: 78,
      gallery: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            Releasing Soon
          </h2>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 transition-opacity">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingReleases.map((movie, index) => (
            <div 
              key={movie.id}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800/50 hover:border-red-500/50 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Main Image Section */}
              <div className="relative aspect-[16/9]">
                <img 
                  src={movie.thumbnail} 
                  alt={movie.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                
                {/* Production Progress */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-sm text-white mb-2">
                    <span>Production Progress</span>
                    <span>{movie.progress}%</span>
                  </div>
                  <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300"
                      style={{ width: `${movie.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
                <p className="text-gray-400 mb-4">{movie.genre}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(movie.releaseDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{movie.estimatedRuntime}</span>
                  </div>
                </div>

                {/* Preview Gallery */}
                <div className="flex gap-2 mb-4">
                  {movie.gallery.map((image, i) => (
                    <div key={i} className="w-16 h-16 rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${movie.title} preview ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="w-full py-2 mt-2 rounded-lg border border-red-500/50 text-red-500 hover:bg-red-500/10 transition-colors flex items-center justify-center gap-2">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReleasingSoon;