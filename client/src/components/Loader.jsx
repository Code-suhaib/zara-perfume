import { useEffect } from 'react';
import gsap from 'gsap';

export default function Loader() {
  useEffect(() => {
    const tl = gsap.timeline();

    // Phase 1: Golden spark ignition
    tl.to('#spark', { opacity: 1, duration: 0.6, ease: 'power2.inOut' })
      .to('#spark', { scale: 40, opacity: 0, duration: 1.8, ease: 'power4.out' })

      // Phase 2: Logo engraving
      .to('#engraved-logo', { opacity: 1, duration: 0.3 }, "-=1.4")
      .to('.engrave-path', { strokeDashoffset: 0, duration: 2.2, ease: 'power4.inOut' }, "-=1.2")
      
      // Phase 3: Golden line expands
      .to('.loader-line', { opacity: 1, width: '120px', duration: 1.2, ease: 'power4.inOut' }, "-=0.8")
      
      // Phase 4: Brand name reveals
      .to('.loader-brand-text', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, "-=0.6")

      // Phase 5: Logo glow
      .to('#engraved-logo', { 
        scale: 1.05, 
        filter: 'drop-shadow(0 0 12px rgba(212,175,55,0.6))', 
        duration: 1.2,
        ease: 'power2.inOut'
      })

      // Phase 6: Cinematic fade out
      .to('#cinematic-loader', { 
        opacity: 0, 
        duration: 1.5, 
        ease: 'power4.inOut' 
      })
      .set('#cinematic-loader', { display: 'none' });
  }, []);

  return (
    <div id="cinematic-loader">
      <div id="spark"></div>
      <svg 
        aria-hidden="true"
        fill="none" 
        id="engraved-logo" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="engrave-path"
          d="M2 20h20v2H2v-2zm18-10.5l-4.5 4.5L12 4l-3.5 10L4 9.5l-2 8.5h20l-2-8.5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="loader-line"></div>
      <div className="loader-brand-text" style={{ transform: 'translateY(8px)' }}>
        ZARA
      </div>
    </div>
  );
}
