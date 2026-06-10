import type { Metadata } from "next";
import Script from "next/script";
import "./theme.css";
import LeadEmailProvider from "@/components/formation/LeadEmailProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://formation-expert.com"),
  title: "beTool — Le logiciel des Organismes de Formation et CFA",
  description:
    "Divisez par 3 le temps de gestion de vos dossiers et automatisez votre conformité Qualiopi. Émargements eIDAS, plannings, BPF, IA anti-rejet : tout-en-un.",
  alternates: { canonical: "/" },
};

const GOOGLE_ADS_ID = "AW-18202785429";

export default function FormationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LeadEmailProvider>
      {/* Google tag (gtag.js) — Google Ads, landing formation */}
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
    </LeadEmailProvider>
  );
}
