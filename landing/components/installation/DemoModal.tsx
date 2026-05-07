'use client';

import SharedDemoModal from '@/components/shared/DemoModal';
import { submitDemo } from '@/app/installation/actions';

export default function DemoModal() {
  return (
    <SharedDemoModal
      submitDemo={submitDemo}
      headTitle="Dernière étape pour votre accès Performance"
      headSub="15 minutes en visio avec un expert beTool Install. Aucun engagement."
      defaultCtaLabel="Je valide ma demande de rappel"
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

      <label htmlFor="demo-modal-message">
        Message <small>(optionnel)</small>
      </label>
      <textarea
        id="demo-modal-message"
        name="message"
        rows={3}
        placeholder="Une question ou un besoin spécifique ?"
        maxLength={500}
      />
    </SharedDemoModal>
  );
}
