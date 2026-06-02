'use client';

import { useEffect, useState } from 'react';
import { scrollToForm } from './scrollToForm';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`topbar${scrolled ? ' scrolled' : ''}`} id="topbar">
      <div className="container">
        <span className="logo" aria-label="beTool IA">
          <img className="logo-mark" src="/beTool.png" alt="beTool" />
          <span>beTool</span>
          <span className="ia-chip">IA</span>
        </span>
        <button type="button" className="btn btn-accent btn-nav-cta" onClick={scrollToForm}>
          Réserver mon audit offert
        </button>
      </div>
    </nav>
  );
}
