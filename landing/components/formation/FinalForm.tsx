'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { submitDemo } from '@/app/formation/actions';
import { FINAL_FORM_ID } from './smoothScroll';
import { useLeadEmail } from './LeadEmailProvider';
import { captureAttribution, getAttribution } from '@/lib/attribution';

type Status = 'idle' | 'success' | 'error';

/** Libellé de conversion Google Ads (Lead — CRM beTool Formation). */
const CONVERSION_SEND_TO = 'AW-18202785429/yhaPCP3LubwcEJXt4edD';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function FinalForm() {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { email, prefilledByNav, clearPrefilledByNav, registerNextFocus } = useLeadEmail();
  const fullnameRef = useRef<HTMLInputElement>(null);

  // Expose le champ "fullname" comme focus-suivant à la navbar
  useEffect(() => {
    registerNextFocus(fullnameRef.current);
    return () => registerNextFocus(null);
  }, [registerNextFocus]);

  // Capte le canal d'acquisition en first-touch dès l'affichage du formulaire.
  useEffect(() => {
    captureAttribution();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('source', prefilledByNav ? 'nav-inline-form' : 'final-form');
    formData.set('attribution', getAttribution());

    startTransition(async () => {
      const result = await submitDemo(formData);
      if (result.ok) {
        setStatus('success');
        setErrorMessage('');
        form.reset();
        clearPrefilledByNav();
        // Conversion Google Ads : déclenchée uniquement sur un lead réellement accepté.
        window.gtag?.('event', 'conversion', {
          send_to: CONVERSION_SEND_TO,
          value: 1.0,
          currency: 'ILS',
        });
      } else {
        setStatus('error');
        setErrorMessage(result.error);
      }
    });
  };

  return (
    <section className="final-section" id={FINAL_FORM_ID}>
      <div className="container">
        <div className="final-card reveal">
          {status === 'success' ? (
            <div className="final-success">
              <div className="final-success-icon" aria-hidden="true">
                <CheckIcon />
              </div>
              <h3>Félicitations, votre demande est bien reçue&nbsp;!</h3>
              <p>
                Notre équipe vous recontacte sous 24h ouvrées pour activer votre accès et
                planifier votre démarrage.
              </p>
            </div>
          ) : (
            <>
              <div className="final-head">
                <h3>
                  Prêt à libérer <strong>10&nbsp;heures par semaine</strong>&nbsp;?
                </h3>
                <p>
                  Rejoignez les centres de formation qui ont choisi la sérénité administrative.
                </p>
              </div>

              <form className="final-form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="final-email">Votre adresse email professionnelle</label>
                  <input
                    id="final-email"
                    name="email"
                    type="email"
                    placeholder="vous@votre-centre.fr"
                    required
                    disabled={pending}
                    autoComplete="email"
                    defaultValue={email}
                    key={email || 'empty'}
                  />
                  {prefilledByNav && (
                    <p className="field-hint">
                      ✓ Email pré-rempli depuis la barre de navigation
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="final-fullname">Nom et prénom</label>
                  <input
                    ref={fullnameRef}
                    id="final-fullname"
                    name="fullname"
                    type="text"
                    placeholder="ex. Jean Dupont"
                    required
                    disabled={pending}
                    autoComplete="name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="final-centre">Nom du centre</label>
                  <input
                    id="final-centre"
                    name="centre"
                    type="text"
                    placeholder="ex. FormaPlus"
                    required
                    disabled={pending}
                    autoComplete="organization"
                  />
                </div>

                <div className="field">
                  <label htmlFor="final-phone">
                    Téléphone <small>(pour activer votre compte)</small>
                  </label>
                  <input
                    id="final-phone"
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

                <div className="submit-wrap">
                  <button type="submit" disabled={pending}>
                    {pending ? (
                      <>
                        <span className="button-spinner" aria-hidden="true" />
                        Envoi de la demande…
                      </>
                    ) : (
                      'Rappelez-moi pour en parler'
                    )}
                  </button>
                </div>

                {status === 'error' && (
                  <div className="final-error" role="alert">{errorMessage}</div>
                )}

                <p className="final-trust">
                  🔒 Pas de carte bancaire. Accès instantané à toutes les fonctionnalités.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
