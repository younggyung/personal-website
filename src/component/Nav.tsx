'use client';

import { useTheme } from '@/feature/context/ThemeContext';
import { Nightlight, LightMode } from '@mui/icons-material';

const Nav = () => {
  return (
    <div className="flex h-12 justify-between">
      <button>로고</button>
      <ThemeButton />
    </div>
  );
};

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme !== 'dark' ? <Nightlight /> : <LightMode />}</button>;
};

export default Nav;
