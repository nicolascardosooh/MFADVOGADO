"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo usando Next.js Image */}
       
        
        {/* Nome do site */}
        <Link href="/" className="text-xl font-bold text-black">
          MF Advogado
        </Link>

        {/* Links de navegação */}
        <div className="space-x-6">
          <Link href="/sobre" className="hover:text-white">Sobre</Link>
          <Link href="/atuacao" className="hover:text-blue-700">Áreas de Atuação</Link>
          <Link href="/depoimentos" className="hover:text-blue-700">Depoimentos</Link>
          <Link href="/contato" className="hover:text-blue-700">Contato</Link>
        </div>
      </nav>
    </header>
  );
}
