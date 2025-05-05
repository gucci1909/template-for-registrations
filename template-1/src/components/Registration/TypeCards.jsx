// components/Registration/TypeCards.jsx
export default function TypeCards({ onSelect }) {
    const types = [
      {
        id: 'uae-brokerage',
        title: 'UAE Brokerage Company',
        icon: '🏢',
        requirements: ['Trade License', 'RERA Certificate', 'Manager ID']
      },
      // Add other 3 types
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {types.map((type) => (
          <div
            key={type.id}
            onClick={() => onSelect(type.id)}
            className="relative p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-gold-500 transition-all cursor-pointer group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 group-hover:to-gold-500/20 transition-all" />
            <div className="relative z-10">
              <div className="text-4xl mb-3">{type.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
              <ul className="text-sm text-white/80 space-y-1">
                {type.requirements.map((req, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }