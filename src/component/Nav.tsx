'use client';

import { ROUTES } from '@/const/route';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useRef, useState } from 'react';
import cn from '@/lib/class-names';

const Nav = () => {
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
        className={cn(showNav ? 'fixed right-5 bottom-1/3 lg:static' : 'hidden items-center gap-2 lg:block')}
      >
        <ArrowUpwardIcon />
        {ROUTES.map((i, idx) => (
          <li className="list-none" key={idx}>
            <Link href={i.path}>{t(i.labelKey)}</Link>
          </li>
        ))}
        <ArrowDownwardIcon />
      </nav>
    </>
  );
};

export default Nav;
