import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations();
  return <p>안녕하세요 이곳은 {t('nav.home')}</p>;
};

export default Home;
