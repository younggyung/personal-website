'use client';

import { ROUTES } from '@/app/const/route';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const SideBar = () => {
  const t = useTranslations('nav');

  return (
    <div className="min-w-28">
      {ROUTES.map(i => (
        <Link href={i.path}>{t(i.labelKey)}</Link>
      ))}
    </div>
  );
};

export default SideBar;
