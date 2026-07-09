import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function TransitionWrapper({ children }) {
  const location = useLocation();
  const wrapperRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    
    // Animate out (very fast hide before React router swaps)
    // To do a true cross-fade with React Router v6, it's more complex,
    // so we do a fade IN on every route change.
    
    gsap.fromTo(el, 
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.inOut" }
    );
  }, [location.pathname]);

  return <div ref={wrapperRef} className="w-full h-full">{children}</div>;
}
