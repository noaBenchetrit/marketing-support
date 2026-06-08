/**
 * Détection du canal d'acquisition (« d'où vient le visiteur »).
 *
 * Le canal est capté en *first-touch* dès l'arrivée sur la landing puis mémorisé
 * pour toute la session : il survit ainsi à la navigation interne, qui ferait
 * sinon perdre les paramètres d'URL avant l'envoi du formulaire.
 */

const STORAGE_KEY = 'betool_attribution';

/**
 * Déduit le canal à partir de l'URL et du referrer courants.
 * Renvoie `null` si rien d'exploitable (ex. navigation interne).
 */
function detectChannel(): string | null {
  if (typeof window === 'undefined') return null;

  const params = new URLSearchParams(window.location.search);

  // 1. utm_source explicite : prioritaire (emailing, sources ponctuelles « salon », « qr-flyer »…).
  const utm = params.get('utm_source');
  if (utm) return utm.trim().toLowerCase();

  // 2. Click IDs ajoutés automatiquement par les régies — aucun tag manuel requis.
  if (params.has('gclid') || params.has('gbraid') || params.has('wbraid')) return 'google ads';
  if (params.has('fbclid')) return 'meta';

  // 3. Repli sur le referrer (trafic non tagué).
  const ref = document.referrer;
  if (!ref) return 'direct';
  try {
    const host = new URL(ref).hostname.replace(/^www\./, '');
    if (host === window.location.hostname) return null; // navigation interne : on ne touche pas au first-touch
    if (/(^|\.)google\./.test(host)) return `organic (${host})`;
    return `referral (${host})`;
  } catch {
    return 'direct';
  }
}

/**
 * À appeler au montage d'une landing. Capte le canal en first-touch et le
 * mémorise pour la session. N'écrase jamais une valeur déjà enregistrée.
 */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const channel = detectChannel();
    if (channel) sessionStorage.setItem(STORAGE_KEY, channel);
  } catch {
    /* sessionStorage indisponible (mode privé strict) — sans danger, on ignore */
  }
}

/** Renvoie le canal mémorisé, ou le détecte à la volée en dernier recours. */
export function getAttribution(): string {
  if (typeof window === 'undefined') return '';
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
  } catch {
    /* ignore */
  }
  return detectChannel() ?? 'direct';
}