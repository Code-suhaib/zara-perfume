import { useEffect, useRef } from 'react';
import MagneticButton from './MagneticButton';

export default function Collection() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current || !window.Swiper) return;
    const swiper = new window.Swiper(swiperRef.current, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      initialSlide: 2,
      loop: false,
      observer: true,
      observeParents: true,
      speed: 800,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1,
        scale: 0.85,
        slideShadows: false,
      }
    });

    return () => {
      if (swiper && !swiper.destroyed) swiper.destroy();
    };
  }, []);

  const products = [
    {
      name: "OUD NOIR",
      image: "bottle-oud-noir.png",
      rating: 5,
      reviews: 124,
      desc: "Bold. Intense. Timeless.",
      price: "$240",
      size: "50ml",
      highlight: false
    },
    {
      name: "AMBER VANILLE",
      image: "bottle-amber-vanille.png",
      rating: 4,
      reviews: 89,
      desc: "Warm. Sweet. Addictive.",
      price: "$195",
      size: "50ml",
      highlight: false
    },
    {
      name: "IMPERIAL GOLD",
      image: "bottle-imperial-gold.png",
      rating: 5,
      reviews: 312,
      desc: "Regal. Luxurious. Iconic.",
      price: "$350",
      size: "100ml",
      highlight: true
    },
    {
      name: "SANTAL ROYAL",
      image: "bottle-santal-royal.png",
      rating: 5,
      reviews: 205,
      desc: "Woody. Smooth. Sophisticated.",
      price: "$220",
      size: "50ml",
      highlight: false
    },
    {
      name: "NOIR ELIXIR",
      image: "bottle-noir-elixir.png",
      rating: 4,
      reviews: 67,
      desc: "Mysterious. Dark. Seductive.",
      price: "$280",
      size: "100ml",
      highlight: false
    }
  ];

  return (
    <>
      <section className="py-24 px-4 bg-gradient-to-b from-[#050505] to-[#080808] fade-in-section">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="text-[0.55rem] tracking-[0.3em] text-gray-500 uppercase mb-3">The Collection</div>
            <h2 className="font-serif-lux text-3xl md:text-4xl text-gold-light mb-5">DISCOVER YOUR SIGNATURE SCENT</h2>
            <div className="flex justify-center items-center">
              <div className="h-px bg-gray-800 w-16"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-gold mx-4"></div>
              <div className="h-px bg-gray-800 w-16"></div>
            </div>
          </div>

          {/* Olfactory Filters */}
          <div className="flex justify-center space-x-4 md:space-x-8 mb-12 text-[0.65rem] tracking-[0.15em] uppercase overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            <button className="text-gold border-b border-gold pb-1">All Scents</button>
            <button className="text-gray-500 hover:text-gray-200 nav-link-hover pb-1">Woody</button>
            <button className="text-gray-500 hover:text-gray-200 nav-link-hover pb-1">Floral</button>
            <button className="text-gray-500 hover:text-gray-200 nav-link-hover pb-1">Oriental</button>
            <button className="text-gray-500 hover:text-gray-200 nav-link-hover pb-1">Fresh</button>
          </div>

          {/* Products Carousel */}
          <div className="swiper product-swiper w-full pt-10 pb-16 overflow-hidden relative" ref={swiperRef}>
            <div className="swiper-wrapper items-end">
              {products.map((product, index) => (
                <div key={index} className="swiper-slide w-[280px] md:w-[320px] flex flex-col items-center group relative">
                  <div className={`relative mb-4 w-full flex justify-center items-center transition-all duration-700 overflow-hidden cursor-pointer ${product.highlight ? 'rounded-lg border border-gold/40 shadow-gold-sm p-1' : ''}`}>
                    <img 
                      alt={`${product.name} Bottle`} 
                      className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105" 
                      src={product.image}
                      loading="lazy"
                    />
                    <MagneticButton className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 text-[0.55rem] uppercase tracking-widest opacity-0 transform translate-y-4 transition-all duration-500 ease-luxury group-hover:opacity-100 group-hover:translate-y-0 rounded-full ${
                      product.highlight 
                        ? 'bg-gold text-black border border-gold hover:bg-gold-dark' 
                        : 'liquid-glass text-white border border-gold/30 hover:bg-gold hover:text-black hover:border-gold'
                    }`}>
                      Quick Add
                    </MagneticButton>
                  </div>
                  <h3 className={`font-serif-lux text-base mb-1.5 cursor-pointer transition-colors duration-500 ${product.highlight ? 'text-gold' : 'text-gray-300 hover:text-gold'}`}>
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex text-gold text-xs mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < product.rating ? "opacity-100" : "opacity-20"}>★</span>
                    ))}
                    <span className="text-gray-500 text-[0.55rem] ml-1.5 mt-0.5">({product.reviews})</span>
                  </div>
                  
                  <p className="text-[0.6rem] tracking-wider text-gray-500 mb-2 text-center font-light">{product.desc}</p>
                  <div className={`text-sm font-light ${product.highlight ? 'text-gold' : 'text-gray-200'}`}>
                    {product.price} <span className="text-[0.55rem] text-gray-500 ml-1">| {product.size}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Arrows */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
          <div className="mt-12 text-center">
            <a className="inline-block border border-gold/60 text-gold hover:bg-gold hover:text-black transition-all duration-500 px-10 py-3.5 text-[0.65rem] tracking-widest uppercase rounded-full hover:shadow-gold-glow" href="#">
              View All Fragrances
            </a>
          </div>
        </div>
      </section>
      <div className="liquid-gold-divider"></div>
    </>
  );
}
