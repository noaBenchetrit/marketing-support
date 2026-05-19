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
    <section className="cta-final-v4" id="cta-final">
      <div className="container">
        <div className="cta-final-v4-grid">
          <div className="reveal">
            <h2 className="cta-final-v4-title">
              Arrêtez de subir l&apos;instabilité réglementaire. Automatisez.
            </h2>
            <p className="cta-final-v4-sub">
              Que vous gériez 50 ou 5 000 audits par semaine, beTool s&apos;adapte à vos grilles de
              contrôle. Gagnons du temps : configurez votre flux personnalisé en 15&nbsp;minutes.
            </p>

            <ul className="cta-final-v4-checks">
              <li>
                <span className="check" aria-hidden="true">✓</span>
                Rappel sous 24&nbsp;h
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span>
                Confidentialité absolue
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span>
                Démo basée sur vos propres documents métiers
              </li>
            </ul>
          </div>

          <div className="cta-final-v4-form-card reveal delay-1">
            <DemoForm
              submitDemo={submitDemo}
              source="cta-final-v4"
              variant="inline"
              prefilledEmail={prefilledEmail}
              showEmailHint={emailWasPrefilled}
              centreLabel="Cabinet / Bureau de contrôle"
              centrePlaceholder="ex. Cabinet Éco-Audit"
              phoneLabel={<>Téléphone <small>(pour le rappel)</small></>}
              submitLabel={
                <>
                  Rappelez-moi pour une démo
                  <ArrowIcon />
                </>
              }
              idleNote="Rappel sous 24h ouvrées · Confidentialité absolue"
            >
              <label htmlFor="cta-taille">
                Taille de l&apos;équipe <small>(optionnel)</small>
              </label>
              <select id="cta-taille" name="taille" defaultValue="">
                <option value="">Sélectionner…</option>
                <option value="solo">Solo / freelance</option>
                <option value="2-10">2 à 10 auditeurs</option>
                <option value="11-50">11 à 50 auditeurs</option>
                <option value="50+">Plus de 50 auditeurs</option>
              </select>
            </DemoForm>
          </div>
        </div>
      </div>
    </section>
  );
}
