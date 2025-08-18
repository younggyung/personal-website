import cn from '@/lib/class-names';
import Nav from './Nav';
import getMDX from '@/lib/getMDX';
import Image from 'next/image';
import { useLocale } from 'next-intl';

type ProfilePropType = {
  className: string;
};

const Profile = ({ className }: ProfilePropType) => {
  const locale = useLocale();
  return (
    <header className={cn(className, 'my-10 flex shrink-0 gap-20 lg:flex-col')}>
      <div>
        <div className="mb-7 flex items-center gap-7">
          {/* 사진 */}
          <div className="flex h-40 w-40 rounded-full border" />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">{locale === 'ko' ? '우영경' : 'Younggyung Woo'}</h1>
            <h2 className="col-span-2 text-xl">프론트엔드 개발자</h2>
            <div className="flex">이메일 블로그 링크드인 소스코드</div>
          </div>
        </div>
        <p>Frontend Developer</p>
        <p>UI/UX Lover</p>
        <p>Product-Minded Engineer</p>
        <p>Outdoor Lover</p>
      </div>
      <Nav />
    </header>
  );
};

export default Profile;
