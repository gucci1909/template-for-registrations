export default function TypeCards({ onSelect }) {
  const types = [
    {
      id: 'uae-brokerage',
      title: 'UAE Brokerage Company',
      icon: '🏢',
      requirements: ['Trade License', 'Company Profile', 'RERA Certificate', 'Manager ID'],
      bgColor: 'from-[#825c17]/20 to-[#825c17]/10'
    },
    {
      id: 'international-brokerage',
      title: 'International Brokerage Company',
      icon: '🌐',
      requirements: ['Business License', 'Company Website', 'Proof of Operations', 'Representative ID/Passport'],
      bgColor: 'from-[#825c17]/20 to-[#825c17]/10'
    },
    {
      id: 'uae-individual',
      title: 'UAE Individual Agent',
      icon: '👤',
      requirements: ['Emirates ID', 'RERA ID', 'Personal CV/Profile', 'Active Listing References'],
      bgColor: 'from-[#825c17]/20 to-[#825c17]/10'
    },
    {
      id: 'international-individual',
      title: 'International Individual Agent',
      icon: '✈️',
      requirements: ['Passport Copy', 'Agent Profile/CV', 'Proof of Real Estate Activity'],
      bgColor: 'from-[#825c17]/20 to-[#825c17]/10'
    },
    // {
    //   id: 'uae-agency-agent',
    //   title: 'UAE Agent (Works for Agency)',
    //   icon: '🏛️',
    //   requirements: ['Emirates ID', 'Agency Authorization Letter', 'RERA ID', 'Active Listings'],
    //   bgColor: 'from-[#825c17]/20 to-[#825c17]/10'
    // }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {types.map((type) => (
        <div
          key={type.id}
          onClick={() => onSelect(type.id)}
          className="relative p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#825c17] transition-all cursor-pointer group overflow-hidden flex flex-col h-[330px]"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${type.bgColor} group-hover:opacity-30 transition-opacity`} />
          <div className="relative z-10 flex-1 flex flex-col">
            <div>
              <div className="text-4xl mb-3">{type.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
              <ul className="text-sm text-white/80 space-y-1">
                {type.requirements.map((req, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-[#825c17]">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto pt-4 border-t border-white/10 group-hover:border-[#825c17]/50 transition-all">
              <span className="text-[#825c17] text-sm font-medium">Select this type</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}