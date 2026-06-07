'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import DemoForm, { type DemoFormResult } from './DemoForm';
import { useDemoModal } from './DemoModalProvider';

type Props = {
  submitDemo: (formData: FormData) => Promise<DemoFormResult>;

  headTitle: string;
  headSub: string;
  defaultCtaLabel: string;

  centreLabel: string;
  centrePlaceholder: string;
  emailPlaceholder?: string;
  phoneLabel?: ReactNode;

  /** Appelé sur un envoi de lead réellement accepté (ex. conversion Google Ads). */
  onSuccess?: (firstname: string) => void;

  /** Landing-specific fields (selects, textarea…). */
  children?: ReactNode;
};

export default function DemoModal({
  submitDemo,
  headTitle,
  headSub,
  defaultCtaLabel,
  centreLabel,
  centrePlaceholder,
  emailPlaceholder,
  phoneLabel,
  onSuccess,
  children,
}: Props) {
  const { isOpen, source, ctaLabel, prefilledEmail, emailWasPrefilled, close } = useDemoModal();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [submittedFirstname, setSubmittedFirstname] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Reset à chaque ouverture, lock du scroll, focus, échap
  useEffect(() => {
    if (!isOpen) return;

    setShowSuccess(false);
    setSubmittedFirstname('');

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);

    const focusTimer = window.setTimeout(() => {
      // Focus sur le 1er champ vide : si email pré-rempli, on saute au champ "nom"
      const target = emailWasPrefilled
        ? dialogRef.current?.querySelector<HTMLInputElement>('#demo-modal-fullname')
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

        {showSuccess ? (
          <div className="demo-modal-success">
            <div className="demo-modal-success-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 id="demo-modal-title">
              C&apos;est noté{submittedFirstname ? ` ${submittedFirstname}` : ''} !
            </h3>
            <p>On vous appelle très vite.</p>
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
                <h3 id="demo-modal-title">{headTitle}</h3>
                <p className="demo-modal-sub">{headSub}</p>
              </div>
            </div>

            <DemoForm
              submitDemo={submitDemo}
              source={source ?? 'modal'}
              variant="modal"
              prefilledEmail={prefilledEmail}
              showEmailHint={emailWasPrefilled}
              centreLabel={centreLabel}
              centrePlaceholder={centrePlaceholder}
              emailPlaceholder={emailPlaceholder}
              phoneLabel={phoneLabel}
              submitLabel={ctaLabel ?? defaultCtaLabel}
              firstFieldRef={firstFieldRef}
              noValidate
              idleNote="Rappel sous 24h max. Zéro engagement."
              onSuccess={(firstname) => {
                setSubmittedFirstname(firstname);
                setShowSuccess(true);
                onSuccess?.(firstname);
              }}
            >
              {children}
            </DemoForm>
          </>
        )}
      </div>
    </div>
  );
}
