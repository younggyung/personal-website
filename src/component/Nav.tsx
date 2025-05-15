'use client';

import { useTheme } from '@/feature/context/ThemeContext';
import { Nightlight, LightMode } from '@mui/icons-material';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="dark:bg-dark-theme flex h-12 justify-between">
      <Link href="/">로고</Link>
      <ThemeButton />
      <LanguageButton />
    </div>
  );
};

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme !== 'dark' ? <Nightlight /> : <LightMode />}</button>;
};

const LanguageButton = () => {
  return <button>랭</button>;
};

export default Nav;
