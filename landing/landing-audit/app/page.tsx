import Nav from '@/components/landing/Nav';
import ScrollProgress from '@/components/landing/ScrollProgress';
import Hero from '@/components/landing/Hero';
import Credibility from '@/components/landing/Credibility';
import Bento from '@/components/landing/Bento';
import Roi from '@/components/landing/Roi';
import AiAssistant from '@/components/landing/AiAssistant';
import Workflow from '@/components/landing/Workflow';
import Comparison from '@/components/landing/Comparison';
import Emotional from '@/components/landing/Emotional';
import SafePlace from '@/components/landing/SafePlace';
import FinalCta from '@/components/landing/FinalCta';
import Footer from '@/components/landing/Footer';
import RevealEffects from '@/components/landing/RevealEffects';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Credibility />
        <Bento />
        <Roi />
        <AiAssistant />
        <Workflow />
        <Comparison />
        <Emotional />
        <SafePlace />
        <FinalCta />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
