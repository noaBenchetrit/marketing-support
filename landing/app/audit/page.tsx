import Nav from '@/components/audit/Nav';
import Hero from '@/components/audit/Hero';
import FinalCta from '@/components/audit/FinalCta';
import Footer from '@/components/audit/Footer';
import RevealEffects from '@/components/audit/RevealEffects';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FinalCta />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
