import Nav from '@/components/audits/Nav';
import Hero from '@/components/audits/Hero';
import Credibility from '@/components/audits/Credibility';
import LoveBar from '@/components/audits/LoveBar';
import Bento from '@/components/audits/Bento';
import Comparison from '@/components/audits/Comparison';
import Testimonials from '@/components/audits/Testimonials';
import Roi from '@/components/audits/Roi';
import Workflow from '@/components/audits/Workflow';
import Emotional from '@/components/audits/Emotional';
import SafePlace from '@/components/audits/SafePlace';
import Faq from '@/components/audits/Faq';
import Satisfaction from '@/components/audits/Satisfaction';
import FinalCta from '@/components/audits/FinalCta';
import Footer from '@/components/audits/Footer';
import RevealEffects from '@/components/landing/RevealEffects';

export const metadata = {
  title: "Le CEE n'a jamais été aussi fluide. — betool",
  description:
    "Le CRM des bureaux d'audit énergétique. Calculez, déposez et facturez vos CEE en toute sérénité.",
};

export default function AuditsPage() {
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
