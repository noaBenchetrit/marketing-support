import type { Metadata } from "next";
import "./theme.css";
import LeadEmailProvider from "@/components/formation/LeadEmailProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://formation-expert.com"),
  title: "beTool — Le logiciel des Organismes de Formation et CFA",
  description:
    "Divisez par 3 le temps de gestion de vos dossiers et automatisez votre conformité Qualiopi. Émargements eIDAS, plannings, BPF, IA anti-rejet : tout-en-un.",
  alternates: { canonical: "/" },
};

export default function FormationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LeadEmailProvider>{children}</LeadEmailProvider>;
}
