import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import RotationBackground from "../../components/ui/RotationBackground";

export default function RegistrationSteps() {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState("en");

  const handleLanguageToggle = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  const steps = [
    {
      key: "companyInfo",
      content: (
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Company Name
            </label>
            <input
              className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-[#825c17] focus:outline-none focus:ring-1 focus:ring-[#825c17]"
              type="text"
              placeholder="Enter company name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Location
            </label>
            <input
              className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-[#825c17] focus:outline-none focus:ring-1 focus:ring-[#825c17]"
              type="text"
              placeholder="e.g. Dubai"
            />
          </div>
        </div>
      ),
    },
    {
      key: "uploadDocuments",
      content: (
        <div className="space-y-6">
          {[
            "Trade License",
            "Company Profile",
            "RERA Certificate",
            "Manager ID",
          ].map((doc) => (
            <div key={doc}>
              <label className="mb-2 block text-sm font-medium text-white">
                {doc}
              </label>
              <div className="flex items-center">
                <label className="flex w-full cursor-pointer flex-col rounded-lg border-2 border-dashed border-white/30 bg-white/10 hover:border-[#825c17]">
                  <div className="flex flex-col items-center justify-center p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-white/70">
                      Click to upload {doc.toLowerCase()}
                    </p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "managerVerification",
      content: (
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Manager Full Name
            </label>
            <input
              className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-[#825c17] focus:outline-none focus:ring-1 focus:ring-[#825c17]"
              type="text"
              placeholder="Enter manager's name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Email
            </label>
            <input
              className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-[#825c17] focus:outline-none focus:ring-1 focus:ring-[#825c17]"
              type="email"
              placeholder="manager@company.com"
            />
          </div>
        </div>
      ),
    },
    {
      key: "reviewSubmit",
      content: (
        <div className="space-y-6">
          <div className="rounded-lg border border-white/20 bg-white/5 p-4">
            <h3 className="mb-3 text-lg font-medium text-white">
              Company Details
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
              <div>
                <p className="font-medium">Company Name</p>
                <p>Vincitore Properties</p>
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p>Dubai, UAE</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/20 bg-white/5 p-4">
            <h3 className="mb-3 text-lg font-medium text-white">Documents</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Trade License.pdf
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Company Profile.pdf
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                RERA Certificate.pdf
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-white/20 bg-white/5 p-4">
            <h3 className="mb-3 text-lg font-medium text-white">
              Manager Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
              <div>
                <p className="font-medium">Full Name</p>
                <p>John Smith</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p>john@vincitore.com</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentStep = steps[step];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <RotationBackground />

      <div className="relative z-10 mx-auto max-w-2xl px-4 py-10">
        {/* Language Toggle */}
        <div className="mb-6 flex items-center justify-end gap-2">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={lang === "ar"}
              onChange={handleLanguageToggle}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-600 transition-all peer-checked:bg-[#825c17]">
              <div
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                  lang === "ar" ? "right-0.5" : "left-0.5"
                }`}
              ></div>
            </div>
          </label>
          <span className="text-sm font-medium text-white">
            {lang === "ar" ? "العربية" : "English"}
          </span>
        </div>

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={"/logo-3-removebg-preview.png"}
            alt="Vincitore Logo"
            className="h-12"
          />
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-white/70">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  index <= step ? "text-white" : ""
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    index <= step
                      ? "bg-[#825c17] text-white"
                      : "bg-white/10 text-white/50"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="mt-1 text-xs">
                  {t(`register.steps.${steps[index].key}.title`)}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="h-1 w-full bg-white/10"></div>
            <div
              className="absolute top-0 h-1 bg-[#825c17] transition-all duration-300"
              style={{
                width: `${(step / (steps.length - 1)) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Step Title */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white">
            {t("register.title")}
          </h2>
          <p className="mt-2 text-sm text-white/70">
            {t(`register.steps.${currentStep.key}.description`)}
          </p>
        </div>

        {/* Step Content */}
        <div className="mb-8 rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
          {currentStep.content}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {step > 0 ? (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="rounded-lg bg-white/10 px-6 py-3 text-white transition-all hover:bg-white/20 hover:shadow-lg"
            >
              {t("register.previous")}
            </button>
          ) : (
            <div />
          )}
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              className="rounded-lg bg-[#825c17] px-6 py-3 text-white transition-all hover:bg-[#a1782b] hover:shadow-lg"
            >
              {t("register.next")}
            </button>
          ) : (
            <button
              onClick={() => alert("Submitted")}
              className="rounded-lg bg-green-600 px-6 py-3 text-white transition-all hover:bg-green-700 hover:shadow-lg"
            >
              {t("register.submit")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}