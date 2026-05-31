import type { Metadata } from 'next';
import GenericForm from './GenericForm';
import './formulaire.css';

export const metadata: Metadata = {
  title: 'Formulaire de contact — beTool',
  description: 'Laissez-nous vos coordonnées, notre équipe vous recontacte sous 24h ouvrées.',
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{ source?: string }>;

export default async function FormulairePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { source } = await searchParams;
  const safeSource = (source ?? 'iframe').slice(0, 60);

  return (
    <main className="embed-root">
      <div className="embed-card">
        <header className="embed-head">
          <h1>Parlons de votre projet</h1>
          <p>Renseignez vos coordonnées, nous vous recontactons sous 24h ouvrées.</p>
        </header>

        <GenericForm source={safeSource} />

        <p className="embed-footer">
          🔒 Vos données restent confidentielles et ne sont utilisées que pour vous recontacter.
        </p>
      </div>
    </main>
  );
}
