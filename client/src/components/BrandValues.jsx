import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BrandValues() {
  const sectionRef = useRef(null);
  const values = [
    {
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: ["Finest", "Ingredients"],
      sub: "Sourced Worldwide"
    },
    {
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      title: ["Expertly", "Crafted"],
      sub: "Master Perfumers"
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: ["Long Lasting", "Performance"],
      sub: "All Day Luxury"
    },
    {
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      title: ["Iconic", "Design"],
      sub: "Timeless Bottle"
    },
    {
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      title: ["Made For", "Connoisseurs"],
      sub: "True Luxury",
      hideMobile: true
    },
  ];

  useEffect(() => {
    const paths = gsap.utils.toArray('.brand-value-path');
    
    // Set initial state
    gsap.set(paths, { strokeDasharray: 100, strokeDashoffset: 100 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      onEnter: () => {
        gsap.to(paths, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power3.out',
          stagger: 0.15
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-gray-900 bg-[#050505] py-10 fade-in-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 text-center">
          {values.map((v, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center justify-center px-4 py-4 group cursor-default transition-all duration-500 hover:bg-white/[0.02] ${
                i < values.length - 1 ? 'border-r border-gray-800/50' : ''
              } ${v.hideMobile ? 'hidden md:flex col-span-2 md:col-span-1' : ''}`}
            >
              <svg 
                className="h-6 w-6 text-gold mb-3 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path className="brand-value-path" d={v.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" pathLength="100"></path>
              </svg>
              <h3 className="text-[0.55rem] tracking-[0.2em] text-gray-300 uppercase mb-1 group-hover:text-gold-light transition-colors duration-500">
                {v.title[0]}<br/>{v.title[1]}
              </h3>
              <p className="text-[0.55rem] text-gray-600">{v.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
