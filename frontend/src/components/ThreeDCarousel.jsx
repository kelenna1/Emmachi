import { useState } from 'react';

const ThreeDCarousel = ({ items = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Ensure enough items for a full, well-spaced 3D ring (10 items total)
  const displayItems = items.length < 8 ? [...items, ...items, ...items].slice(0, 10) : items;
  const count = displayItems.length;
  const angleStep = 360 / count;

  // Calculate card geometry & depth
  const cardWidth = 240;
  const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / count)) + 50;

  return (
    <div 
      className="relative w-full h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden py-8 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* GPU Hardware-Accelerated Keyframes */}
      <style>{`
        @keyframes spin3D {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-360deg); }
        }
        .animate-spin-3d {
          animation: spin3D 25s linear infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
      `}</style>

      {/* Soft emerald staging floor light reflection */}
      <div className="absolute bottom-6 w-96 h-12 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none" />

      {/* Responsive stage scaling */}
      <div className="w-full h-full flex items-center justify-center scale-[0.65] sm:scale-[0.82] md:scale-100 transition-transform duration-500">
        
        {/* 3D Perspective Container */}
        <div 
          style={{ 
            perspective: '1200px',
            transformStyle: 'preserve-3d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Rotating Cylinder Drum powered directly by GPU Compositor */}
          <div 
            className="animate-spin-3d relative cursor-grab active:cursor-grabbing"
            style={{
              width: `${cardWidth}px`,
              height: '180px',
              animationPlayState: isHovered ? 'paused' : 'running',
            }}
          >
            {displayItems.map((item, i) => {
              const itemAngle = i * angleStep;
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: `${cardWidth}px`,
                    height: '180px',
                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  className="p-2"
                >
                  {/* Floating 3D Brand Card (Opaque bg-white for 60/120fps rendering) */}
                  <div className="w-full h-full bg-white rounded-2xl p-5 border border-gray-200 shadow-xl hover:shadow-2xl hover:border-emerald-500/60 transition-all duration-300 flex flex-col items-center justify-center gap-3 group">
                    
                    {/* Brand Logo Container */}
                    <div className="w-16 h-16 bg-gray-50/90 rounded-xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300 border border-gray-100 shadow-inner">
                      {item.logo ? (
                        <img 
                          src={item.logo} 
                          alt={item.name} 
                          className="max-h-12 max-w-full object-contain pointer-events-none" 
                        />
                      ) : (
                        <span className="text-xs font-bold text-gray-700">{item.name}</span>
                      )}
                    </div>

                    {/* Brand Name & Authority Badge */}
                    <div className="text-center">
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-sm text-gray-600 inline-block mt-1">
                        Wholesale enquiries
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDCarousel;
