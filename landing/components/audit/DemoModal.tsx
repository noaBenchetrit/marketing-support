'use client';

import SharedDemoModal from '@/components/shared/DemoModal';
import { submitDemo } from '@/app/audit/actions';

/** Libellé de conversion Google Ads (Lead — CRM beTool Audit). */
const CONVERSION_SEND_TO = 'AW-18202785429/6C6tCP-KvbocEJXt4edD';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function DemoModal() {
  return (
    <SharedDemoModal
      submitDemo={submitDemo}
      onSuccess={() => {
        // Conversion Google Ads : déclenchée uniquement sur un lead réellement accepté.
        window.gtag?.('event', 'conversion', {
          send_to: CONVERSION_SEND_TO,
          value: 1.0,
          currency: 'ILS',
        });
      }}
      headTitle="Dernière étape pour votre pré-audit"
      headSub="15 minutes en visio avec un expert audit certifié. Confidentialité absolue."
      defaultCtaLabel="Je valide ma demande de rappel"
      centreLabel="Entreprise"
      centrePlaceholder="ex. Acme SAS"
      phoneLabel={<>Numéro de téléphone <small>(pour fixer le créneau ensemble)</small></>}
    >
      <label htmlFor="demo-modal-taille">
        Taille de l&apos;entreprise <small>(optionnel)</small>
      </label>
      <select id="demo-modal-taille" name="taille" defaultValue="">
        <option value="">Sélectionner…</option>
        <option value="solo">Solo / freelance</option>
        <option value="2-10">2 à 10 personnes</option>
        <option value="11-50">11 à 50 personnes</option>
        <option value="50+">Plus de 50 personnes</option>
      </select>
    </SharedDemoModal>
  );
}
