'use client';

import { useState, useTransition } from 'react';
import { submitDemo } from '@/app/installation/actions';
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
            <span className="eyebrow" style={{ background: 'rgba(10, 147, 150, 0.18)', color: '#9FD7D9' }}>
              Démo gratuite
            </span>
            <h2>
              Passez à la <strong>vitesse supérieure</strong>.
            </h2>
            <p>
              Rejoignez les installateurs qui sécurisent leurs primes et accélèrent leurs encaissements. Lors
              de votre démo, on configure ensemble votre premier chantier de bout en bout.
            </p>
          </div>

          <form className="cta-form reveal delay-1" onSubmit={handleSubmit}>
            <label htmlFor="cta-email">Email professionnel</label>
            <input
              id="cta-email"
              name="email"
              type="email"
              placeholder="vous@votre-centre.fr"
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
              placeholder="ex. Énergie Pro SARL"
              required
              disabled={pending}
              autoComplete="organization"
            />

            <label htmlFor="cta-phone">
              Téléphone <small>(pour fixer le créneau)</small>
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

            <label htmlFor="cta-metier">Votre corps d&apos;état</label>
            <select
              id="cta-metier"
              name="metier"
              defaultValue=""
              disabled={pending}
              required
            >
              <option value="">Sélectionner…</option>
              <option value="renovation">Rénovation énergétique</option>
              <option value="maconnerie">Maçonnerie</option>
              <option value="menuiserie">Menuiserie</option>
              <option value="autre">Autre</option>
            </select>

            <label htmlFor="cta-techniciens">Nombre de techniciens terrain</label>
            <select
              id="cta-techniciens"
              name="taille"
              defaultValue=""
              disabled={pending}
              required
            >
              <option value="">Sélectionner…</option>
              <option value="1-5">1 à 5 techniciens</option>
              <option value="5-20">5 à 20 techniciens</option>
              <option value="20+">Plus de 20 techniciens</option>
            </select>

            <button type="submit" disabled={pending}>
              {pending ? 'Envoi en cours…' : (
                <>
                  Passer à la vitesse supérieure
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
