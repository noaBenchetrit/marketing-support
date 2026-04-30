'use server';

import { z } from 'zod';

const CRM_LEAD_ENDPOINT = 'https://login.crm-energie.fr/crm/leadManagement/v2';
const CRM_BUID = '310';
const CRM_KEY = '7B553E123432A6993D3431271EFD3';
const CRM_GROUP_CLIENT_ID = '1287';
const CRM_TIMEOUT_MS = 10_000;

const DemoFormSchema = z.object({
  centre: z.string().trim().min(2, 'Nom du centre requis').max(120),
  email: z.string().trim().email('Email invalide').max(200),
  phone: z
    .string()
    .trim()
    .min(6, 'Téléphone requis')
    .max(40)
    .regex(/^[+0-9\s().-]+$/, 'Numéro invalide'),
  source: z.string().trim().max(60).optional().nullable(),
});

export type DemoFormResult =
  | { ok: true; centre: string }
  | { ok: false; error: string };

export async function submitDemo(formData: FormData): Promise<DemoFormResult> {
  const parsed = DemoFormSchema.safeParse({
    centre: formData.get('centre'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    source: formData.get('source'),
  });

  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? 'Données invalides' };
  }

  const { centre, email, phone, source } = parsed.data;

  const payload = {
    phone,
    firstname: 'a',
    lastname: centre,
    groupClientId: CRM_GROUP_CLIENT_ID,
    email,
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
      payload,
      receivedAt: new Date().toISOString(),
    });

    return { ok: true, centre };
  } catch (err) {
    console.error('[submitDemo] Échec de l\'appel CRM', {
      error: err instanceof Error ? { name: err.name, message: err.message } : err,
      payload,
    });
    return { ok: false, error: 'Une erreur est survenue, merci de réessayer.' };
  }
}
