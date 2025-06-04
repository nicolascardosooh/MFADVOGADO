"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaBalanceScale, FaGavel } from "react-icons/fa";
import Image from "next/image";

const advogados = [
  {
    id: 1,
    nome: "Dr. Maicon Fabiano Cardoso",
    oab: "OAB/RS 121.195",
    foto: "/images/pai.avif",
    especialidades: ["Direito Civil", "Direito Trabalhista", "Direito Penal"],
    descricao: "Advogado com vasta experiência em causas complexas e casos de alta relevância.",
    linkedin: "#",
    email: "maiconfabianoadv@gmail.com",
    whatsapp: "5551980483951"
  },
  {
    id: 2,
    nome: "Dr. Rodrigo S. de Souza",
    oab: "OAB/RS 125.182",
    foto: "/images/rodrigo.avif",
    especialidades: ["Direito Empresarial", "Direito de Família", "Direito Civil"],
    descricao: "Especialista em direito empresarial e soluções jurídicas inovadoras.",
    linkedin: "#",
    email: "email@exemplo.com",
    whatsapp: "5551992624198"
  }
];

export default function   Equipe() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1e4493 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
            <FaBalanceScale className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais altamente qualificados e comprometidos com a excelência 
            em serviços jurídicos.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {advogados.map((advogado, index) => (
            <motion.div
              key={advogado.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image Section */}
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={advogado.foto}
                    alt={advogado.nome}
                    fill
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{advogado.nome}</h3>
                    <p className="text-blue-300 font-medium">{advogado.oab}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-6">
                  {/* Especialidades */}
                  <div className="flex flex-wrap gap-2">
                    {advogado.especialidades.map((esp, espIndex) => (
                      <span
                        key={espIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {esp}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {advogado.descricao}
                  </p>

                  {/* Contact Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={`https://wa.me/${advogado.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-300"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:${advogado.email}`}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300"
                    >
                      E-mail
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={advogado.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-300 group"
                  >
                    <FaLinkedin className="w-5 h-5 text-blue-600 group-hover:text-white" />
                  </a>
                  <a
                    href={`mailto:${advogado.email}`}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-300 group"
                  >
                    <FaEnvelope className="w-5 h-5 text-blue-600 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-6">
            <FaGavel className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Precisa de Assessoria Jurídica?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para auxiliar você em suas questões jurídicas 
            com profissionalismo e dedicação.
          </p>
          <a
            href="https://wa.me/5551992624198"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Fale com um Advogado
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
