import Nav from '@/components/installation/Nav';
import ScrollProgress from '@/components/installation/ScrollProgress';
import SectionDots from '@/components/installation/SectionDots';
import Hero from '@/components/installation/Hero';
import Section1 from '@/components/installation/Section1';
import Section2 from '@/components/installation/Section2';
import Section3 from '@/components/installation/Section3';
import Testimonials from '@/components/installation/Testimonials';
import FinalCta from '@/components/installation/FinalCta';
import Footer from '@/components/installation/Footer';
import RevealEffects from '@/components/installation/RevealEffects';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <SectionDots />
      <main className="deck">
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
