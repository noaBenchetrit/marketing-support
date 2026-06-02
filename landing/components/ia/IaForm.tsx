'use client';

import { useState, useTransition } from 'react';
import { submitAudit } from '@/app/ia/actions';

type Status = 'idle' | 'success' | 'error';

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function IaForm() {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [firstname, setFirstname] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('source', 'ia-audit-form');

    startTransition(async () => {
      const result = await submitAudit(formData);
      if (result.ok) {
        setStatus('success');
        setErrorMessage('');
        setFirstname(result.firstname);
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.error);
      }
    });
  };

  if (status === 'success') {
    return (
      <div className="ia-form-success" aria-live="polite">
        <div className="ia-success-badge" aria-hidden="true">
          ✓
        </div>
        <h3>Merci {firstname} ! C&apos;est noté.</h3>
        <p>
          Notre équipe vous recontacte sous 24&nbsp;h ouvrées pour fixer votre audit de
          faisabilité de 30&nbsp;minutes.
        </p>
      </div>
    );
  }

  return (
    <form className="ia-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="ia-fullname">Nom / Prénom</label>
      <input
        id="ia-fullname"
        name="fullname"
        type="text"
        placeholder="ex. Jean Dupont"
        required
        disabled={pending}
        autoComplete="name"
      />

      <label htmlFor="ia-email">Email professionnel</label>
      <input
        id="ia-email"
        name="email"
        type="email"
        placeholder="vous@votre-entreprise.fr"
        required
        disabled={pending}
        autoComplete="email"
      />

      <label htmlFor="ia-company">Nom de l&apos;entreprise</label>
      <input
        id="ia-company"
        name="company"
        type="text"
        placeholder="ex. Dupont & Associés"
        required
        disabled={pending}
        autoComplete="organization"
      />

      <label htmlFor="ia-phone">
        Téléphone <small>(pour fixer le créneau)</small>
      </label>
      <input
        id="ia-phone"
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

      <button type="submit" disabled={pending}>
        {pending ? (
          'Envoi en cours…'
        ) : (
          <>
            Je réserve mon audit de 30 min
            <ArrowIcon />
          </>
        )}
      </button>

      {status === 'error' && <div className="ia-form-error">{errorMessage}</div>}
    </form>
  );
}
