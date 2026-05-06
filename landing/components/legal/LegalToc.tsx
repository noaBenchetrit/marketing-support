'use client';

import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };

export default function LegalToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '');

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Map<string, number>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }
        if (visible.size === 0) return;
        let topId = '';
        let topY = Infinity;
        for (const id of visible.keys()) {
          const el = document.getElementById(id);
          if (!el) continue;
          const y = el.getBoundingClientRect().top;
          if (y < topY) {
            topY = y;
            topId = id;
          }
        }
        if (topId) setActiveId(topId);
      },
      { rootMargin: '-80px 0px -55% 0px', threshold: [0, 0.1, 0.5, 1] },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="legal-toc" aria-label="Sommaire">
      <p className="legal-toc-title">Sommaire</p>
      <ol className="legal-toc-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`legal-toc-item${activeId === item.id ? ' active' : ''}`}
          >
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
