import { useEffect, useState } from 'react';

export default function RotationBackground() {
  const [currentBg, setCurrentBg] = useState(0);
  const [loaded, setLoaded] = useState([]);
  
  // Use high-quality optimized images
  const bgImages = [
    '/premium_photo-1661919068698-40e7b78f196a.avif', // Replace with your actual high-res image paths
    '/premium_photo-1733317416241-d92ba6af4e51.avif'
  ];

  // Preload images for smoother transitions
  useEffect(() => {
    bgImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoaded(prev => [...prev, src]);
      };
    });
  }, []);

  // Faster rotation (3 seconds) with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentBg === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            willChange: 'opacity' // Optimize for animation
          }}
        >
          {/* Fallback for images that haven't loaded yet */}
          {!loaded.includes(img) && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
          )}
        </div>
      ))}
    </div>
  );
}