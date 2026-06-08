'use server';

import { z } from 'zod';

const CRM_LEAD_ENDPOINT = 'https://login.crm-energie.fr/crm/leadManagement/v2';
const CRM_BUID = '310';
const CRM_KEY = '7B553E123432A6993D3431271EFD3';
const CRM_GROUP_CLIENT_ID = '45';
const CRM_TIMEOUT_MS = 10_000;

const AuditFormSchema = z.object({
  fullname: z.string().trim().min(2, 'Nom et prénom requis').max(120),
  email: z.string().trim().email('Email professionnel invalide').max(200),
  company: z.string().trim().min(2, "Nom de l'entreprise requis").max(160),
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
  source: z.string().trim().max(60).optional().nullable(),
  attribution: z.string().trim().max(80).optional().nullable(),
});

/** Produit associé à cette landing (ajouté au commentaire CRM). */
const PRODUCT = 'IA';

export type AuditFormResult =
  | { ok: true; firstname: string; company: string }
  | { ok: false; error: string };

export async function submitAudit(formData: FormData): Promise<AuditFormResult> {
  const parsed = AuditFormSchema.safeParse({
    fullname: formData.get('fullname'),
    email: formData.get('email'),
    company: formData.get('company'),
    phone: formData.get('phone'),
    source: formData.get('source'),
    attribution: formData.get('attribution'),
  });

  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? 'Données invalides' };
  }

  const { fullname, email, company, phone, source, attribution } = parsed.data;

  const nameParts = fullname.split(/\s+/);
  const firstname = nameParts[0] ?? '';
  const lastname = nameParts.slice(1).join(' ') || firstname;

  const commentParts: string[] = [`Produit: ${PRODUCT}`, 'Demande : Audit de faisabilité IA (30 min)'];
  if (attribution) commentParts.push(`Canal: ${attribution}`);
  if (source) commentParts.push(`Source: ${source}`);
  if (company) commentParts.push(`Entreprise: ${company}`);
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
      console.error('[submitAudit] CRM a retourné un statut non-2xx', {
        status: response.status,
        statusText: response.statusText,
        body: responseBody,
        payload,
      });
      return { ok: false, error: 'Une erreur est survenue, merci de réessayer.' };
    }

    console.log('[submitAudit] Lead envoyé au CRM', {
      source,
      payload,
      receivedAt: new Date().toISOString(),
    });

    return { ok: true, firstname, company };
  } catch (err) {
    console.error("[submitAudit] Échec de l'appel CRM", {
      error: err instanceof Error ? { name: err.name, message: err.message } : err,
      payload,
    });
    return { ok: false, error: 'Une erreur est survenue, merci de réessayer.' };
  }
}
