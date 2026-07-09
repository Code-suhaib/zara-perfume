import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className, onClick, href }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      // Magnetic pull factor (e.g. 0.4 means it pulls 40% towards the mouse)
      xTo(x * 0.4);
      yTo(y * 0.4);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const combinedClass = `inline-block ${className || ''}`;

  if (href) {
    return (
      <a ref={buttonRef} href={href} className={combinedClass} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button ref={buttonRef} className={combinedClass} onClick={onClick}>
      {children}
    </button>
  );
}
