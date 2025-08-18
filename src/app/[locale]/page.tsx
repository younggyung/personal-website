import { About, Project, Resume } from '@/component';
import MouseLight from '@/component/MouseLight';

const Home = () => {
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
