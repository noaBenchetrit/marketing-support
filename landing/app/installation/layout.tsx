import type { Metadata } from "next";
import Script from "next/script";
import "./theme.css";
import { DemoModalProvider } from "@/components/installation/DemoModalProvider";
import DemoModal from "@/components/installation/DemoModal";
import AutoDemoPopup from "@/components/installation/AutoDemoPopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://installation-expert.com"),
  title: "Le chantier commence au clic. Le profit se joue à la signature. — beTool Install",
  description:
    "Pilotez vos installations RGE de la qualification à la prime. Éliminez les erreurs de conformité et accélérez vos encaissements de 40%.",
  alternates: { canonical: "/" },
};

const GOOGLE_ADS_ID = "AW-18202785429";

export default function InstallationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DemoModalProvider>
      {/* Google tag (gtag.js) — Google Ads, landing installation (BTP) */}
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
      <AutoDemoPopup />
    </DemoModalProvider>
  );
}
