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
                Passer à la vitesse supérieure
                <ArrowIcon />
              </>
            }
            idleNote="Réponse sous 24h ouvrées · Aucun engagement"
          >
            <label htmlFor="cta-metier">Votre corps d&apos;état</label>
            <select id="cta-metier" name="metier" defaultValue="" required>
              <option value="">Sélectionner…</option>
              <option value="renovation">Rénovation énergétique</option>
              <option value="maconnerie">Maçonnerie</option>
              <option value="menuiserie">Menuiserie</option>
              <option value="autre">Autre</option>
            </select>

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
