import Nav from '@/components/installation/Nav';
import ScrollProgress from '@/components/installation/ScrollProgress';
import Hero from '@/components/installation/Hero';
import Pillars from '@/components/installation/Pillars';
import ProofFaq from '@/components/installation/ProofFaq';
import FinalCta from '@/components/installation/FinalCta';
import Footer from '@/components/installation/Footer';
import RevealEffects from '@/components/installation/RevealEffects';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <ProofFaq />
        <FinalCta />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
