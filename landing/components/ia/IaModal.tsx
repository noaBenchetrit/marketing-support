'use client';

import { useEffect, useRef, useState } from 'react';
import IaForm from './IaForm';

export default function IaModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Ouverture automatique peu après le chargement de la page.
  useEffect(() => {
    const t = window.setTimeout(() => setOpen(true), 350);
    return () => window.clearTimeout(t);
  }, []);

  // Lock scroll + Échap pour fermer + focus du 1er champ (desktop uniquement).
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);

    let focusTimer = 0;
    if (window.matchMedia('(hover: hover)').matches) {
      focusTimer = window.setTimeout(() => {
        dialogRef.current?.querySelector<HTMLInputElement>('input')?.focus({ preventScroll: true });
      }, 80);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      if (focusTimer) window.clearTimeout(focusTimer);
    };
  }, [open]);

  if (!open) return null;

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <div className="ia-modal-backdrop" onMouseDown={handleBackdrop} role="presentation">
      <div
        ref={dialogRef}
        className="ia-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ia-modal-title"
      >
        <button type="button" className="ia-modal-close" aria-label="Fermer" onClick={() => setOpen(false)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <span className="ia-form-offer">🎁 Audit de faisabilité offert</span>
        <h3 id="ia-modal-title" className="ia-modal-title">
          Réservez votre audit IA <span className="accent-text">offert</span> (30 min)
        </h3>
        <p className="ia-modal-sub">
          Laissez vos coordonnées : on identifie les tâches qu&apos;un agent IA peut automatiser —
          et ce que ça vous fait gagner. Sans engagement.
        </p>

        <IaForm />
      </div>
    </div>
  );
}
