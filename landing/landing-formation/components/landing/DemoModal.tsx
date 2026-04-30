'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { submitDemo } from '@/app/actions';
import { useDemoModal } from './DemoModalProvider';

type Status = 'idle' | 'success' | 'error';

export default function DemoModal() {
  const { isOpen, source, ctaLabel, prefilledEmail, emailWasPrefilled, close } = useDemoModal();
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedCentre, setSubmittedCentre] = useState<string>('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Reset à chaque ouverture, lock du scroll, focus, échap
  useEffect(() => {
    if (!isOpen) return;

    setStatus('idle');
    setErrorMessage('');

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);

    const focusTimer = window.setTimeout(() => {
      // Focus sur le 1er champ vide : si email pré-rempli, on saute au champ "centre"
      const target = emailWasPrefilled
        ? dialogRef.current?.querySelector<HTMLInputElement>('#demo-modal-centre')
        : firstFieldRef.current;
      target?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, close, emailWasPrefilled]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (source) formData.set('source', source);

    startTransition(async () => {
      const result = await submitDemo(formData);
      if (result.ok) {
        const firstName = result.centre.trim().split(/\s+/)[0] ?? '';
        setSubmittedCentre(firstName);
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.error);
      }
    });
  };

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <div
      className="demo-modal-backdrop"
      onMouseDown={handleBackdrop}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className="demo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        <button
          type="button"
          className="demo-modal-close"
          aria-label="Fermer"
          onClick={close}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="demo-modal-success">
            <div className="demo-modal-success-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 id="demo-modal-title">
              C&apos;est noté{submittedCentre ? ` ${submittedCentre}` : ''} !
            </h3>
            <p>
              On vous appelle très vite. En attendant, surveillez votre boîte mail :
              on vous envoie un guide de bienvenue pour préparer la démo.
            </p>
            <button type="button" className="btn btn-primary" onClick={close}>
              Revenir au site
            </button>
          </div>
        ) : (
          <>
            <div className="demo-modal-head">
              <div className="demo-modal-avatar" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <span className="demo-modal-badge">
                  <span className="demo-modal-badge-dot" aria-hidden="true" />
                  2 créneaux restants aujourd&apos;hui
                </span>
                <h3 id="demo-modal-title">Dernière étape pour votre démo personnalisée</h3>
                <p className="demo-modal-sub">
                  15 minutes en visio avec un expert beTool. Aucun engagement.
                </p>
              </div>
            </div>

            <form className="demo-modal-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="demo-modal-email">Email professionnel</label>
              <input
                ref={firstFieldRef}
                id="demo-modal-email"
                name="email"
                type="email"
                placeholder="vous@votre-centre.fr"
                defaultValue={prefilledEmail}
                required
                disabled={pending}
                autoComplete="email"
              />
              {emailWasPrefilled && (
                <p className="demo-modal-hint">
                  On a pré-rempli votre mail pour vous faire gagner du temps.
                </p>
              )}

              <label htmlFor="demo-modal-centre">Votre nom ou celui du centre</label>
              <input
                id="demo-modal-centre"
                name="centre"
                type="text"
                placeholder="ex. Jean de FormaPlus"
                required
                disabled={pending}
                autoComplete="organization"
              />

              <label htmlFor="demo-modal-phone">
                Numéro de téléphone <small>(pour fixer le créneau ensemble)</small>
              </label>
              <input
                id="demo-modal-phone"
                name="phone"
                type="tel"
                placeholder="06 12 34 56 78"
                required
                disabled={pending}
                autoComplete="tel"
              />

              <label htmlFor="demo-modal-stagiaires">
                Nombre de stagiaires / an <small>(optionnel)</small>
              </label>
              <select
                id="demo-modal-stagiaires"
                name="stagiaires"
                defaultValue=""
                disabled={pending}
              >
                <option value="">Sélectionner…</option>
                <option value="<50">Moins de 50</option>
                <option value="50-200">50 à 200</option>
                <option value="200-500">200 à 500</option>
                <option value="500+">Plus de 500</option>
              </select>

              <label htmlFor="demo-modal-message">
                Message <small>(optionnel)</small>
              </label>
              <textarea
                id="demo-modal-message"
                name="message"
                rows={3}
                placeholder="Une question ou un besoin spécifique ?"
                disabled={pending}
                maxLength={500}
              />

              <button type="submit" className="demo-modal-submit" disabled={pending}>
                {pending ? 'Envoi en cours…' : ctaLabel ?? 'Je valide ma demande de rappel'}
              </button>

              {status === 'error' && (
                <div className="demo-modal-error">{errorMessage}</div>
              )}
              <p className="demo-modal-reassurance">Rappel sous 24h max. Zéro engagement.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
