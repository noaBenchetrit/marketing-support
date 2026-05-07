import Nav from '@/components/installation/Nav';
import ScrollProgress from '@/components/installation/ScrollProgress';
import Hero from '@/components/installation/Hero';
import SocialProof from '@/components/installation/SocialProof';
import Credibility from '@/components/installation/Credibility';
import Bento from '@/components/installation/Bento';
import Planning from '@/components/installation/Planning';
import AiAssistant from '@/components/installation/AiAssistant';
import Niche from '@/components/installation/Niche';
import Comparison from '@/components/installation/Comparison';
import ControlShield from '@/components/installation/ControlShield';
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
        <SocialProof />
        <Credibility />
        <Bento />
        <Planning />
        <AiAssistant />
        <Niche />
        <Comparison />
        <ControlShield />
        <SafePlace />
        <FinalCta />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
