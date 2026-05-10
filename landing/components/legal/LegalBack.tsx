export default function LegalBack({
  children,
  className = 'legal-back',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href="/" className={className}>
      {children}
    </a>
  );
}
