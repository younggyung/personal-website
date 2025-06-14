import { Resume } from '@/component';
import getMDX from '@/lib/getMDX';
import { useLocale, useTranslations } from 'next-intl';

const Home = () => {
  const locale = useLocale();
  const { frontmatter, content } = getMDX(`about.${locale}`);
  return (
    <div className="h-[2000px]">
      <Resume />
    </div>
  );
};

export default Home;
