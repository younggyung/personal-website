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
  return <button onClick={toggleTheme}>{theme !== 'dark' ? <Nightlight /> : <LightMode />}</button>;
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
    <div className="relative cursor-pointer text-sm" ref={ref}>
      <button onClick={() => setIsOpen(true)}>
        {locale === 'ko' ? '한국어' : 'English'}
        <KeyboardArrowDownIcon />
      </button>
      {isOpen && (
        <ul className="absolute rounded-md border p-1 shadow-md dark:bg-black">
          {language.map(item => (
            <li
              key={item.label}
              className="rounded-md px-1 py-0.5 hover:cursor-pointer hover:bg-gray-200/10"
              onClick={() => handleSelectChange(item.locale)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
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
