import { About, Project, Resume } from '@/component';
import MouseLight from '@/component/MouseLight';
import getMDX from '@/lib/getMDX';
import { useLocale, useTranslations } from 'next-intl';

const Home = () => {
  const locale = useLocale();
  const { frontmatter, content } = getMDX(`about.${locale}`);
  return (
    <div className="relative min-h-screen">
      <MouseLight />
      <section id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="project">
        <Project />
      </section>
    </div>
  );
};

export default Home;
