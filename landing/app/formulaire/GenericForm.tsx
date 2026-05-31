'use client';

import { useEffect, useState, useTransition } from 'react';
import { submitDemo } from './actions';

type Status = 'idle' | 'success' | 'error';

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function GenericForm({ source }: { source: string }) {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedFirstname, setSubmittedFirstname] = useState('');

  // Post la hauteur du document à la page parente pour permettre un iframe auto-resize.
  useEffect(() => {
    const postHeight = () => {
      try {
        const h = document.documentElement.scrollHeight;
        window.parent?.postMessage({ type: 'betool-form-height', height: h }, '*');
      } catch {
        /* same-origin restriction — sans danger, on ignore */
      }
    };
    postHeight();
    const ro = new ResizeObserver(postHeight);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [status]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('source', source);

    startTransition(async () => {
      const result = await submitDemo(formData);
      if (result.ok) {
        setSubmittedFirstname(result.firstname);
        setStatus('success');
        setErrorMessage('');
        form.reset();
        try {
          window.parent?.postMessage(
            { type: 'betool-form-submitted', firstname: result.firstname, centre: result.centre },
            '*',
          );
        } catch { /* noop */ }
      } else {
        setStatus('error');
        setErrorMessage(result.error);
      }
    });
  };

  if (status === 'success') {
    return (
      <div className="embed-success" role="status">
        <div className="embed-success-icon" aria-hidden="true">
          <CheckIcon />
        </div>
        <h2>
          Merci{submittedFirstname ? ` ${submittedFirstname}` : ''}, c&apos;est noté !
        </h2>
        <p>Notre équipe vous recontacte sous 24h ouvrées.</p>
      </div>
    );
  }

  return (
    <form className="embed-form" onSubmit={handleSubmit} noValidate>
      <div className="embed-field">
        <label htmlFor="embed-email">Email professionnel</label>
        <input
          id="embed-email"
          name="email"
          type="email"
          placeholder="vous@votre-entreprise.fr"
          required
          disabled={pending}
          autoComplete="email"
        />
      </div>

      <div className="embed-field">
        <label htmlFor="embed-fullname">Nom et prénom</label>
        <input
          id="embed-fullname"
          name="fullname"
          type="text"
          placeholder="ex. Jean Dupont"
          required
          disabled={pending}
          autoComplete="name"
        />
      </div>

      <div className="embed-field">
        <label htmlFor="embed-centre">Nom de votre entreprise</label>
        <input
          id="embed-centre"
          name="centre"
          type="text"
          placeholder="ex. Votre structure"
          required
          disabled={pending}
          autoComplete="organization"
        />
      </div>

      <div className="embed-field">
        <label htmlFor="embed-phone">
          Téléphone <small>(pour fixer le créneau)</small>
        </label>
        <input
          id="embed-phone"
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
      </div>

      <button type="submit" className="embed-submit" disabled={pending}>
        {pending ? (
          <>
            <span className="embed-spinner" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          'Être rappelé'
        )}
      </button>

      {status === 'error' && (
        <div className="embed-error" role="alert">{errorMessage}</div>
      )}
    </form>
  );
}
