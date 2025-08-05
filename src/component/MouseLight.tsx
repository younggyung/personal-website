'use client';

import cn from '@/lib/class-names';
import { useEffect, useRef, useState } from 'react';

const MouseLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightOn, setLightOn] = useState<boolean>(true);
  const [showHint, setShowHint] = useState(true);

  const onSoundRef = useRef<HTMLAudioElement | null>(null);
  const offSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleTurnOnLight = () => {
      setLightOn(prev => {
        const isTurningOn = !prev;
        if (isTurningOn) {
          onSoundRef.current?.play();
        } else {
          offSoundRef.current?.play();
        }
        return !prev;
      });
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

  useEffect(() => {
    if (lightOn) {
      setShowHint(true);
      const timer = setTimeout(() => setShowHint(false), 3000);
      return () => clearTimeout(timer);
    }
    if (!lightOn) {
      setShowHint(false);
    }
  }, [lightOn]);

  return (
    <>
      <audio ref={onSoundRef} src="/sounds/toggle-on.mp3" preload="auto" />
      <audio ref={offSoundRef} src="/sounds/toggle-off.mp3" preload="auto" />

      <div className={cn(lightOn && 'pointer-events-none fixed inset-0')} style={backgroundStyle} />
      <div
        className="pointer-events-none fixed z-50 rounded-md bg-black/50 px-2 py-1 text-xs text-white transition-opacity duration-500"
        style={{
          opacity: showHint ? 1 : 0,
          top: mousePosition.y + 20,
          left: mousePosition.x + 10,
          transform: 'translate(-50%, 0)',
        }}
      >
        🔦 click twice
      </div>
    </>
  );
};

export default MouseLight;
