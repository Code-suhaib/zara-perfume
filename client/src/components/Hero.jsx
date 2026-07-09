import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. Text Split and GSAP Animations
    let heroChars = '.hero-title';
    if (typeof SplitType !== 'undefined') {
      const heroTitle = new SplitType('.hero-title', { types: 'words, chars' });
      gsap.set(heroTitle.chars, { opacity: 0, y: 20 });
      heroChars = heroTitle.chars;
    }

    const tl = gsap.timeline({ delay: 3.8 });
    tl.to('.hero-image-container', { y: 0, opacity: 1, duration: 2.2, ease: 'power3.out' })
      .to('.volumetric-rays', { opacity: 1, duration: 2.5 }, "-=1.8")
      .to('#smoke-canvas', { opacity: 0.5, duration: 2.5 }, "-=2")
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, "-=1.2")
      .to(heroChars, { 
        y: 0, 
        opacity: 1, 
        stagger: 0.04, 
        duration: 0.9, 
        ease: 'power3.out' 
      }, "-=0.6")
      .to('.hero-deco', { opacity: 1, duration: 1.2 }, "-=0.3")
      .to('.hero-desc', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, "-=0.6")
      .to('.hero-cta', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, "-=0.6")
      .to('.hero-scroll', { opacity: 1, duration: 1.2 }, "-=0.6");

    // 2. Canvas Particle Smoke — optimized to 80 particles
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let particlesArray = [];
      const PARTICLE_COUNT = 80;
      
      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 0.1;
          this.speedX = Math.random() * 0.4 - 0.2;
          this.speedY = Math.random() * -0.4 - 0.08;
          this.opacity = Math.random() * 0.4;
        }
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.size > 0.2) this.size -= 0.004;
          if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
            this.size = Math.random() * 2 + 0.1;
          }
        }
        draw() {
          ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      function initParticles() {
        particlesArray = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          particlesArray.push(new Particle());
        }
      }

      function handleParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
        }
      }

      let animationFrameId;

      function animateCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height, 100, 
          canvas.width / 2, canvas.height / 2, canvas.width
        );
        gradient.addColorStop(0, 'rgba(212,175,55,0.03)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        handleParticles();
        animationFrameId = requestAnimationFrame(animateCanvas);
      }

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      };

      window.addEventListener('resize', handleResize);
      initParticles();
      animateCanvas();

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-48 lg:pt-32 pb-20 px-8 lg:px-16 overflow-hidden hero-section">
      <div 
        className="absolute right-[10%] top-[20%] w-[600px] h-[600px] bg-yellow-900/10 rounded-full blur-[120px] -z-10 animate-spin-slow" 
        data-speed="0.8"
      ></div>
      <div className="volumetric-rays z-0"></div>
      <canvas id="smoke-canvas" ref={canvasRef} aria-hidden="true"></canvas>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full mt-10 lg:mt-0">
        {/* Hero Text Content */}
        <div className="max-w-xl z-10 lg:pl-8 hero-text-container">
          <div className="text-gold tracking-[0.3em] text-[0.65rem] mb-5 uppercase hero-subtitle opacity-0 font-medium">
            The Essence Of
          </div>
          <h1 
            className="font-serif-lux text-5xl lg:text-7xl leading-[0.92] text-white mb-7 tracking-tight hero-title" 
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          >
            TIMELESS<br/>
            <span className="text-gold-light">ELEGANCE</span>
          </h1>
          
          <div className="flex items-center mb-8 hero-deco opacity-0">
            <div className="h-px bg-gold/30 w-16"></div>
            <svg className="h-4 w-4 text-gold mx-4 opacity-70" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2 20h20v2H2v-2zm18-10.5l-4.5 4.5L12 4l-3.5 10L4 9.5l-2 8.5h20l-2-8.5z"></path>
            </svg>
            <div className="h-px bg-gold/30 w-16"></div>
          </div>
          
          <p className="text-gray-400 text-sm mb-12 font-light leading-[1.8] hero-desc opacity-0 max-w-md">
            Crafted for those who leave a lasting impression.<br/>
            Discover the art of fine fragrance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-8 hero-cta opacity-0">
            <MagneticButton href="#" className="bg-gold hover:bg-gold-dark text-black px-10 py-3.5 text-[0.65rem] tracking-[0.2em] uppercase font-semibold hover:-translate-y-0.5 hover:shadow-gold-glow w-full sm:w-auto text-center rounded-full">
              Explore Collection
            </MagneticButton>
            <MagneticButton href="#" className="flex items-center text-[0.65rem] tracking-widest text-gray-400 hover:text-gold uppercase group">
              Watch The Film
              <svg className="w-9 h-9 ml-3 text-gold border border-gold/50 rounded-full p-2 group-hover:bg-gold group-hover:text-black group-hover:border-gold group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </MagneticButton>
          </div>
        </div>

        {/* Right Side: Hero Bottle Image */}
        <div className="relative z-10 h-full flex items-center justify-center hero-image-container translate-y-12 opacity-0">
          <div className="relative group">
            <div className="absolute inset-0 bg-gold/10 rounded-full blur-[100px] -z-10 scale-90 pointer-events-none"></div>
            <img 
              alt="ZARA Signature Perfume Bottle" 
              className="max-w-full h-auto max-h-[50vh] lg:max-h-[70vh] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)] mix-blend-screen animate-float" 
              style={{ 
                maskImage: 'radial-gradient(ellipse at center, black 65%, transparent 100%)', 
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 65%, transparent 100%)' 
              }} 
              data-speed="1.05" 
              src="/hero-bottle.png"
            />
            {/* Hover shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Scroll to discover */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center hidden lg:flex hero-scroll opacity-0">
        <span className="vertical-text text-[0.55rem] tracking-[0.3em] text-gray-500 uppercase mb-6">Scroll To Discover</span>
        <div className="h-24 w-px bg-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gold animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
}
