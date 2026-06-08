'use server';

import { z } from 'zod';

const CRM_LEAD_ENDPOINT = 'https://login.crm-energie.fr/crm/leadManagement/v2';
const CRM_BUID = '310';
const CRM_KEY = '7B553E123432A6993D3431271EFD3';
const CRM_GROUP_CLIENT_ID = '715';
const CRM_TIMEOUT_MS = 10_000;

const DemoFormSchema = z.object({
  fullname: z.string().trim().min(2, 'Nom et prénom requis').max(120),
  centre: z.string().trim().max(120).optional(),
  email: z.string().trim().email('Email invalide').max(200),
  phone: z
    .string()
    .trim()
    .min(6, 'Téléphone requis')
    .max(40)
    .transform((val) => val.replace(/[\s.()\-_]/g, ''))
    .refine(
      (val) => /^(?:0|\+33|0033)[1-9]\d{8}$/.test(val),
      'Numéro de téléphone français invalide',
    ),
  taille: z.string().trim().max(40).optional().nullable(),
  message: z.string().trim().max(500).optional().nullable(),
  source: z.string().trim().max(60).optional().nullable(),
  attribution: z.string().trim().max(80).optional().nullable(),
});

/** Produit associé à cette landing (ajouté au commentaire CRM). */
const PRODUCT = 'CRM Audit';

export type DemoFormResult =
  | { ok: true; firstname: string; centre: string }
  | { ok: false; error: string };

export async function submitDemo(formData: FormData): Promise<DemoFormResult> {
  const parsed = DemoFormSchema.safeParse({
    fullname: formData.get('fullname'),
    centre: formData.get('centre'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    taille: formData.get('taille'),
    message: formData.get('message'),
    source: formData.get('source'),
    attribution: formData.get('attribution'),
  });

  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? 'Données invalides' };
  }

  const { fullname, centre, email, phone, taille, message, source, attribution } = parsed.data;

  const nameParts = fullname.split(/\s+/);
  const firstname = nameParts[0] ?? '';
  const lastname = nameParts.slice(1).join(' ') || firstname;

  const commentParts: string[] = [`Produit: ${PRODUCT}`];
  if (attribution) commentParts.push(`Canal: ${attribution}`);
  if (source) commentParts.push(`Source: ${source}`);
  if (centre) commentParts.push(`Centre: ${centre}`);
  if (taille) commentParts.push(`Taille: ${taille}`);
  if (message) commentParts.push(`Message: ${message}`);
  const comment = commentParts.join(' | ');

  const payload = {
    phone,
    firstname,
    lastname,
    groupClientId: CRM_GROUP_CLIENT_ID,
    email,
    comment,
  };

  try {
    const response = await fetch(CRM_LEAD_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        buid: CRM_BUID,
        key: CRM_KEY,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(CRM_TIMEOUT_MS),
      cache: 'no-store',
    });

    if (!response.ok) {
      const responseBody = await response.text().catch(() => '');
      console.error('[submitDemo] CRM a retourné un statut non-2xx', {
        status: response.status,
        statusText: response.statusText,
        body: responseBody,
        payload,
      });
      return { ok: false, error: 'Une erreur est survenue, merci de réessayer.' };
    }

    console.log('[submitDemo] Lead envoyé au CRM', {
      source,
      taille,
      payload,
      receivedAt: new Date().toISOString(),
    });

    return { ok: true, firstname, centre: centre ?? '' };
  } catch (err) {
    console.error('[submitDemo] Échec de l\'appel CRM', {
      error: err instanceof Error ? { name: err.name, message: err.message } : err,
      payload,
    });
    return { ok: false, error: 'Une erreur est survenue, merci de réessayer.' };
  }
}
