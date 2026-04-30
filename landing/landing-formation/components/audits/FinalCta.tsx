'use client';

import { useState, useTransition } from 'react';
import { submitDemo } from '@/app/actions';
import { useDemoModal } from '@/components/landing/DemoModalProvider';

type Status = 'idle' | 'success' | 'error';

export default function FinalCta() {
  const { prefilledEmail, emailWasPrefilled } = useDemoModal();
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('source', 'audits-cta-final');

    startTransition(async () => {
      const result = await submitDemo(formData);
      if (result.ok) {
        setStatus('success');
        setErrorMessage('');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.error);
      }
    });
  };

  return (
    <section className="cta-final" id="cta-final">
      <div className="container">
        <div className="cta-final-grid">
          <div className="reveal">
            <span className="eyebrow" style={{ background: 'rgba(0,168,120,0.15)', color: '#5BC8A8' }}>
              Démo gratuite
            </span>
            <h2>
              Prêt à déposer <strong>3× plus de CEE</strong> ?
            </h2>
            <p>
              Rejoignez les bureaux d&apos;audit qui ont choisi la sérénité. Lors de votre démo, nous configurerons
              ensemble votre première fiche d&apos;opération automatisée.
            </p>
          </div>

          <form className="cta-form reveal delay-1" onSubmit={handleSubmit}>
            <label htmlFor="audits-cta-email">Email professionnel</label>
            <input
              id="audits-cta-email"
              name="email"
              type="email"
              placeholder="vous@votre-entreprise.fr"
              defaultValue={prefilledEmail}
              required
              disabled={pending}
              autoComplete="email"
            />
            {emailWasPrefilled && (
              <p className="form-note">On a pré-rempli votre mail pour vous faire gagner du temps.</p>
            )}

            <label htmlFor="audits-cta-centre">Nom de l&apos;entreprise</label>
            <input
              id="audits-cta-centre"
              name="centre"
              type="text"
              placeholder="Ex : EnerAudit"
              required
              disabled={pending}
              autoComplete="organization"
            />

            <label htmlFor="audits-cta-phone">
              Numéro de téléphone <small>(pour fixer le créneau ensemble)</small>
            </label>
            <input
              id="audits-cta-phone"
              name="phone"
              type="tel"
              placeholder="06 12 34 56 78"
              required
              disabled={pending}
              autoComplete="tel"
            />

            <button type="submit" disabled={pending}>
              {pending ? 'Envoi en cours…' : (
                <>
                  Récupérer mes accès démo
                  <svg
                    style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 6 }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="form-success">
                ✓ Merci ! Nous vous recontactons sous 24h ouvrées.
              </div>
            )}
            {status === 'error' && (
              <div className="form-error">
                {errorMessage}
              </div>
            )}
            {status === 'idle' && (
              <div className="form-note">Réponse sous 24h ouvrées · Aucun engagement</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
