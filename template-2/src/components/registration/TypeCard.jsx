import { useTranslation } from "react-i18next";
import { Briefcase, Globe, User, Plane } from "lucide-react"; 

export default function TypeCards({ onSelect }) {
  const { t } = useTranslation();

  const types = [
    { 
      id: "uae-brokerage", 
      icon: <Briefcase className="text-[#825c17] w-6 h-6" />, 
      bgColor: "bg-[#825c17]/10",
      borderColor: "border-[#825c17]/30"
    },
    { 
      id: "international-brokerage", 
      icon: <Globe className="text-[#825c17] w-6 h-6" />, 
      bgColor: "bg-[#825c17]/10",
      borderColor: "border-[#825c17]/30"
    },
    { 
      id: "uae-individual", 
      icon: <User className="text-[#825c17] w-6 h-6" />, 
      bgColor: "bg-[#825c17]/10",
      borderColor: "border-[#825c17]/30"
    },
    { 
      id: "international-individual", 
      icon: <Plane className="text-[#825c17] w-6 h-6" />, 
      bgColor: "bg-[#825c17]/10",
      borderColor: "border-[#825c17]/30"
    },
  ];

  return (
    <div className="w-full">
      {/* Desktop Horizontal Layout */}
      <div className="hidden md:flex justify-center gap-6 px-4">
        {types.map((type) => (
          <div
            key={type.id}
            className={`relative flex-1 max-w-md rounded-xl border ${type.borderColor} ${type.bgColor} p-6 shadow-lg transition-all hover:shadow-[#825c17]/30 hover:shadow-lg hover:-translate-y-1 hover:border-[#825c17]/50 group`}
          >
            <div className="flex flex-col h-full">
              {/* Icon with animated background */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#825c17]/20 transition-colors duration-300">
                  {type.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#825c17] transition-colors">
                {t(`types.${type.id}.title`)}
              </h3>

              {/* Requirements list with scroll */}
              <div className="flex-1 mb-6 overflow-y-auto max-h-40 pr-2 custom-scrollbar">
                <ul className="space-y-3">
                  {t(`types.${type.id}.requirements`, { returnObjects: true }).map((req, i) => (
                    <li key={i} className="flex items-start">
                      <span className="shrink-0 w-5 h-5 mr-2 mt-0.5 flex items-center justify-center text-[#825c17] bg-white/10 rounded-full text-xs">✓</span>
                      <span className="text-white/90">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Select button */}
              <button
                onClick={() => onSelect(type.id)}
                className="mt-auto w-full py-3 rounded-lg bg-transparent border-2 border-[#825c17] text-[#825c17] font-medium hover:bg-[#825c17] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>{t("types.select")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
              <div className="absolute -inset-1 bg-[#825c17]/20 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Vertical Layout */}
      <div className="md:hidden grid grid-cols-1 gap-6 px-4">
        {types.map((type) => (
          <div
            key={type.id}
            className={`relative rounded-xl border ${type.borderColor} ${type.bgColor} p-6 shadow-lg transition-all hover:shadow-[#825c17]/20 hover:shadow-md hover:-translate-y-1 hover:border-[#825c17]/50`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t(`types.${type.id}.title`)}
                </h3>
              </div>

              <div className="mb-4">
                <ul className="space-y-2">
                  {t(`types.${type.id}.requirements`, { returnObjects: true }).map((req, i) => (
                    <li key={i} className="flex items-start">
                      <span className="shrink-0 w-4 h-4 mr-2 mt-1 flex items-center justify-center text-[#825c17]">•</span>
                      <span className="text-white/90 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelect(type.id)}
                className="mt-4 w-full py-2 rounded-lg bg-transparent border border-[#825c17] text-[#825c17] font-medium hover:bg-[#825c17]/10 transition-colors"
              >
                {t("types.select")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}