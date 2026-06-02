'use client';

import DemoForm from '@/components/shared/DemoForm';
import { submitDemo } from '@/app/installation/actions';
import { useDemoModal } from './DemoModalProvider';

const ArrowIcon = () => (
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
);

export default function FinalCta() {
  const { open, prefilledEmail, emailWasPrefilled } = useDemoModal();

  return (
    <section id="sec-form" className="deck-section is-dark form-deck">
      <span className="deck-orb orb-accent orb-1" aria-hidden="true" />
      <span className="deck-orb orb-blue orb-2" aria-hidden="true" />

      <div className="container">
        <div className="sec-split">
          <div className="sec-head">
            <span className="eyebrow reveal reveal-left">Accès personnalisé</span>
            <h2 className="reveal reveal-left delay-1">
              Demandez votre accès personnalisé à <span className="accent">Betool CRM</span>
            </h2>
            <p className="sec-lead reveal reveal-left delay-2">
              Configurez vos dossiers CEE &amp; MaPrimeRénov&apos;, vos plannings et vos équipes en
              quelques minutes. Un expert vous accompagne pour démarrer.
            </p>
            <div className="sec-cta reveal reveal-left delay-3">
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => open({ source: 'sec-form-secondary', ctaLabel: 'Planifier ma démo' })}
              >
                Planifier ma démo
              </button>
            </div>
          </div>

          <div className="reveal reveal-right delay-1">
            <DemoForm
              submitDemo={submitDemo}
              source="cta-final"
              variant="inline"
              prefilledEmail={prefilledEmail}
              showEmailHint={emailWasPrefilled}
              centreLabel="Entreprise"
              centrePlaceholder="ex. Énergie Pro SARL"
              phoneLabel={<>Téléphone <small>(pour fixer le créneau)</small></>}
              submitLabel={
                <>
                  Programmer ma démo<ArrowIcon />
                </>
              }
              idleNote="🛡️ Données sécurisées et conformes RGPD · Configuration rapide en moins de 5 minutes"
            >
              <label htmlFor="cta-techniciens">Nombre de techniciens terrain</label>
              <select id="cta-techniciens" name="taille" defaultValue="" required>
                <option value="">Sélectionner…</option>
                <option value="1-5">1 à 5 techniciens</option>
                <option value="5-20">5 à 20 techniciens</option>
                <option value="20+">Plus de 20 techniciens</option>
              </select>
            </DemoForm>
          </div>
        </div>
      </div>
    </section>
  );
}
