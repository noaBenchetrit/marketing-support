import Nav from '@/components/audit/Nav';
import ScrollProgress from '@/components/audit/ScrollProgress';
import Hero from '@/components/audit/Hero';
import Credibility from '@/components/audit/Credibility';
import Bento from '@/components/audit/Bento';
import Workflow from '@/components/audit/Workflow';
import EnergyNiche from '@/components/audit/EnergyNiche';
import Comparison from '@/components/audit/Comparison';
import SafePlace from '@/components/audit/SafePlace';
import FinalCta from '@/components/audit/FinalCta';
import Footer from '@/components/audit/Footer';
import RevealEffects from '@/components/audit/RevealEffects';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Credibility />
        <Bento />
        <Workflow />
        <EnergyNiche />
        <Comparison />
        <SafePlace />
        <FinalCta />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
