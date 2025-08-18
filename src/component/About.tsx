import getMDX from '@/lib/getMDX';
import { useLocale } from 'next-intl';
import AboutMdxKo from '@/contents/about.ko.mdx';
import AboutMdxEn from '@/contents/about.en.mdx';

const About = () => {
  const locale = useLocale();
  return <div className="">{locale === 'ko' ? <AboutMdxKo /> : <AboutMdxEn />}</div>;
};

export default About;

/* 
TODO

영어/한국어 밖에 없는 현시점에서는 크게 리스크는 없고 
포폴 코드 사이즈가 크지 않으니 직관적 구현 측면에서는 문제없는 상태.
하지만 두가지 mdx 컴포넌트를 모두 임포트 하는 점이 비효율적이다.
번틀링 사이즈가 커짐..
-- > 동적 임포트로 바꾸기

*/
