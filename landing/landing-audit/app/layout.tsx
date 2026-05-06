import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { DemoModalProvider } from "@/components/landing/DemoModalProvider";
import DemoModal from "@/components/landing/DemoModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "L'audit est une science. beTool est votre laboratoire. — beTool Audit",
  description:
    "Sécurisez vos missions de la collecte à la signature. Centralisez vos preuves, automatisez vos rapports et laissez l'IA booster votre vigilance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <DemoModalProvider>
          {children}
          <DemoModal />
        </DemoModalProvider>
      </body>
    </html>
  );
}
