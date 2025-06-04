"use client";
import { motion } from "framer-motion";
import {
    FaBalanceScale,
    FaBriefcase,
    FaGavel,
    FaUsers,
    FaBuilding,
    FaCheck
} from "react-icons/fa";

const areasAtuacao = [
    {
        id: "trabalhista",
        icon: FaBriefcase,
        title: "Direito Trabalhista",
        color: "from-amber-700 to-amber-800",
        services: [
            "Reconhecimento de Vínculo",
            "Categorias Especiais",
            "Salários e benefícios",
            "Adicionais",
            "Estabilidade",
            "Acidente de trabalho",
            "Assédio",
            "Demissão irregular"
        ]
    },
    {
        id: "civil",
        icon: FaBalanceScale,
        title: "Direito Cível",
        color: "from-amber-700 to-amber-800",
        services: [
            "Ação de medicamentos de alto custo e doenças raras",
            "Ação Indenizatória",
            "Revisional",
            "Renegociação de dívidas",
            "Execução",
            "Busca e apreensão",
            "Contratos"
        ]
    },
    {
        id: "penal",
        icon: FaGavel,
        title: "Direito Penal",
        color: "from-amber-700 to-amber-800",
        services: [
            "Prisão em flagrante",
            "Audiência de custódia",
            "Liberdade Provisória",
            "Habeas Corpus",
            "Revogação de prisão"
        ]
    },
    {
        id: "familia",
        icon: FaUsers,
        title: "Direito de Família",
        color: "from-amber-700 to-amber-800",
        services: [
            "Casamento",
            "Divórcio",
            "Alimentos",
            "Guarda",
            "Paternidade",
            "Adoção",
            "Filiação Socioafetiva",
            "Alienação Parental",
            "Interdição e curatela",
            "Inventário",
            "Testamento"
        ]
    },
    {
        id: "empresarial",
        icon: FaBuilding,
        title: "Direito Empresarial",
        color: "from-amber-700 to-amber-800",
        services: [
            "Contratos",
            "Prevenção",
            "Diligências"
        ]
    }
];

export default function AreasAtuacao() {
    return (
        <section className="py-24 bg-gradient-to-b from-stone-50 to-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif font-semibold text-stone-900 mb-4">
                        Áreas de Atuação
                    </h2>
                    <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
                    <p className="text-xl text-stone-700 max-w-3xl mx-auto font-light">
                        Oferecemos assessoria jurídica especializada em diversas áreas do direito,
                        com profissionais experientes e comprometidos com a excelência.
                    </p>
                </motion.div>

                <div className="grid gap-12 md:gap-16 lg:gap-20">
                    {areasAtuacao.map((area, index) => (
                        <motion.div
                            key={area.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className={`bg-gradient-to-r ${area.color} p-6`}>
                                    <div className="flex items-center space-x-4">
                                        <area.icon className="w-8 h-8 text-amber-50" />
                                        <h3 className="text-2xl font-serif text-amber-50">
                                            {area.title}
                                        </h3>
                                    </div>
                                </div>
                                
                                <div className="p-8">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                                        {area.services.map((service, serviceIndex) => (
                                            <motion.div
                                                key={serviceIndex}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: serviceIndex * 0.05, duration: 0.3 }}
                                                className="flex items-start space-x-3 group"
                                            >
                                                <div className={`mt-1 p-1 rounded-full bg-gradient-to-r ${area.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                    <FaCheck className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-stone-700 text-sm">
                                                    {service}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mt-16"
                >
                    <a
                        href="https://api.whatsapp.com/send?phone=5551980483951"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 bg-amber-800 text-amber-50 rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-md hover:shadow-lg border border-amber-700/30"
                    >
                        <span className="mr-2">Consulta Jurídica</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
