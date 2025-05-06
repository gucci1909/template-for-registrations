// components/UI/LuxuryBackground.jsx
import { useEffect, useState } from 'react';

export default function LuxuryBackground() {
  const [currentBg, setCurrentBg] = useState(0);
  const bgImages = [
    '/premium_photo-1661916762370-4768aa1fc4c4.avif',
    '/photo-1489516408517-0c0a15662682.avif',
    '/photo-1669146907364-6cf31db559b0.avif'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentBg === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={img}
            alt="Luxury Property Background"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 z-20 border-[12px] border-white/5 pointer-events-none"></div>
    </div>
  );
}