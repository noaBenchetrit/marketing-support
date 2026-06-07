// Événements GA4 du tunnel démo, partagés par les 3 landings.
// Le chargement de GA (gtag.js) est assuré par <GoogleAnalytics> de @next/third-parties
// dans le layout racine ; ici on ne fait qu'émettre les événements via le même package.

import { sendGAEvent } from '@next/third-parties/google';

type GtagParams = Record<string, string | number | boolean | undefined>;

/**
 * Émet un événement GA4. S'appuie sur le dataLayer initialisé par <GoogleAnalytics> :
 * si GA n'est pas chargé (bloqueur, refus cookies…), l'appel est simplement sans effet.
 */
export function trackEvent(name: string, params?: GtagParams): void {
  sendGAEvent('event', name, params ?? {});
}
