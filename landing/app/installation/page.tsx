import Nav from '@/components/installation/Nav';
import ScrollProgress from '@/components/installation/ScrollProgress';
import Hero from '@/components/installation/Hero';
import Credibility from '@/components/installation/Credibility';
import Bento from '@/components/installation/Bento';
import Roi from '@/components/installation/Roi';
import AiAssistant from '@/components/installation/AiAssistant';
import Workflow from '@/components/installation/Workflow';
import Comparison from '@/components/installation/Comparison';
import Emotional from '@/components/installation/Emotional';
import SafePlace from '@/components/installation/SafePlace';
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
