import Nav from '@/components/landing/Nav';
import ScrollProgress from '@/components/landing/ScrollProgress';
import Hero from '@/components/landing/Hero';
import LoveBar from '@/components/landing/LoveBar';
import Bento from '@/components/landing/Bento';
import AiAssistant from '@/components/landing/AiAssistant';
import LmsPartners from '@/components/landing/LmsPartners';
import Testimonials from '@/components/landing/Testimonials';
import Comparison from '@/components/landing/Comparison';
import Roi from '@/components/landing/Roi';
import Emotional from '@/components/landing/Emotional';
import SafePlace from '@/components/landing/SafePlace';
import Faq from '@/components/landing/Faq';
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
