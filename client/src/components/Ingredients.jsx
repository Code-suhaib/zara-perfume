export default function Ingredients() {
  const notes = [
    { title: "Top Notes", items: "Bergamot\nPink Pepper\nCardamom", image: "/top-notes.png" },
    { title: "Heart Notes", items: "Rose\nJasmine\nIris", image: "/heart-notes.png" },
    { title: "Base Notes", items: "Oud\nAmber\nSandalwood", image: "/base-notes.png" },
  ];

  return (
    <section className="py-24 bg-[#050505] fade-in-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[0.55rem] tracking-[0.3em] text-gray-500 uppercase mb-3">The Craft</div>
          <h2 className="font-serif-lux text-2xl md:text-3xl text-gold-light mb-5">OLFACTORY ARCHITECTURE</h2>
          <div className="flex justify-center items-center">
            <div className="h-px bg-gray-800 w-12"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-gold mx-3"></div>
            <div className="h-px bg-gray-800 w-12"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {notes.map((note, i) => (
            <div key={i} className="text-center group flex flex-col items-center">
              <h4 className="font-serif-lux text-gold text-sm tracking-widest uppercase mb-4">
                {note.title}
              </h4>
              <p className="text-xs text-gray-400 leading-loose mb-6 min-h-[60px] whitespace-pre-line">
                {note.items}
              </p>
              <div className="h-48 w-full relative overflow-hidden rounded-lg">
                <img 
                  alt={`${note.title} Ingredients`} 
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105" 
                  src={note.image}
                  loading="lazy"
                />
                {/* Gold tint on hover */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-700 pointer-events-none"></div>
              </div>
            </div>
          ))}

          {/* Essence of Luxury */}
          <div className="text-center group flex-col items-center border-l border-gray-800/40 pl-8 hidden lg:flex">
            <h4 className="font-serif-lux text-gold-light text-sm tracking-widest uppercase mb-4">
              The Essence Of Luxury
            </h4>
            <p className="text-xs text-gray-400 leading-loose mb-6 min-h-[60px]">
              Premium ingredients.<br/>Exquisite blends.<br/>Unforgettable you.
            </p>
            <div className="h-48 w-full relative overflow-hidden rounded-lg">
              <img 
                alt="Luxury Essence" 
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105" 
                src="/essence-luxury.png"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-700 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
