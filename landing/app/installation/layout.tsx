import type { Metadata } from "next";
import "./theme.css";
import { DemoModalProvider } from "@/components/installation/DemoModalProvider";
import DemoModal from "@/components/installation/DemoModal";

export const metadata: Metadata = {
  title: "Le chantier commence au clic. Le profit se joue à la signature. — beTool Install",
  description:
    "Pilotez vos installations RGE de la qualification à la prime. Éliminez les erreurs de conformité et accélérez vos encaissements de 40%.",
};

export default function InstallationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DemoModalProvider>
      {children}
      <DemoModal />
    </DemoModalProvider>
  );
}
