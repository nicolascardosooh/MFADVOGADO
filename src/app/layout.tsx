import type { Metadata } from "next";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import Script from 'next/script'

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
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></Script>
        <a
          href="https://wa.me/5551980483951" // substitua pelo seu número com DDI + DDD
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
        >
          <FaWhatsapp size={28} />
        </a>
      </body>
    </html>
  );
}
