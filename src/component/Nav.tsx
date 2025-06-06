'use client';
import { ROUTES } from '@/const/route';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Nav = () => {
  const t = useTranslations('nav');
  return (
    <>
      <nav className="hidden items-center gap-2 lg:block">
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
