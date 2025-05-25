import cn from '@/lib/class-names';
import Nav from './Nav';

type ProfilePropType = {
  className: string;
};

const Profile = ({ className }: ProfilePropType) => {
  return (
    <header className={cn(className, 'flex flex-col gap-20')}>
      {/* 프로필 사진 */}
      <div>
        <div className="mb-7 flex items-center gap-7">
          <div className="h-20 w-20 rounded-full border" />
          <div>
            <h1 className="text-3xl">우영경</h1>
            <h2 className="col-span-2 text-xl">프론트엔드 개발자</h2>
          </div>
        </div>
        <p>소개글</p>
      </div>
      <hr className="w-dvw text-black opacity-10 dark:text-white" />
      <Nav />
    </header>
  );
};

export default Profile;
