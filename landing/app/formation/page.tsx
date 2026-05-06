import Nav from '@/components/formation/Nav';
import ScrollProgress from '@/components/formation/ScrollProgress';
import Hero from '@/components/formation/Hero';
import LoveBar from '@/components/formation/LoveBar';
import Bento from '@/components/formation/Bento';
import AiAssistant from '@/components/formation/AiAssistant';
import LmsPartners from '@/components/formation/LmsPartners';
import Testimonials from '@/components/formation/Testimonials';
import Comparison from '@/components/formation/Comparison';
import Roi from '@/components/formation/Roi';
import Emotional from '@/components/formation/Emotional';
import SafePlace from '@/components/formation/SafePlace';
import Faq from '@/components/formation/Faq';
import FinalCta from '@/components/formation/FinalCta';
import Footer from '@/components/formation/Footer';
import RevealEffects from '@/components/formation/RevealEffects';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <LoveBar />
        <Bento />
        <Testimonials />
        <AiAssistant />
        <LmsPartners />
        <Comparison />
        <Roi />
        <Emotional />
        <SafePlace />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
