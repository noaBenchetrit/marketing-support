'use client';

import { ReactNode, RefObject, useState, useTransition } from 'react';
import { trackEvent } from './analytics';

export type DemoFormResult =
  | { ok: true; firstname: string; centre: string }
  | { ok: false; error: string };

type Variant = 'inline' | 'modal';

type Status = 'idle' | 'success' | 'error';

type Props = {
  /** Server action of the landing — receives FormData and returns DemoFormResult. */
  submitDemo: (formData: FormData) => Promise<DemoFormResult>;
  /** Source label that gets attached to the FormData (overrides any value in <input name="source">). */
  source: string;

  variant: Variant;

  /** Pre-filled email (from sessionStorage / URL ?email=). */
  prefilledEmail?: string;
  /** When true, render a small hint under the email field. */
  showEmailHint?: boolean;

  centreLabel: string;
  centrePlaceholder: string;
  /** Rend le champ "centre/entreprise" facultatif (défaut : requis). */
  centreRequired?: boolean;
  emailPlaceholder?: string;
  phoneLabel?: ReactNode;

  submitLabel: ReactNode;
  /** Idle note displayed below the button (only on inline variant). */
  idleNote?: ReactNode;

  /** Slot for landing-specific fields (selects, textarea…). Rendered between phone and submit. */
  children?: ReactNode;

  /** Called when the action returns ok=true. The modal uses it to switch to its success state. */
  onSuccess?: (firstname: string) => void;
  /** Render-prop for the success state (replaces the form when defined). */
  renderSuccess?: () => ReactNode;

  /** Ref attached to the email input — modal uses it to focus on open. */
  firstFieldRef?: RefObject<HTMLInputElement | null>;

  /** Native form validation toggle (modal disables it to keep submit reachable). */
  noValidate?: boolean;
};

export default function DemoForm({
  submitDemo,
  source,
  variant,
  prefilledEmail = '',
  showEmailHint = false,
  centreLabel,
  centrePlaceholder,
  centreRequired = true,
  emailPlaceholder = 'vous@votre-entreprise.fr',
  phoneLabel,
  submitLabel,
  idleNote,
  children,
  onSuccess,
  renderSuccess,
  firstFieldRef,
  noValidate = false,
}: Props) {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isModal = variant === 'modal';
  const idPrefix = isModal ? 'demo-modal' : 'cta';

  const formClass = isModal ? 'demo-modal-form' : 'cta-form reveal delay-1';
  const hintClass = isModal ? 'demo-modal-hint' : 'form-note';
  const noteClass = isModal ? 'demo-modal-reassurance' : 'form-note';
  const submitClass = isModal ? 'demo-modal-submit' : undefined;
  const errorClass = isModal ? 'demo-modal-error' : 'form-error';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('source', source);

    startTransition(async () => {
      const result = await submitDemo(formData);
      if (result.ok) {
        setStatus('success');
        setErrorMessage('');
        form.reset();
        trackEvent('lead_submit', { source });
        onSuccess?.(result.firstname);
      } else {
        setStatus('error');
        setErrorMessage(result.error);
      }
    });
  };

  if (status === 'success' && renderSuccess) {
    return <>{renderSuccess()}</>;
  }

  return (
    <form className={formClass} onSubmit={handleSubmit} noValidate={noValidate}>
      <label htmlFor={`${idPrefix}-email`}>Email professionnel</label>
      <input
        ref={firstFieldRef}
        id={`${idPrefix}-email`}
        name="email"
        type="email"
        placeholder={emailPlaceholder}
        defaultValue={prefilledEmail}
        required
        disabled={pending}
        autoComplete="email"
      />
      {showEmailHint && (
        <p className={hintClass}>
          On a pré-rempli votre mail pour vous faire gagner du temps.
        </p>
      )}

      <label htmlFor={`${idPrefix}-fullname`}>Nom et prénom</label>
      <input
        id={`${idPrefix}-fullname`}
        name="fullname"
        type="text"
        placeholder="ex. Jean Dupont"
        required
        disabled={pending}
        autoComplete="name"
      />

      <label htmlFor={`${idPrefix}-centre`}>
        {centreLabel}
        {!centreRequired && <small> (optionnel)</small>}
      </label>
      <input
        id={`${idPrefix}-centre`}
        name="centre"
        type="text"
        placeholder={centrePlaceholder}
        required={centreRequired}
        disabled={pending}
        autoComplete="organization"
      />

      <label htmlFor={`${idPrefix}-phone`}>
        {phoneLabel ?? (
          <>
            Téléphone <small>(pour fixer le créneau)</small>
          </>
        )}
      </label>
      <input
        id={`${idPrefix}-phone`}
        name="phone"
        type="tel"
        placeholder="06 12 34 56 78"
        required
        disabled={pending}
        autoComplete="tel"
        inputMode="tel"
        pattern="^(?:(?:\+|00)33[\s.\-]*[1-9](?:[\s.\-]*\d){8}|0[1-9](?:[\s.\-]*\d){8})$"
        title="Numéro de téléphone français — ex. 06 12 34 56 78 ou +33 6 12 34 56 78"
      />

      {/* Landing-specific fields slot */}
      <fieldset disabled={pending} style={{ border: 0, padding: 0, margin: 0, display: 'contents' }}>
        {children}
      </fieldset>

      <button type="submit" className={submitClass} disabled={pending}>
        {pending ? 'Envoi en cours…' : submitLabel}
      </button>

      {status === 'error' && (
        <div className={errorClass}>{errorMessage}</div>
      )}
      {status === 'success' && !renderSuccess && !isModal && (
        <div className="form-success">
          ✓ Merci ! Nous vous recontactons sous 24h ouvrées.
        </div>
      )}
      {status === 'idle' && idleNote && (
        <div className={noteClass}>{idleNote}</div>
      )}
    </form>
  );
}
