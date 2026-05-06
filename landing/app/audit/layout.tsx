import type { Metadata } from "next";
import "./theme.css";
import { DemoModalProvider } from "@/components/audit/DemoModalProvider";
import DemoModal from "@/components/audit/DemoModal";

export const metadata: Metadata = {
  title: "L'audit est une science. beTool est votre laboratoire. — beTool Audit",
  description:
    "Sécurisez vos missions de la collecte à la signature. Centralisez vos preuves, automatisez vos rapports et laissez l'IA booster votre vigilance.",
};

export default function AuditLayout({
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
