import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import Loader from '../components/Loader';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BrandValues from '../components/BrandValues';
import Collection from '../components/Collection';
import Testimonials from '../components/Testimonials';
import OurStory from '../components/OurStory';
import Ingredients from '../components/Ingredients';
import TrustBadges from '../components/TrustBadges';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // 1. Setup Smooth Scrolling (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. Mouse tracking glow effect
    const handleMouseMove = (e) => {
      const light = document.getElementById("pointer-light");
      if (light) {
        light.style.setProperty("--x", e.clientX + "px");
        light.style.setProperty("--y", e.clientY + "px");
        light.classList.remove("opacity-0");
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    // 3. Parallax ScrollTriggers
    gsap.utils.toArray('[data-speed]').forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed'));
      gsap.to(el, {
        y: () => (1 - speed) * ScrollTrigger.maxScroll(window),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // 4. Fade In Sections
    gsap.utils.toArray('.fade-in-section').forEach(section => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          }
        }
      );
    });
    
    // 5. Liquid Gold Divider Reveal
    gsap.utils.toArray('.liquid-gold-divider').forEach(divider => {
      gsap.to(divider, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: divider,
          start: "top 90%",
        }
      });
    });

    // 6. Hidden Wow Moment - Shooting Star / Shimmer
    const starInterval = setInterval(() => {
      if(Math.random() > 0.7) {
        const star = document.createElement('div');
        star.style.position = 'fixed';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = '#fff';
        star.style.boxShadow = '0 0 10px 2px #d4af37';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.left = '-10px';
        star.style.zIndex = '9999';
        star.style.pointerEvents = 'none';
        document.body.appendChild(star);
        
        gsap.to(star, {
          x: window.innerWidth + 20,
          y: (Math.random() - 0.5) * 200,
          duration: 1.5,
          ease: "power1.inOut",
          onComplete: () => star.remove()
        });
      }
    }, 25000);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(starInterval);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="antialiased overflow-x-hidden text-gray-200">
      <Loader />
      
      {/* Premium Background Overlay (Grain + Vignette) */}
      <div id="premium-bg"></div>
      
      {/* Mouse Tracking Light Source */}
      <div 
        className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300 opacity-0 mix-blend-screen" 
        id="pointer-light" 
        style={{ background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(212, 175, 55, 0.08), transparent 40%)' }}
      ></div>

      <div id="smooth-wrapper">
        <Header />
        <Hero />
        <BrandValues />
        <Collection />
        <Testimonials />
        <OurStory />
        <Ingredients />
        <TrustBadges />
        <Footer />
      </div>
    </div>
  );
}
