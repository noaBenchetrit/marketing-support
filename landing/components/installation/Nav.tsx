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
          <button
            type="button"
            className="btn btn-accent"
            onClick={() => open({ source: 'nav', ctaLabel: 'Programmer ma démo' })}
          >
            Programmer ma démo
          </button>
        </div>
      </div>
    </nav>
  );
}
