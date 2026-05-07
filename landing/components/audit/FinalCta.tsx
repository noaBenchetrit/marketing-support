'use client';

import DemoForm from '@/components/shared/DemoForm';
import { submitDemo } from '@/app/audit/actions';
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

          <DemoForm
            submitDemo={submitDemo}
            source="cta-final"
            variant="inline"
            prefilledEmail={prefilledEmail}
            showEmailHint={emailWasPrefilled}
            centreLabel="Entreprise"
            centrePlaceholder="ex. Acme SAS"
            phoneLabel={<>Téléphone <small>(pour le rappel)</small></>}
            submitLabel={
              <>
                Passer au Zéro Défaut
                <ArrowIcon />
              </>
            }
            idleNote="Rappel sous 24h ouvrées · Confidentialité absolue"
          >
            <label htmlFor="cta-type">Quel est votre domaine d&apos;audit&nbsp;?</label>
            <select id="cta-type" name="taille" defaultValue="" required>
              <option value="">Sélectionner…</option>
              <option value="energetique">Audit Énergétique (MaPrimeRénov / CEE)</option>
              <option value="securite">Audit Sécurité / Incendie</option>
              <option value="qualite">Audit Qualité / ISO</option>
              <option value="autre">Autre</option>
            </select>
          </DemoForm>
        </div>
      </div>
    </section>
  );
}
