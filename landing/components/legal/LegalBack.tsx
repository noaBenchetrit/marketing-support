'use client';

import { useRouter } from 'next/navigation';

export default function LegalBack({
  children,
  className = 'legal-back',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <a href="/" className={className} onClick={onClick}>
      {children}
    </a>
  );
}
