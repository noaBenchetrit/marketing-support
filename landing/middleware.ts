import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const HOSTNAME_TO_METIER: Record<string, string> = {
  'audit-betool-crm.vercel.app': 'audit',
  'audit.localhost': 'audit',
  'formation.betool-crm.fr': 'formation',
  'www.formation.betool-crm.fr': 'formation',
  'formation.localhost': 'formation',
  'entreprise-btp-betool-crm.vercel.app': 'installation',
  'installation.localhost': 'installation',
};

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase() ?? '';
  const metier = HOSTNAME_TO_METIER[host];

  const { pathname } = request.nextUrl;

  // 1. Si domaine inconnu -> 404
  if (!metier) {
    return new NextResponse(null, { status: 404 });
  }

  // 2. Laisser passer les pages communes (CGU, Confidentialité)
  if (pathname === '/cgu' || pathname === '/confidentialite') {
    return NextResponse.next();
  }

  // 3. Sécurité : Empêcher d'accéder aux autres métiers (ex: audit.com/formation -> 404)
  const otherMetiers = ['audit', 'formation', 'installation'].filter(m => m !== metier);
  if (otherMetiers.some(m => pathname.startsWith(`/${m}`))) {
    return new NextResponse(null, { status: 404 });
  }

  // 4. REWRITE : Si on est sur la racine "/" ou sur le dossier du métier,
  // on force le contenu du métier sans changer l'URL.
  if (pathname === '/' || pathname.startsWith(`/${metier}`)) {
    const url = request.nextUrl.clone();
    // Si l'utilisateur a tapé /audit, on le ramène proprement à / en interne
    url.pathname = `/${metier}${pathname === `/${metier}` ? '' : pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // On exclut strictement tout ce qui est technique/statique
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:css|js|png|jpg|svg)$).*)',
  ],
};