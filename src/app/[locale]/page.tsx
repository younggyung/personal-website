import { About, Project, Resume } from '@/component';
import getMDX from '@/lib/getMDX';
import { useLocale, useTranslations } from 'next-intl';

const Home = () => {
  const locale = useLocale();
  const { frontmatter, content } = getMDX(`about.${locale}`);
  return (
    <div>
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
