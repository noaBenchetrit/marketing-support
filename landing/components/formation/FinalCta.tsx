'use client';

import DemoForm from '@/components/shared/DemoForm';
import { submitDemo } from '@/app/formation/actions';
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
            <span className="eyebrow" style={{ background: 'rgba(0,168,120,0.15)', color: '#5BC8A8' }}>
              Le passage à l&apos;action
            </span>
            <h2>
              Prêt à gagner <strong>10h par semaine</strong>&nbsp;?
            </h2>
            <p>
              Rejoignez les organismes de formation qui ont choisi la sérénité.
            </p>
          </div>

          <DemoForm
            submitDemo={submitDemo}
            source="cta-final"
            variant="inline"
            prefilledEmail={prefilledEmail}
            showEmailHint={emailWasPrefilled}
            centreLabel="Nom du centre"
            centrePlaceholder="ex. FormaPlus"
            emailPlaceholder="vous@votre-centre.fr"
            phoneLabel={<>Numéro de téléphone <small>(pour fixer le créneau ensemble)</small></>}
            submitLabel={
              <>
                Récupérer mes accès démo
                <ArrowIcon />
              </>
            }
            idleNote={<>Pas de carte bancaire. 14 jours d&apos;essai offerts.</>}
          >
            <label htmlFor="cta-taille">
              Taille de l&apos;entreprise <small>(optionnel)</small>
            </label>
            <select id="cta-taille" name="taille" defaultValue="">
              <option value="">Sélectionner…</option>
              <option value="solo">Solo / freelance</option>
              <option value="2-10">2 à 10 personnes</option>
              <option value="11-50">11 à 50 personnes</option>
              <option value="50+">Plus de 50 personnes</option>
            </select>

            <label htmlFor="cta-message">
              Message <small>(optionnel)</small>
            </label>
            <textarea
              id="cta-message"
              name="message"
              rows={3}
              placeholder="Une question ou un besoin spécifique ?"
              maxLength={500}
            />
          </DemoForm>
        </div>
      </div>
    </section>
  );
}
