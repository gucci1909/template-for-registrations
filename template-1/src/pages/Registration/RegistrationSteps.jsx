// import React, { useEffect } from "react";
// import { useNavigate, useParams } from "react-router";

// const typeDetails = {
//   "uae-brokerage": {
//     title: "UAE Brokerage Company",
//     icon: "🏢",
//     requirements: [
//       "Trade License",
//       "Company Profile",
//       "RERA Certificate",
//       "Manager ID",
//     ],
//     description:
//       "Register your UAE-based real estate brokerage company to access premium listings.",
//   },
 
// };

// function RegistrationSteps() {
//   const { type } = useParams();
//   const navigate = useNavigate();
//   const details = typeDetails[type] || typeDetails["uae-brokerage"];

//   useEffect(() => {
//     console.log({ d: details });
//   }, []);

//   return <div>RegistrationSteps</div>;
// }

// export default RegistrationSteps;


import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import LuxuryBackground from "../../components/UI/LuxuryBackground";

const typeDetails = {
  "uae-brokerage": {
    title: "UAE Brokerage Company",
    icon: "🏢",
    requirements: [
      "Trade License",
      "Company Profile",
      "RERA Certificate",
      "Manager ID",
    ],
    description:
      "Register your UAE-based real estate brokerage company to access premium listings.",
    steps: [
      {
        title: "Company Information",
        description: "Provide basic details about your brokerage"
      },
      {
        title: "Document Upload",
        description: "Submit required verification documents"
      },
      {
        title: "Manager Verification",
        description: "Verify identity of company manager"
      },
      {
        title: "Review & Submit",
        description: "Confirm all details are correct"
      }
    ]
  },
  "international-brokerage": {
    title: "International Brokerage Company",
    icon: "🌐",
    requirements: [
      "Business License",
      "Company Website",
      "Proof of Operations",
      "Representative ID/Passport",
    ],
    description:
      "Register your international real estate brokerage to connect with global luxury properties.",
  },
  "uae-individual": {
    title: "UAE Individual Agent",
    icon: "👤",
    requirements: [
      "Emirates ID",
      "RERA ID",
      "Personal CV/Profile",
      "Active Listing References",
    ],
    description: "Register as an individual agent operating in the UAE market.",
  },
  "international-individual": {
    title: "International Individual Agent",
    icon: "✈️",
    requirements: [
      "Passport Copy",
      "Agent Profile/CV",
      "Proof of Real Estate Activity",
    ],
    description:
      "Register as an international individual agent to access global listings.",
  },
  // ... other types
};

function RegistrationSteps() {
  const { type } = useParams();
  const navigate = useNavigate();
  const details = typeDetails["uae-brokerage"];
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="relative min-h-screen text-white">
      <LuxuryBackground />
      
      <div className="relative z-30 container mx-auto px-4 py-12">
        {/* Header with Logo */}
        <div className="flex justify-between items-center mb-12">
          <img 
            src="/logo-3-removebg-preview.png" 
            alt="Vincitore Logo"
            className="h-16"
          />
          <div className="text-right">
            <p className="text-sm opacity-80">Registration Portal</p>
            <h1 className="text-3xl font-bold">{details.title}</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1.5 bg-white/10">
            <div 
              className="h-full bg-[#825c17] transition-all duration-500" 
              style={{ width: `${(currentStep + 1) * 25}%` }}
            ></div>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Steps Navigation */}
              <div className="md:w-1/3">
                <h2 className="text-xl font-semibold mb-6 text-[#825c17]">Registration Steps</h2>
                <ul className="space-y-4">
                  {details.steps.map((step, index) => (
                    <li 
                      key={index}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${currentStep === index ? 'bg-[#825c17] border-l-4 border-white' : 'bg-white/5 hover:bg-white/10'}`}
                      onClick={() => setCurrentStep(index)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === index ? 'bg-white text-[#825c17]' : 'bg-[#825c17] text-white'}`}>
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-medium">{step.title}</h3>
                          <p className="text-sm opacity-80">{step.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current Step Content */}
              <div className="md:w-2/3">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-3xl">{details.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold">{details.steps[currentStep].title}</h2>
                      <p className="text-white/80">{details.steps[currentStep].description}</p>
                    </div>
                  </div>

                  {/* Form Placeholder - This would be your actual form component */}
                  <div className="space-y-4">
                    {currentStep === 0 && (
                      <>
                        <div>
                          <label className="block mb-1">Company Name</label>
                          <input type="text" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#825c17]" />
                        </div>
                        <div>
                          <label className="block mb-1">Company Email</label>
                          <input type="email" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#825c17]" />
                        </div>
                        <div>
                          <label className="block mb-1">Phone Number</label>
                          <input type="tel" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#825c17]" />
                        </div>
                      </>
                    )}

                    {currentStep === 1 && (
                      <>
                        <div className="space-y-4">
                          {details.requirements.map((doc, index) => (
                            <div key={index} className="border border-white/20 rounded-lg p-4">
                              <h3 className="font-medium mb-2">{doc}</h3>
                              <div className="flex items-center gap-4">
                                <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center w-full">
                                  <p className="text-sm mb-2">Upload {doc}</p>
                                  <button className="bg-[#825c17] hover:bg-[#946b25] px-4 py-2 rounded text-sm">
                                    Select File
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block mb-1">Manager Full Name</label>
                          <input type="text" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#825c17]" />
                        </div>
                        <div>
                          <label className="block mb-1">Manager Email</label>
                          <input type="email" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#825c17]" />
                        </div>
                        <div>
                          <label className="block mb-1">Manager ID Copy</label>
                          <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center">
                            <p className="text-sm mb-2">Upload Manager ID</p>
                            <button className="bg-[#825c17] hover:bg-[#946b25] px-4 py-2 rounded text-sm">
                              Select File
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div className="bg-white/5 p-6 rounded-lg">
                          <h3 className="text-lg font-medium mb-4">Review Your Information</h3>
                          <div className="space-y-3">
                            <p><span className="opacity-70">Company Name:</span> Vincitore Real Estate</p>
                            <p><span className="opacity-70">Email:</span> info@vincitore.ae</p>
                            <p><span className="opacity-70">Phone:</span> +971 4 123 4567</p>
                            <p><span className="opacity-70">Manager:</span> Ahmed Al Maktoum</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="terms" className="accent-[#825c17]" />
                          <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    <button 
                      onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
                      disabled={currentStep === 0}
                      className={`px-6 py-2 rounded ${currentStep === 0 ? 'bg-white/10 text-white/30 cursor-not-allowed' : 'bg-white/20 hover:bg-white/30'}`}
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => {
                        if (currentStep < details.steps.length - 1) {
                          setCurrentStep(prev => prev + 1);
                        } else {
                          // Submit logic here
                          alert('Application submitted for review!');
                        }
                      }}
                      className="px-6 py-2 rounded bg-[#825c17] hover:bg-[#946b25] font-medium"
                    >
                      {currentStep === details.steps.length - 1 ? 'Submit Application' : 'Next Step'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Summary */}
        <div className="mt-8 bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-lg font-medium mb-4 text-[#825c17]">Required Documents</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {details.requirements.map((req, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#825c17] flex items-center justify-center text-xs">✓</div>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSteps;