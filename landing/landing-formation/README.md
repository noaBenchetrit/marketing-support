# Landing — betool

Landing page de la plateforme betool, portée de HTML statique vers Next.js 16 (App Router, TypeScript).

## Lancer le projet

```bash
npm run dev
```

Ouvre http://localhost:3000

Hot-reload activé : sauvegarde un fichier, le navigateur se met à jour.

## Architecture

```
landing/
├── app/
│   ├── actions.ts          ← Server Action submitDemo (email + CRM)
│   ├── globals.css         ← CSS global (porté du HTML statique)
│   ├── layout.tsx          ← root layout, font Inter
│   └── page.tsx            ← compose les 14 sections
├── components/landing/
│   ├── Nav.tsx             ← 'use client' (sticky scroll detection)
│   ├── Hero.tsx            ← 'use client' (3D tilt sur dashboard)
│   ├── Credibility.tsx
│   ├── LoveBar.tsx
│   ├── Bento.tsx
│   ├── Comparison.tsx
│   ├── Testimonials.tsx    ← server, marquee CSS
│   ├── testimonials-data.ts ← le tableau TESTIMONIALS
│   ├── Roi.tsx             ← 'use client' (slider)
│   ├── Workflow.tsx
│   ├── Emotional.tsx
│   ├── SafePlace.tsx
│   ├── Faq.tsx             ← native <details>
│   ├── Satisfaction.tsx
│   ├── FinalCta.tsx        ← 'use client' (form + submitDemo)
│   ├── Footer.tsx
│   └── RevealEffects.tsx   ← 'use client' (IntersectionObserver global)
├── _legacy/
│   └── index.html          ← ancienne version statique (référence)
├── .env.local              ← clés API (NE PAS COMMITER)
└── .env.local.example      ← documentation des variables
```

## TODO avant la mise en prod

### 1. Câbler le push vers le CRM + l'email de notification

Le Server Action `submitDemo` doit, à terme, envoyer le lead vers :

```
https://login.crm-energie.fr/crm/leadManagement/v2
```

(URL hardcodée dans `app/actions.ts` — variable `CRM_LEAD_ENDPOINT`.)

Pour l'instant : l'action valide les inputs (zod) et log le lead en console. UX du form fonctionnelle, pas d'envoi réel.

À faire ensuite :
- Côté CRM : ajouter l'endpoint public `/leadManagement/v2` (ou s'assurer qu'il accepte les requêtes externes), avec auth Bearer token et email de notification déclenché en interne (via le système d'envoi existant du CRM, pas besoin de Resend).
- Côté landing : décommenter le `fetch()` dans `actions.ts`, renseigner `CRM_API_TOKEN` dans `.env.local`.

### 2. Domaine et déploiement

Options :
- **Vercel** (le plus simple, free tier OK pour démarrer) : connecter le repo Git, déployer en 1 clic, brancher `landing.betool.fr`
- **OVH/Scaleway/auto-hébergé** : `npm run build && npm run start` derrière nginx ; ou export statique avec `next build && next export` si on n'utilise pas les Server Actions (mais ici on en a besoin pour le form, donc serveur Node requis)

## Stack

- Next.js 16.2 (App Router, Turbopack)
- React 19
- TypeScript 5
- zod 4 (validation form)
- CSS vanilla (design system Limova-inspired, pas de Tailwind)

## Modifier les témoignages

Tout est dans `components/landing/testimonials-data.ts`. Format :

```ts
{
  name: 'Prénom Nom',
  role: 'Rôle',
  organism: 'Nom du centre',
  avatar: 'PN',
  color: 'green' | 'blue' | 'orange' | 'purple' | 'pink' | 'teal',
  quote: '...',
  metric: { num: '+200', label: 'stagiaires absorbés' }
}
```

Les cards sont dupliquées au build pour la boucle marquee infinie.
