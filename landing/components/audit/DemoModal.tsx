'use client';

import SharedDemoModal from '@/components/shared/DemoModal';
import { submitDemo } from '@/app/audit/actions';

export default function DemoModal() {
  return (
    <SharedDemoModal
      submitDemo={submitDemo}
      headTitle="Dernière étape pour votre pré-audit"
      headSub="15 minutes en visio avec un expert audit certifié. Confidentialité absolue."
      defaultCtaLabel="Je valide ma demande de rappel"
      centreLabel="Entreprise"
      centrePlaceholder="ex. Acme SAS"
      phoneLabel={<>Numéro de téléphone <small>(pour fixer le créneau ensemble)</small></>}
    >
      <label htmlFor="demo-modal-type">
        Type d&apos;audit <small>(optionnel)</small>
      </label>
      <select id="demo-modal-type" name="taille" defaultValue="">
        <option value="">Sélectionner…</option>
        <option value="qualite">Qualité</option>
        <option value="securite">Sécurité</option>
        <option value="autre">Autre</option>
      </select>
    </SharedDemoModal>
  );
}
