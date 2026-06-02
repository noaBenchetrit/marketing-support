export const FORM_ANCHOR = 'audit-form';

/** Smooth-scroll vers le formulaire de capture, puis focus le 1er champ. */
export function scrollToForm() {
  const el = document.getElementById(FORM_ANCHOR);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  window.setTimeout(() => {
    el.querySelector<HTMLInputElement>('input')?.focus({ preventScroll: true });
  }, 700);
}
