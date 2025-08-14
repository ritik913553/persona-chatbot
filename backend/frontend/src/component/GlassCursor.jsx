import React, { useEffect, useState, useRef } from "react";

const GlassCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animation = () => {
      if (ref.current) {
        ref.current.style.transform = `translate(${position.x - 72}px, ${position.y - 72}px)`;
        requestAnimationFrame(animation);
      }
    };
    animation();
  }, [position, ref]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[9999] w-12 h-12 rounded-full border border-white/30 backdrop-blur-sm bg-transparent shadow-lg transition-transform duration-150 ease-out"
    />
  );
};

export default GlassCursor;

