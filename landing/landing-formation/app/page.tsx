import Nav from '@/components/landing/Nav';
import Hero from '@/components/landing/Hero';
import Credibility from '@/components/landing/Credibility';
import LoveBar from '@/components/landing/LoveBar';
import Bento from '@/components/landing/Bento';
import Comparison from '@/components/landing/Comparison';
import Testimonials from '@/components/landing/Testimonials';
import Roi from '@/components/landing/Roi';
import Workflow from '@/components/landing/Workflow';
import Emotional from '@/components/landing/Emotional';
import SafePlace from '@/components/landing/SafePlace';
import Faq from '@/components/landing/Faq';
import Satisfaction from '@/components/landing/Satisfaction';
import FinalCta from '@/components/landing/FinalCta';
import Footer from '@/components/landing/Footer';
import RevealEffects from '@/components/landing/RevealEffects';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Credibility />
        <LoveBar />
        <Bento />
        <Comparison />
        <Testimonials />
        <Roi />
        <Workflow />
        <Emotional />
        <SafePlace />
        <Faq />
        <Satisfaction />
        <FinalCta />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
