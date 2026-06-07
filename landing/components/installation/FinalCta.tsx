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
  const { prefilledEmail, emailWasPrefilled } = useDemoModal();

  return (
    <section id="sec-form" className="deck-section is-dark form-deck">
      <span className="deck-orb orb-accent orb-1" aria-hidden="true" />
      <span className="deck-orb orb-blue orb-2" aria-hidden="true" />

      <div className="container">
        <div className="sec-split">
          <div className="sec-head">
            <span className="eyebrow reveal reveal-left">Parlons de votre entreprise</span>
            <h2 className="reveal reveal-left delay-1">
              Échangez avec un expert et voyez ce que <span className="accent">beTool</span> change
              pour vous.
            </h2>
            <p className="sec-lead reveal reveal-left delay-2">
              30 minutes pour comprendre vos enjeux et vous montrer concrètement comment on peut vous
              aider. Sans engagement.
            </p>

            <ul className="cta-points reveal reveal-left delay-3">
              <li>
                <span className="cta-point-ico" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span><strong>1 jour de gestion gagné par semaine</strong> grâce à l&apos;automatisation de vos tâches.</span>
              </li>
              <li>
                <span className="cta-point-ico" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span><strong>Déjà +300 professionnels du bâtiment</strong> nous font confiance.</span>
              </li>
              <li>
                <span className="cta-point-ico" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span><strong>Plus de 10 ans d&apos;expertise</strong> au service de votre métier.</span>
              </li>
            </ul>
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
                  Échanger avec un expert<ArrowIcon />
                </>
              }
              idleNote="🛡️ Données sécurisées et conformes RGPD · Démo sans engagement"
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
