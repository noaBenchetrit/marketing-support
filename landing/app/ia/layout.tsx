import type { Metadata } from "next";
import Script from "next/script";
import "./theme.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://betool-crm.fr"),
  title: "beTool IA — Confiez les tâches répétitives à des agents IA autonomes",
  description:
    "Arrêtez de payer des salariés pour faire ce qu'une IA peut faire. Déployez des agents IA métiers : réduction des coûts, automatisation et productivité décuplée. Audit de faisabilité offert (30 min).",
  alternates: { canonical: "/" },
};

const GOOGLE_ADS_ID = "AW-18202785429";

export default function IaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Google tag (gtag.js) — Google Ads, landing IA uniquement */}
      <Script
        id="gtag-ads-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <Script id="gtag-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
      {children}
    </>
  );
}
