import Nav from '@/components/audit/Nav';
import Hero from '@/components/audit/Hero';
import Credibility from '@/components/audit/Credibility';
import Bento from '@/components/audit/Bento';
import Testimonials from '@/components/audit/Testimonials';
import FinalCta from '@/components/audit/FinalCta';
import Footer from '@/components/audit/Footer';
import RevealEffects from '@/components/audit/RevealEffects';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Credibility />
        <Bento />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
