import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://betool-crm.fr"),
  title: "beTool IA — Confiez les tâches répétitives à des agents IA autonomes",
  description:
    "Arrêtez de payer des salariés pour faire ce qu'une IA peut faire. Déployez des agents IA métiers : réduction des coûts, automatisation et productivité décuplée. Audit de faisabilité offert (30 min).",
  alternates: { canonical: "/" },
};

export default function IaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
