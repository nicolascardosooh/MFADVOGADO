"use client";
import { motion } from "framer-motion";
import { FaDna, FaLeaf, FaArrowRight, FaHeartbeat } from "react-icons/fa";
import { RiMedicineBottleLine } from "react-icons/ri";

const casos = [
  {
    id: "ame",
    title: "Medicamentos de alto custo",
    description: "Tratamentos e procedimentos urgentes, e medicamentos de alto custo para pacientes que precisam continuar ou iniciar o tratamento, através de ação judicial com pedido liminar, seja ela contra planos de saúde ou SUS.",
    icon: FaDna,
    color: "from-purple-600 to-indigo-600", // Cor do header
    stats: [
      { label: "Taxa de Sucesso", value: "98%" },
      { label: "Tempo Médio", value: "72h" },
      { label: "Casos Atendidos", value: "500+" }
    ]
  },
  {
    id: "canabidiol",
    title: "Canabidiol",
    description: "Substância extraída da canabis para tratamento de doenças psiquiátricas ou neurodegenerativas, como esclerose múltipla, esquizofrenia, mal de Parkinson, epilepsia ou ansiedade. Busque a autorização para tratamento na justiça.",
    icon: FaLeaf,
    color: "from-green-600 to-emerald-600",
    stats: [
      { label: "Autorizações", value: "1000+" },
      { label: "Aprovação", value: "95%" },
      { label: "Especialistas", value: "20+" }
    ]
  }
];

export default function CasosEspeciais() {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-stone-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #8B4513 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-amber-50 rounded-full mb-4">
            <FaHeartbeat className="w-6 h-6 text-amber-700" />
          </div>
          <h2 className="text-4xl font-serif font-semibold text-stone-900 mb-4">
            Casos Especiais e Urgentes
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto font-light">
            Atuamos com dedicação e celeridade em casos que demandam atenção especial 
            e urgência no processo judicial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {casos.map((caso, index) => (
            <motion.div
              key={caso.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                {/* Header */}
                <div className={`bg-gradient-to-r from-amber-700 to-amber-800 p-6 relative overflow-hidden`}>
                  <div className="absolute right-0 top-0 w-40 h-40 transform translate-x-20 -translate-y-20">
                    <div className="absolute inset-0 bg-white opacity-10 rounded-full" />
                  </div>
                  <div className="flex items-center space-x-4">
                    <caso.icon className="w-8 h-8 text-amber-50" />
                    <h3 className="text-xl font-serif text-amber-50">{caso.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <p className="text-amber-800 leading-relaxed text-sm">
                    {caso.description}
                  </p>


                  {/* CTA */}
                  <div className="pt-2">
                    <a
                      href="https://api.whatsapp.com/send?phone=5551980483951"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-amber-800 text-amber-50 rounded-md hover:bg-amber-700 transition-colors duration-300 group border border-amber-700/30"
                    >
                      <span className="font-light">Consulta Jurídica</span>
                      <FaArrowRight className="ml-2 w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-20 bg-white p-10 rounded-lg shadow-md border border-stone-100"
        >
          <div className="inline-flex items-center justify-center p-3 bg-amber-50 rounded-full mb-6">
            <RiMedicineBottleLine className="w-7 h-7 text-amber-700" />
          </div>
          <h3 className="text-2xl font-serif text-stone-900 mb-4">
            Necessita de assistência em outros casos médicos?
          </h3>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto text-sm">
            Nossa equipe de advogados especializados está preparada para auxiliar em diversos casos 
            que envolvem direito à saúde e acesso a tratamentos médicos.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5551980483951"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-amber-800 text-amber-50 rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-md hover:shadow-lg border border-amber-700/30"
          >
            <span className="mr-2">Agende uma Consulta</span>
            <FaArrowRight className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
