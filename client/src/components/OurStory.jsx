export default function OurStory() {
  return (
    <section className="relative bg-[#050505] border-y border-gray-900 flex flex-col lg:flex-row min-h-[500px] fade-in-section overflow-hidden">
      {/* Left: Image with Ken Burns */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] overflow-hidden">
        <img 
          alt="Perfumer crafting a signature scent" 
          className="absolute inset-0 w-full h-full object-cover object-top animate-ken-burns" 
          src="/our-story.png"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505] hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:hidden"></div>
      </div>
      
      {/* Right: Content */}
      <div className="w-full lg:w-1/2 flex items-center p-12 lg:p-24 relative overflow-hidden">
        {/* Decorative floral background element */}
        <svg className="absolute right-[-10%] bottom-[-20%] w-96 h-96 text-gold opacity-[0.02] animate-spin-slow" fill="currentColor" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M50 0 C60 30, 90 20, 100 50 C80 60, 70 90, 50 100 C30 90, 10 70, 0 50 C20 40, 40 20, 50 0 Z"></path>
        </svg>
        
        <div className="max-w-md relative z-10">
          <div className="text-[0.55rem] tracking-[0.3em] text-gray-500 uppercase mb-5">
            Our Story
          </div>
          <h2 className="font-serif-lux text-3xl text-gold-light mb-7 leading-tight">
            CRAFTED WITH PASSION.<br/>
            INSPIRED BY NATURE.
          </h2>
          <p className="text-sm text-gray-400 font-light leading-[1.8] mb-10">
            At ZARA, every fragrance is a masterpiece — blending rare
            ingredients with the finest craftsmanship. From timeless traditions
            to modern elegance, our creations are made to be remembered.
          </p>
          <a className="text-[0.65rem] tracking-[0.2em] text-gold uppercase border-b border-gold/50 pb-1 hover:text-white hover:border-white transition-all duration-500 inline-flex items-center group" href="#">
            Discover Our Journey 
            <span className="ml-2 group-hover:ml-3 transition-all duration-500">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
