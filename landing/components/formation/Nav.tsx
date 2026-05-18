'use client';

import { useEffect, useState } from 'react';
import { scrollToFinalForm } from './smoothScroll';

const ArrowIcon = () => (
  <svg
    className="arrow"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`topbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">
          <img className="logo-mark" src="/beTool.png" alt="beTool" />
          <span>beTool</span>
        </a>

        <button
          type="button"
          className="btn btn-accent btn-compact nav-cta"
          onClick={scrollToFinalForm}
        >
          {scrolled ? 'Planifier ma démo en 2 clics' : 'Réserver ma démo'}
          <ArrowIcon />
        </button>
      </div>
    </nav>
  );
}
