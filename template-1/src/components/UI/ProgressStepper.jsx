// components/UI/ProgressStepper.jsx
export default function ProgressStepper({ steps, currentStep }) {
    return (
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -z-10" />
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep
                  ? 'bg-gold-500 text-white'
                  : 'bg-white/20 text-white/50'
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`mt-2 text-sm ${
                index <= currentStep ? 'text-white' : 'text-white/50'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    );
  }