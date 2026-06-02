import Nav from '@/components/ia/Nav';
import Hero from '@/components/ia/Hero';
import Pillars from '@/components/ia/Pillars';
import Reassurance from '@/components/ia/Reassurance';
import AuditForm from '@/components/ia/AuditForm';
import Footer from '@/components/ia/Footer';
import RevealEffects from '@/components/ia/RevealEffects';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Reassurance />
        <AuditForm />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
