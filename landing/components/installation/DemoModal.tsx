'use client';

import SharedDemoModal from '@/components/shared/DemoModal';
import { submitDemo } from '@/app/installation/actions';

export default function DemoModal() {
  return (
    <SharedDemoModal
      submitDemo={submitDemo}
      headTitle="Dernière étape pour réserver votre démo"
      headSub="30 minutes en visio avec un expert beTool. Aucun engagement."
      defaultCtaLabel="Programmer ma démo"
      centreLabel="Entreprise"
      centrePlaceholder="ex. Énergie Pro SARL"
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
