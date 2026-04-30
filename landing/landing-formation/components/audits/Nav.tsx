'use client';

import { useEffect, useState } from 'react';
import { useDemoModal } from '@/components/landing/DemoModalProvider';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { open } = useDemoModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`topbar${scrolled ? ' scrolled' : ''}`} id="topbar">
      <div className="container">
        <a href="/audits" className="logo">
          <span className="logo-mark">b</span>
          <span>betool</span>
        </a>
        <div className="nav-links">
          <a href="#bento">Produit</a>
          <a href="#safe">Conformité</a>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => open({ source: 'audits-nav' })}
          >
            Réserver ma démo
          </button>
        </div>
      </div>
    </nav>
  );
}
