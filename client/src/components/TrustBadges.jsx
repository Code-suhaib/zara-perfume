export default function TrustBadges() {
  const badges = [
    { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "100% Authentic" },
    { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Cruelty-Free" },
    { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Secure Checkout" },
    { icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4", label: "Free Shipping & Returns" },
  ];

  return (
    <section className="py-14 bg-[#080808] border-t border-gray-900 fade-in-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center space-x-3 text-gray-400 group">
              {i > 0 && (
                <div className="hidden md:block w-px h-4 bg-gray-800 mr-4" aria-hidden="true"></div>
              )}
              <svg 
                className="h-5 w-5 text-gold/70 group-hover:text-gold group-hover:scale-110 transition-all duration-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d={badge.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
              <span className="text-[0.6rem] tracking-widest uppercase group-hover:text-gray-300 transition-colors duration-500">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
