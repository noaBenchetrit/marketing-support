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
    <section className="cta-final" id="cta-final">
      <div className="container">
        <div className="cta-final-grid">
          <div className="reveal">
            <span className="eyebrow cta-final-eyebrow">Essai gratuit · 14 jours</span>
            <h2>
              Passez à la vitesse supérieure. <strong>Centralisez votre entreprise.</strong>
            </h2>
            <p>
              Gagnez du temps, optimisez vos plannings et vendez plus grâce aux aides intégrées.
              Essai 14 jours complet et gratuit, sans engagement.
            </p>
          </div>

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
                Rappelez-moi
                <ArrowIcon />
              </>
            }
            idleNote="Test gratuit · Sans carte bancaire · Configuration en 5 minutes"
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
    </section>
  );
}
