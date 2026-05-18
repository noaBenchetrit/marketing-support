import Nav from '@/components/formation/Nav';
import ScrollProgress from '@/components/formation/ScrollProgress';
import Hero from '@/components/formation/Hero';
import SafetyNet from '@/components/formation/SafetyNet';
import Testimonials from '@/components/formation/Testimonials';
import Bento from '@/components/formation/Bento';
import Ecosystem from '@/components/formation/Ecosystem';
import SocialProof from '@/components/formation/SocialProof';
import FinalForm from '@/components/formation/FinalForm';
import Footer from '@/components/formation/Footer';
import RevealEffects from '@/components/formation/RevealEffects';

export default function FormationPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />

        <Testimonials />

        <Bento />

        <Ecosystem />

        <SocialProof />

        <FinalForm />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
