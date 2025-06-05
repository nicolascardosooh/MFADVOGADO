"use client";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaClock
} from 'react-icons/fa';
import GoogleMaps from "./GoogleMaps";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

  return (
    <footer className="relative bg-gradient-to-b from-stone-900 via-stone-950 to-black text-white mt-50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo2.jpg"
                alt="MF LOGO"
                width={80}
                height={80}
                className="rounded-full"
              />
              <h3 className="text-2xl font-serif font-semibold text-amber-100">
              </h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Escritório de Direito, Atendimento Presencial Seg. à Sex. 8 as 18h e Atendimento Online 24h
            </p>
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/maicon.cardoso.796569" target='_blank' className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-700 transition-colors">
                <FaFacebookF className="text-white" />
              </a>
              <a href="https://www.instagram.com/advogado.maiconfabiano/" target='_blank' className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-700 transition-colors">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-amber-400">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#Home"
                  className="text-stone-400 hover:text-amber-300 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <Link
                  href={"#atuacao"}
                  className="text-stone-400 hover:text-amber-300 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>Àreas de Atuação</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"#casosespeciais"}
                  className="text-stone-400 hover:text-amber-300 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>Casos Especiais</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"#equipe"}
                  className="text-stone-400 hover:text-amber-300 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>Equipe</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"#contato"}
                  className="text-stone-400 hover:text-amber-300 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>Contato</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-amber-400">Contatos</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-stone-400 hover:text-green-400 transition-colors">
                <FaWhatsapp className="text-green-400" />
                <a href="https://wa.me/5551980483951" target="_blank" rel="noopener noreferrer">
                  +55 (51) 98048-3951
                </a>
              </li>
             
              <li className="flex items-center space-x-3 text-stone-400 hover:text-amber-300 transition-colors">
                <FaEnvelope className="text-amber-400" />
                <a href="mailto:maiconfabianoadv@gmail.com">maiconfabianoadv@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3 text-stone-400">
                <FaClock className="text-amber-400" />
                <span>24h</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-amber-400">Localização</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-stone-400">
                <FaMapMarkerAlt className="text-amber-400 mt-1 flex-shrink-0" />
                <address className="not-italic">
                R. dos Andradas, 1560 - Centro Histórico,<br />
                Porto Alegre - RS, 90020-010
                </address>
              </div>
              <div className="flex items-start space-x-3 text-stone-400">
                <FaMapMarkerAlt className="text-amber-400 mt-1 flex-shrink-0" />
                <address className="not-italic">
                  Rua Visconde do Itaboraí, 359,<br />
                   sala 2, Centro de General Câmara-RS, CEP 95820-000.
                </address>
              </div>
              <div className="h-48 rounded-md overflow-hidden">
                <GoogleMaps />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-400 text-sm">
              &copy; {new Date().getFullYear()} MF Advogado. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-stone-400">
              <p className="hover:text-amber-300 transition-colors">Política de Privacidade</p>
              <p className="hover:text-amber-300 transition-colors">Termos de Uso</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
