'use client';

import SharedDemoModal from '@/components/shared/DemoModal';
import { submitDemo } from '@/app/installation/actions';

/** Libellé de conversion Google Ads (Lead — CRM beTool Installation/BTP). */
const CONVERSION_SEND_TO = 'AW-18202785429/CnGhCPGnhb0cEJXt4edD';

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
      headTitle="Dernière étape pour réserver votre démo"
      headSub="30 minutes en visio avec un expert beTool. Aucun engagement."
      defaultCtaLabel="Obtenir ma démo offerte"
      centreLabel="Entreprise"
      centrePlaceholder="ex. Énergie Pro SARL"
      centreRequired={false}
      phoneLabel={<>Numéro de téléphone <small>(pour fixer le créneau ensemble)</small></>}
    >
      <label htmlFor="demo-modal-techniciens">
        Nombre de techniciens terrain <small>(optionnel)</small>
      </label>
      <select id="demo-modal-techniciens" name="taille" defaultValue="">
        <option value="">Sélectionner…</option>
        <option value="1-5">1 à 5 techniciens</option>
        <option value="5-20">5 à 20 techniciens</option>
        <option value="20+">Plus de 20 techniciens</option>
      </select>
    </SharedDemoModal>
  );
}
