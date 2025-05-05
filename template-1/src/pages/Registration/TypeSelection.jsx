// pages/Registration/TypeSelection.jsx
import { Suspense } from 'react';
// import Logo from '../../components/Shared/Logo';
import TypeCards from '../../components/Registration/TypeCards';
import LuxuryBackground from '../../components/UI/LuxuryBackground';

export default function TypeSelection() {
  const handleTypeSelect = (type) => {
    // Navigation logic
  };

  return (
    <>
      <LuxuryBackground />
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-10">
            {/* <Logo className="w-48 mx-auto mb-6" /> */}
            <h1 className="text-3xl font-bold text-white mb-2">
              Join Vincitore's Elite Network
            </h1>
            <p className="text-white/80">
              Register as a broker or agent to access luxury properties
            </p>
          </div>
          
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">
                Select Your Registration Type
              </h2>
              <TypeCards onSelect={handleTypeSelect} />
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}