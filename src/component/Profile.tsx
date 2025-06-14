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
  const { frontmatter, content } = getMDX(`about.${locale}`);

  return (
    <header className={cn(className, 'mt-10 flex gap-20 lg:flex-col')}>
      <div>
        <div className="mb-7 flex items-center gap-7">
          <div className="h-40 w-40 rounded-full border" />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">우영경</h1>
            <h2 className="col-span-2 text-xl">프론트엔드 개발자</h2>
            <div className="flex">이메일 블로그 링크드인 소스코드</div>
          </div>
        </div>
        {content}
      </div>
      <hr className="text-black opacity-10 dark:text-white" />
      <Nav />
    </header>
  );
};

export default Profile;
