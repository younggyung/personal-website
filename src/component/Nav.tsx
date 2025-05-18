'use client';

import { useTheme } from '@/feature/context/ThemeContext';
import { Nightlight, LightMode } from '@mui/icons-material';
import { ChangeEvent, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { Locale, useLocale } from 'next-intl';
import Menu from './Menu';

const Nav = () => {
  return (
    <div className="relative flex h-15 items-center justify-center border-1">
      <Menu type="horizon" />
      <div className="absolute right-5">
        <LanguageButton />
        <ThemeButton />
      </div>
    </div>
  );
};

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme !== 'dark' ? <Nightlight /> : <LightMode />}</button>;
};

const LanguageButton = () => {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  // todo-develop: 다국어 컨텐츠 많아져서 느려질 경우 isPending 이용하기
  const pathname = usePathname();
  const params = useParams();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <select onChange={handleSelectChange} defaultValue={locale}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
};

export default Nav;
