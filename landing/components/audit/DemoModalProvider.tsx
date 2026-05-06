'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type DemoModalOpenOptions = {
  /** Étiquette pour tracer d'où vient l'ouverture (ex: "hero", "roi-30h"). */
  source?: string;
  /** Texte personnalisé pour le bouton de soumission (ex: "Récupérer mes 30h"). */
  ctaLabel?: string;
};

type Ctx = {
  isOpen: boolean;
  source: string | null;
  ctaLabel: string | null;
  prefilledEmail: string;
  emailWasPrefilled: boolean;
  open: (options?: DemoModalOpenOptions) => void;
  close: () => void;
};

const DemoModalCtx = createContext<Ctx | null>(null);

const SESSION_EMAIL_KEY = 'client_email';

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | null>(null);
  const [ctaLabel, setCtaLabel] = useState<string | null>(null);
  const [prefilledEmail, setPrefilledEmail] = useState('');
  const [emailWasPrefilled, setEmailWasPrefilled] = useState(false);

  // Récupération de l'email :
  // 1. depuis ?email= dans l'URL (cas d'arrivée depuis un email marketing)
  //    → on stocke en sessionStorage puis on nettoie l'URL pour ne pas la partager
  // 2. sinon, fallback sur sessionStorage (l'utilisateur a déjà visité la page)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const params = new URLSearchParams(window.location.search);
      const fromUrl = params.get('email');

      if (fromUrl) {
        window.sessionStorage.setItem(SESSION_EMAIL_KEY, fromUrl);
        const url = new URL(window.location.href);
        url.searchParams.delete('email');
        window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
        setPrefilledEmail(fromUrl);
        setEmailWasPrefilled(true);
        return;
      }

      const fromSession = window.sessionStorage.getItem(SESSION_EMAIL_KEY);
      if (fromSession) {
        setPrefilledEmail(fromSession);
        setEmailWasPrefilled(true);
      }
    } catch {
      /* sessionStorage indisponible (mode privé restreint) — on ignore */
    }
  }, []);

  const open = useCallback((options?: DemoModalOpenOptions) => {
    setSource(options?.source ?? null);
    setCtaLabel(options?.ctaLabel ?? null);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<Ctx>(
    () => ({ isOpen, source, ctaLabel, prefilledEmail, emailWasPrefilled, open, close }),
    [isOpen, source, ctaLabel, prefilledEmail, emailWasPrefilled, open, close],
  );

  return <DemoModalCtx.Provider value={value}>{children}</DemoModalCtx.Provider>;
}

export function useDemoModal() {
  const ctx = useContext(DemoModalCtx);
  if (!ctx) throw new Error('useDemoModal doit être appelé dans <DemoModalProvider>');
  return ctx;
}