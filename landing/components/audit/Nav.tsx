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
        <span className="logo" aria-label="beTool">
          <img className="logo-mark" src="/beTool.png" alt="beTool" />
          <span>beTool</span>
        </span>
        <button
          type="button"
          className="btn btn-accent"
          onClick={() => open({ source: 'nav' })}
        >
          Réserver ma démo
        </button>
      </div>
    </nav>
  );
}
