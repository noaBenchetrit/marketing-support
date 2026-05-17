'use client';

import { createContext, useContext, useRef, useState } from 'react';

type Ctx = {
  email: string;
  setEmail: (value: string) => void;
  /** True quand l'email vient de la navbar — utilisé par le form final pour focus le champ suivant. */
  prefilledByNav: boolean;
  markPrefilledByNav: () => void;
  clearPrefilledByNav: () => void;
  /** Permet à la navbar d'enregistrer une réf focusable du form final (input password ou nom). */
  registerNextFocus: (el: HTMLInputElement | null) => void;
  focusNext: () => void;
};

const LeadEmailContext = createContext<Ctx | null>(null);

export function useLeadEmail() {
  const ctx = useContext(LeadEmailContext);
  if (!ctx) throw new Error('useLeadEmail doit être utilisé dans un LeadEmailProvider');
  return ctx;
}

export default function LeadEmailProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmailState] = useState('');
  const [prefilledByNav, setPrefilledByNav] = useState(false);
  const nextFocusRef = useRef<HTMLInputElement | null>(null);

  return (
    <LeadEmailContext.Provider
      value={{
        email,
        setEmail: setEmailState,
        prefilledByNav,
        markPrefilledByNav: () => setPrefilledByNav(true),
        clearPrefilledByNav: () => setPrefilledByNav(false),
        registerNextFocus: (el) => {
          nextFocusRef.current = el;
        },
        focusNext: () => {
          nextFocusRef.current?.focus();
        },
      }}
    >
      {children}
    </LeadEmailContext.Provider>
  );
}
