'use client';

import { ROUTES } from '@/const/route';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import cn from '@/lib/class-names';

const Memu = ({ type, className }: { type: 'vertical' | 'horizon'; className?: string }) => {
  const t = useTranslations('nav');

  return (
    <div className={cn('items-center gap-2', type === 'vertical' ? 'flex flex-col' : 'flex', className)}>
      {ROUTES.map((i, idx) => (
        <Link key={idx} href={i.path}>
          {t(i.labelKey)}
        </Link>
      ))}
    </div>
  );
};

export default Memu;
