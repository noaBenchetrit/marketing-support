import Nav from '@/components/audit/Nav';
import ScrollProgress from '@/components/audit/ScrollProgress';
import Hero from '@/components/audit/Hero';
import Credibility from '@/components/audit/Credibility';
import Bento from '@/components/audit/Bento';
import Roi from '@/components/audit/Roi';
import AiAssistant from '@/components/audit/AiAssistant';
import Workflow from '@/components/audit/Workflow';
import Comparison from '@/components/audit/Comparison';
import Emotional from '@/components/audit/Emotional';
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
