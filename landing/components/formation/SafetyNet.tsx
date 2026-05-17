'use client';

import { scrollToFinalForm } from './smoothScroll';

type Variant = 'brand' | 'violet' | 'accent';

type Props = {
  text?: string;
  buttonLabel: string;
  variant?: Variant;
};

const variantClass: Record<Variant, string> = {
  brand: 'btn btn-brand btn-large',
  violet: 'btn btn-violet btn-large',
  accent: 'btn btn-accent btn-large',
};

const ArrowIcon = () => (
  <svg
    className="arrow"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function SafetyNet({ text, buttonLabel, variant = 'brand' }: Props) {
  return (
    <section className="safety-net">
      <div className="container">
        {text && <p className="reveal">{text}</p>}
        <button
          type="button"
          className={`${variantClass[variant]} reveal delay-1`}
          onClick={scrollToFinalForm}
        >
          {buttonLabel}
          <ArrowIcon />
        </button>
      </div>
    </section>
  );
}
