import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DemoModalProvider } from "@/components/landing/DemoModalProvider";
import DemoModal from "@/components/landing/DemoModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Le CPF n'a jamais été aussi fluide. — betool",
  description:
    "Le CRM des organismes de formation. Gérez, signez et facturez en toute sérénité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body suppressHydrationWarning>
        <DemoModalProvider>
          {children}
          <DemoModal />
        </DemoModalProvider>
      </body>
    </html>
  );
}
