import type { Metadata } from "next";
import Script from "next/script";
import "./theme.css";
import { DemoModalProvider } from "@/components/audit/DemoModalProvider";
import DemoModal from "@/components/audit/DemoModal";

export const metadata: Metadata = {
  metadataBase: new URL("https://audit-expert.com"),
  title: "L'audit est une science. beTool est votre laboratoire. — beTool Audit",
  description:
    "Sécurisez vos missions de la collecte à la signature. Centralisez vos preuves, automatisez vos rapports et laissez l'IA booster votre vigilance.",
  alternates: { canonical: "/" },
};

const GOOGLE_ADS_ID = "AW-18202785429";

export default function AuditLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DemoModalProvider>
      {/* Google tag (gtag.js) — Google Ads, landing audit */}
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
      <DemoModal />
    </DemoModalProvider>
  );
}
