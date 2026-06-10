'use client';

import { useEffect, useRef } from 'react';
import { useDemoModal } from './DemoModalProvider';

/** Délai avant l'ouverture automatique de la pop-up (en ms). */
const POPUP_DELAY_MS = 5000;

/**
 * Ouvre automatiquement la modale de démo au bout de {@link POPUP_DELAY_MS}
 * lorsque l'URL contient `?demo=popup` (cas d'arrivée depuis le 2e email).
 *
 * Les visiteurs qui arrivent directement sur le formulaire (lien `#sec-form`,
 * sans ce paramètre) ne déclenchent jamais la pop-up.
 */
export default function AutoDemoPopup() {
  const { open } = useDemoModal();
  const firedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || firedRef.current) return;

    const params = new URLSearchParams(window.location.search);
    if (params.get('demo') !== 'popup') return;

    const timer = window.setTimeout(() => {
      firedRef.current = true;
      open({ source: 'email-popup-auto' });

      // Nettoie le paramètre une fois la pop-up ouverte, pour éviter un
      // redéclenchement au reload / partage de l'URL.
      const url = new URL(window.location.href);
      url.searchParams.delete('demo');
      window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [open]);

  return null;
}
