import Nav from './Nav';

const Profile = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-[40%]">
      {/* 프로필 사진 */}
      <div className="h-50 w-50 border" />
      <div className="flex flex-col gap-20">
        <div>
          <h3>타이틀</h3>
          <div>소개</div>
        </div>
        <hr className="w-1/2 opacity-10" />
        <Nav />
      </div>
    </header>
  );
};

export default Profile;
