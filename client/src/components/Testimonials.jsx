export default function Testimonials() {
  const testimonials = [
    {
      type: 'stars',
      quote: "Imperial Gold is hands down the most sophisticated scent I've ever owned. The longevity is incredible.",
      author: "James M.",
    },
    {
      type: 'press',
      pressName: 'VOGUE',
      quote: "ZARA has masterfully redefined modern elegance. Their attention to raw ingredients is unparalleled.",
      author: "Editor's Pick",
    },
    {
      type: 'stars',
      quote: "Every time I wear Amber Vanille, I get stopped and asked what I'm wearing. A true masterpiece.",
      author: "Sarah T.",
    },
  ];

  return (
    <section className="py-24 bg-[#030303] fade-in-section border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="text-[0.55rem] tracking-[0.3em] text-gray-500 uppercase mb-3">Social Proof</div>
          <h2 className="font-serif-lux text-2xl md:text-3xl text-gold-light">A WORD FROM CONNOISSEURS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="testimonial-card liquid-glass p-8 border border-gray-800/60 rounded-2xl hover:border-gold/30"
            >
              {/* Decorative Quote */}
              <div className="font-serif-lux text-4xl text-gold/20 leading-none mb-2" aria-hidden="true">"</div>
              
              {t.type === 'stars' ? (
                <div className="text-gold text-sm mb-4 tracking-wider">★★★★★</div>
              ) : (
                <div className="text-gold mb-4 text-xs font-serif-lux tracking-[0.3em]">{t.pressName}</div>
              )}
              
              <p className="text-gray-300 text-sm font-light leading-[1.8] mb-6 italic font-body-elegant">
                "{t.quote}"
              </p>
              <div className="text-[0.6rem] tracking-[0.15em] text-gray-500 uppercase">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
