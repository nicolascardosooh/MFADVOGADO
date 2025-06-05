"use client";
import { motion } from "framer-motion";
import { FaEnvelope,  FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
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
    whatsapp: "5551980483951",
    instagram: "https://www.instagram.com/advogado.maiconfabiano/",
    facebook: "https://www.facebook.com/maicon.cardoso.796569"
  },
  {
    id: 2,
    nome: "Dr. Rodrigo S. de Souza",
    oab: "OAB/RS 125.182",
    foto: "/images/rodrigo.avif",
    especialidades: ["Direito Empresarial", "Direito de Família", "Direito Civil"],
    descricao: "Especialista em direito empresarial e soluções jurídicas inovadoras.",
    linkedin: "#",
    email: "SilvaDireitoRS@gmail.com",
    whatsapp: "5551980483951",
    instagram: ""
  }
];

export default function Equipe() {
  return (
    <section className=" bg-gradient-to-b from-stone-50 to-stone-100 relative overflow-hidden">
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
          <h2 className="text-4xl font-serif font-semibold text-stone-900 mb-4">
            Nossa Equipe
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto font-light">
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
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Image Section */}
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={advogado.foto}
                    alt={advogado.nome}
                    fill
                    quality={90}
                    placeholder="blur"
                    blurDataURL={advogado.foto}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-semibold mb-1">{advogado.nome}</h3>
                    <p className="text-amber-300 font-medium">{advogado.oab}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Especialidades */}
               

                  {/* Contact Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={`https://wa.me/${advogado.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
                    >
                      <FaWhatsapp className="mr-2" /> WhatsApp
                    </a>
                    <a
                      href={`mailto:${advogado.email}`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-amber-800 text-amber-50 rounded-md hover:bg-amber-700 transition-colors duration-300"
                    >
                      <FaEnvelope className="mr-2" /> E-mail
                    </a>
                  </div>
                </div>

                {advogado.instagram && (
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={advogado.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-amber-700 transition-colors duration-300 group"
                    >
                      <FaInstagram className="w-5 h-5 text-amber-800 group-hover:text-white" />
                    </a>
                    {advogado.facebook && (
                      <a
                        href={advogado.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-amber-700 transition-colors duration-300 group"
                      >
                        <FaFacebook className="w-5 h-5 text-amber-800 group-hover:text-white" />
                      </a>
                    )}
                  </div>
                )}
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
          <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-4">
            Precisa de Assessoria Jurídica?
          </h3>
          <p className="text-stone-700 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para auxiliar você em suas questões jurídicas
            com profissionalismo e dedicação.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5551980483951"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-amber-800 text-amber-50 rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-md hover:shadow-lg border border-amber-700/30"
          >
            <span className="mr-2">Fale com um Advogado</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
