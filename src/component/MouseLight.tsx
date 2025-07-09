'use client';

import cn from '@/lib/class-names';
import { useEffect, useState } from 'react';

const MouseLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightOn, setLightOn] = useState<boolean>(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleTurnOnLight = (e: MouseEvent) => {
      setLightOn(prev => !prev);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('dblclick', handleTurnOnLight);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('dblclick', handleTurnOnLight);
    };
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(
      250px circle at ${mousePosition.x}px ${mousePosition.y}px,
      rgba(255, 255, 200, 0.3),
      transparent 80%
    )`,
    transition: 'background 0.1s ease-out',
  };

  return <div className={cn(lightOn && 'pointer-events-none fixed inset-0')} style={backgroundStyle} />;
};

export default MouseLight;
