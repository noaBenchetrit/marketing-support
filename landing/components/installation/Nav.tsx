'use client';

import { useEffect, useState } from 'react';
import { useDemoModal } from './DemoModalProvider';

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
        <a href="#" className="logo">
          <img className="logo-mark" src="/beTool.png" alt="beTool" />
          <span>beTool</span>
        </a>
        <div className="nav-links">
          <a href="#bento">Flux Chantier</a>
          <a href="#ai">Conformité IA</a>
          <a href="#workflow">Reporting</a>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => open({ source: 'nav' })}
          >
            Demander ma démo
          </button>
        </div>
      </div>
    </nav>
  );
}
