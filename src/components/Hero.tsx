"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  scrollToContact: () => void;
}

export default function Hero({ scrollToContact }: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/images/fundoteste3.avif"
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 z-0 transform scale-105 hover:scale-100 transition-transform duration-[3s]"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-1"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="relative w-64 h-64 mx-auto mb-2">
            <Image
              src="/images/logoof.png"
              alt="Logo"
              layout="fill"
              className="rounded-full object-cover transform hover:scale-105 transition-all duration-300"
            />
            <div className="absolute -inset-2 blur-md shadow-2xl shadow-amber-600 rounded-full "></div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-amber-50"
          >
            Excelência em Advocacia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-amber-100/80 max-w-3xl mx-auto font-light"
          >
           Especialista em Direito Tributário e Imobiliário
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-amber-100/80 max-w-3xl mx-auto font-light"
          >
            Soluções jurídicas multidisciplinares e personalizadas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5551980483951"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-amber-800 text-amber-50 rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl border border-amber-700/30"
            >
              <span className="mr-2">Agende uma Consulta</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 bg-transparent text-amber-100 rounded-md hover:bg-stone-800/50 transition-colors duration-300 border border-amber-700/30"
            >
              Saiba Mais
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-amber-700/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-amber-600/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
