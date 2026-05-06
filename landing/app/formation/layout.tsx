import type { Metadata } from "next";
import "./theme.css";
import { DemoModalProvider } from "@/components/formation/DemoModalProvider";
import DemoModal from "@/components/formation/DemoModal";

export const metadata: Metadata = {
  title: "Le CPF n'a jamais été aussi fluide. — beTool",
  description:
    "Le CRM des organismes de formation. Gérez, signez et facturez en toute sérénité.",
};

export default function FormationLayout({
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
