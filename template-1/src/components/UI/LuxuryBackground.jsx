// components/UI/LuxuryBackground.jsx
import { useEffect, useState } from 'react';

export default function LuxuryBackground() {
  const [currentBg, setCurrentBg] = useState(0);
  const bgImages = [
    '/luxury-buildings/bg1.jpg',
    '/luxury-buildings/bg2.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentBg === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={img}
            alt="Luxury Building Background"
            className="w-full h-full object-cover blur-sm brightness-50"
          />
        </div>
      ))}
    </div>
  );
}