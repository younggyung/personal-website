'use client';

import cn from '@/lib/class-names';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useTheme } from '@/feature/context/ThemeContext';
import Tags from './Tag';

type ProfilePropType = {
  className: string;
};

const taglines = ['Frontend Developer', 'UI/UX Lover', 'Product-Minded Engineer', 'Outdoor Lover'];

const Profile = ({ className }: ProfilePropType) => {
  const locale = useLocale();
  const { theme } = useTheme();
  return (
    <header className={cn(className, 'flex shrink-0 gap-20 rounded-xl backdrop-blur lg:flex-col')}>
      <div className="flex flex-col items-center gap-10">
        <div className="h-[150px] w-[150px] items-center overflow-hidden rounded-full">
          <Image
            src="/image/coffee_cr.jpg"
            alt="profile"
            width={200}
            height={200}
            className="translate-x -translate-y-8 object-cover dark:grayscale"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">{locale === 'ko' ? '우영경' : 'Younggyung Woo'}</h1>
          <h2 className="col-span-2 text-xl">프론트엔드 개발자</h2>
          <div className="flex">이메일 블로그 링크드인 소스코드</div>
        </div>
      </div>
      <div className="mx-3 gap-2 lg:flex lg:flex-col">
        {taglines.map(tag => (
          <Tags key={tag}>{tag}</Tags>
        ))}
      </div>
    </header>
  );
};

export default Profile;
