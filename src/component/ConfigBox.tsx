'use client';
import { useTheme } from '@/feature/context/ThemeContext';
import { Nightlight, LightMode } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ChangeEvent, useEffect, useRef, useState, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { Locale, useLocale } from 'next-intl';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label="Toggle theme"
      className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm hover:bg-gray-50 dark:border-gray-800 dark:bg-transparent dark:hover:bg-gray-900"
      onClick={toggleTheme}
    >
      {theme}
    </button>
  );
};

const LanguageButton = () => {
  const router = useRouter();
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [isPending, startTransition] = useTransition();
  // todo-develop: 다국어 컨텐츠 많아져서 느려질 경우 isPending 이용하기
  const pathname = usePathname();
  const params = useParams();

  const handleSelectChange = (value: Locale) => {
    const nextLocale = value;
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const language: { locale: string; label: string }[] = [
    {
      locale: 'ko',
      label: '한국어',
    },
    {
      locale: 'en',
      label: 'English',
    },
  ];

  return (
    <div className="inline-flex overflow-hidden rounded-full border border-gray-200 text-sm shadow-sm dark:border-gray-800">
      <button
        className={`px-3 py-1 ${locale === 'ko' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white hover:bg-gray-50 dark:bg-transparent dark:hover:bg-gray-900'}`}
        aria-pressed={locale === 'ko'}
        aria-label="Set language: Korean"
        onClick={() => handleSelectChange('ko')}
      >
        KO
      </button>
      <button
        className={`px-3 py-1 ${locale === 'en' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white hover:bg-gray-50 dark:bg-transparent dark:hover:bg-gray-900'}`}
        aria-pressed={locale === 'en'}
        aria-label="Set language: English"
        onClick={() => handleSelectChange('en')}
      >
        EN
      </button>
    </div>
  );
};

const ConfigBox = () => {
  return (
    <div className="flex gap-3">
      <LanguageButton />
      <ThemeButton />
    </div>
  );
};

export default ConfigBox;
