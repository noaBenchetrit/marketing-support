export const FINAL_FORM_ID = 'final-form';

export function scrollToFinalForm() {
  if (typeof window === 'undefined') return;
  const target = document.getElementById(FINAL_FORM_ID);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
