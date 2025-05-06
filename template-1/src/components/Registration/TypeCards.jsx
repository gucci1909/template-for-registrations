export default function TypeCards({ onSelect }) {
  const types = [
    {
      id: "uae-brokerage",
      title: "UAE Brokerage Company",
      icon: "🏢",
      requirements: [
        "Trade License",
        "Company Profile",
        "RERA Certificate",
        "Manager ID",
      ],
      bgColor: "from-[#825c17]/20 to-[#825c17]/10",
    },
    {
      id: "international-brokerage",
      title: "International Brokerage Company",
      icon: "🌐",
      requirements: [
        "Business License",
        "Company Website",
        "Proof of Operations",
        "Representative ID/Passport",
      ],
      bgColor: "from-[#825c17]/20 to-[#825c17]/10",
    },
    {
      id: "uae-individual",
      title: "UAE Individual Agent",
      icon: "👤",
      requirements: [
        "Emirates ID",
        "RERA ID",
        "Personal CV/Profile",
        "Active Listing References",
      ],
      bgColor: "from-[#825c17]/20 to-[#825c17]/10",
    },
    {
      id: "international-individual",
      title: "International Individual Agent",
      icon: "✈️",
      requirements: [
        "Passport Copy",
        "Agent Profile/CV",
        "Proof of Real Estate Activity",
      ],
      bgColor: "from-[#825c17]/20 to-[#825c17]/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {types.map((type) => (
        <div
          key={type.id}
          onClick={() => onSelect(type.id)}
          className="group relative flex h-[330px] cursor-pointer flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#825c17]"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${type.bgColor} transition-opacity group-hover:opacity-30`}
          />
          <div className="relative z-10 flex flex-1 flex-col">
            <div>
              <div className="mb-3 text-4xl">{type.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {type.title}
              </h3>
              <ul className="space-y-1 text-sm text-white/80">
                {type.requirements.map((req, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-[#825c17]">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto border-t border-white/10 pt-4 transition-all group-hover:border-[#825c17]/50">
              <span className="text-sm font-medium text-[#825c17]">
                Select this type
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
