'use client';

import { useState, useTransition } from 'react';
import { submitDemo } from '@/app/actions';
import { useDemoModal } from './DemoModalProvider';

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
    formData.set('source', 'cta-final');

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
            <span className="eyebrow" style={{ background: 'rgba(184, 148, 58, 0.22)', color: '#F4ECD6' }}>
              Démo gratuite
            </span>
            <h2>
              Votre conformité <strong>n&apos;attend pas</strong>.
            </h2>
            <p>
              Quelques minutes suffisent. Nos experts vous rappellent sous 24h ouvrées et calibrent
              l&apos;accompagnement selon votre type d&apos;audit et votre prochaine échéance.
            </p>
          </div>

          <form className="cta-form reveal delay-1" onSubmit={handleSubmit}>
            <label htmlFor="cta-email">Email professionnel</label>
            <input
              id="cta-email"
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

            <label htmlFor="cta-fullname">Nom et prénom</label>
            <input
              id="cta-fullname"
              name="fullname"
              type="text"
              placeholder="ex. Jean Dupont"
              required
              disabled={pending}
              autoComplete="name"
            />

            <label htmlFor="cta-centre">Entreprise</label>
            <input
              id="cta-centre"
              name="centre"
              type="text"
              placeholder="ex. Acme SAS"
              required
              disabled={pending}
              autoComplete="organization"
            />

            <label htmlFor="cta-phone">
              Téléphone <small>(pour le rappel)</small>
            </label>
            <input
              id="cta-phone"
              name="phone"
              type="tel"
              placeholder="06 12 34 56 78"
              required
              disabled={pending}
              autoComplete="tel"
            />

            <label htmlFor="cta-type">Type d&apos;audit</label>
            <select
              id="cta-type"
              name="taille"
              defaultValue=""
              disabled={pending}
              required
            >
              <option value="">Sélectionner…</option>
              <option value="qualite">Qualité</option>
              <option value="securite">Sécurité</option>
              <option value="autre">Autre</option>
            </select>

            <label htmlFor="cta-echeance">
              Prochaine échéance <small>(date prévisionnelle)</small>
            </label>
            <input
              id="cta-echeance"
              name="message"
              type="date"
              disabled={pending}
            />

            <button type="submit" disabled={pending}>
              {pending ? 'Envoi en cours…' : (
                <>
                  Passer au Zéro Défaut
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
                ✓ Reçu. Un expert vous rappelle sous 24h ouvrées.
              </div>
            )}
            {status === 'error' && (
              <div className="form-error">
                {errorMessage}
              </div>
            )}
            {status === 'idle' && (
              <div className="form-note">Rappel sous 24h ouvrées · Confidentialité absolue</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
