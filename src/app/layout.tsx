import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MF Advogado",
  description: "Advocacia especializada em diversas áreas do direito.",
  icons: {
    icon: "images/logoof.png",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
