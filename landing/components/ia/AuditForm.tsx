import IaForm from './IaForm';

export default function AuditForm() {
  return (
    <section className="ia-form-section" id="audit-form">
      <div className="container">
        <div className="ia-form-grid">
          <div className="ia-form-pitch reveal">
            <span className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Offert · 30 minutes
            </span>
            <h2>
              Audit de faisabilité <span className="accent-text">offert</span>.
            </h2>
            <p className="lead">
              Évaluez le potentiel d&apos;automatisation de vos processus. En 30 minutes, on
              identifie les tâches répétitives qu&apos;un agent IA peut prendre en charge — et ce
              que ça vous fait gagner.
            </p>
            <ul className="ia-form-checks">
              <li>
                <span className="check" aria-hidden="true">✓</span>
                Analyse concrète de vos processus actuels
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span>
                Estimation du temps et des coûts économisables
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span>
                Sans engagement, 100 % confidentiel
              </li>
            </ul>
          </div>

          <div className="ia-form-card reveal delay-1">
            <span className="ia-form-offer">🎁 Audit de faisabilité offert</span>
            <IaForm />
          </div>
        </div>
      </div>
    </section>
  );
}
