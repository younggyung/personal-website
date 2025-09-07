'use client';

import { ROUTES } from '@/const/route';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useRef, useState } from 'react';
import cn from '@/lib/class-names';

const Nav = ({ type }: { type: 'header' | 'mobile' }) => {
  return <>{type === 'header' ? <HeaderNav /> : <MobileNav />}</>;
};

const HeaderNav = () => {
  const t = useTranslations('nav');
  return (
    <nav className="hidden gap-6 md:flex">
      <li
        className="cursor-pointer list-none"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        {t('home')}
      </li>
      {ROUTES.map((i, idx) => (
        <li className="list-none" key={idx}>
          <a href={i.path} className="scroll-smooth">
            {t(i.labelKey)}
          </a>
        </li>
      ))}
    </nav>
  );
};

const MobileNav = () => {
  const t = useTranslations('nav');
  const [showNav, setShowNav] = useState(false);
  const isHoverRef = useRef(false);

  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const resetHideTimer = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      if (!isHoverRef.current) setShowNav(false);
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(true);
      resetHideTimer();
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <>
      <nav
        onMouseEnter={() => {
          setShowNav(true);
          isHoverRef.current = true;
        }}
        onMouseLeave={() => {
          isHoverRef.current = false;
          resetHideTimer();
        }}
        className={cn(showNav ? 'fixed right-5 bottom-1/3 z-50' : 'hidden')}
      >
        <ArrowUpwardIcon onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        {ROUTES.map((i, idx) => (
          <li className="list-none" key={idx}>
            <a href={i.path} className="scroll-smooth">
              {t(i.labelKey)}
            </a>
          </li>
        ))}
        <ArrowDownwardIcon onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} />
      </nav>
    </>
  );
};

export default Nav;
