"use client";
import { motion } from "framer-motion";
import { FaBalanceScale, FaArrowRight } from "react-icons/fa";
import {
    FaUserShield,
    FaGavel,
    FaHeartbeat,
    FaBriefcase,
    FaHandHoldingUsd,
    FaFileInvoiceDollar,
    FaRegSadTear,
    FaPills,
    FaBusinessTime,
    FaHome,
  } from "react-icons/fa";

const artigos = [
  {
    id: "direitos-trabalhistas",
    title: "Quais são meus direitos como trabalhador CLT?",
    description:
      "Como trabalhador com carteira assinada, você tem direito a férias remuneradas, 13º salário, FGTS, horas extras, adicional noturno, entre outros benefícios previstos na Consolidação das Leis do Trabalho (CLT).",
    icon: FaBalanceScale,
    color: "from-yellow-600 to-orange-600",
    stats: [
      { label: "Consultas Resolvidas", value: "1.200+" },
      { label: "Satisfação", value: "97%" },
      { label: "Casos Diários", value: "15+" },
    ],
  },
  {
    id: "direito-consumidor",
    title: "Comprei um produto com defeito. E agora?",
    description:
      "Você tem direito à troca ou devolução em até 30 dias para produtos não duráveis e 90 dias para duráveis. O fornecedor tem até 30 dias para resolver o problema. Se não resolver, pode exigir reembolso ou substituição.",
    icon: FaGavel,
    color: "from-red-600 to-pink-600",
    stats: [
      { label: "Resoluções Rápidas", value: "800+" },
      { label: "Índice de Êxito", value: "92%" },
      { label: "Especialistas", value: "10+" },
    ],
  },

  {
    id: "direito-familia",
    title: "Como funciona a pensão alimentícia?",
    description:
      "A pensão é um valor fixado judicialmente ou por acordo entre as partes, geralmente com base em percentual da renda do responsável. O não pagamento pode levar à cobrança judicial e até prisão civil.",
    icon: FaUserShield,
    color: "from-indigo-600 to-blue-600",
    stats: [
      { label: "Acordos Concluídos", value: "500+" },
      { label: "Efetividade", value: "94%" },
      { label: "Prazo Médio", value: "7 dias" },
    ],
  },
  {
    id: "aposentadoria",
    title: "Tenho direito à aposentadoria por invalidez?",
    description:
      "Mesmo sem contribuições recentes, é possível se aposentar por invalidez se houver laudo médico que comprove incapacidade e você ainda estiver como segurado do INSS.",
    icon: FaBriefcase,
    color: "from-emerald-600 to-green-600",
    stats: [
      { label: "Benefícios Concedidos", value: "1.200+" },
      { label: "Casos Vencidos", value: "88%" },
      { label: "Prazo Médio", value: "45 dias" },
    ],
  },
  {
    id: "pensao-morte",
    title: "Tenho direito à pensão por morte?",
    description:
      "Sim, desde que o falecido fosse segurado do INSS e você seja dependente. A duração do benefício varia conforme a idade e tempo de contribuição do segurado.",
    icon: FaGavel,
    color: "from-rose-600 to-pink-600",
    stats: [
      { label: "Famílias Atendidas", value: "800+" },
      { label: "Reconhecimentos Judiciais", value: "90%" },
      { label: "Prazo Médio", value: "30 dias" },
    ],
  },
  {
    id: "fgts",
    title: "Posso sacar meu FGTS mesmo estando desempregado?",
    description:
      "Sim. Se estiver há 3 anos fora do regime do FGTS ou em casos específicos como demissão sem justa causa, doenças graves ou compra de imóvel.",
    icon: FaHandHoldingUsd,
    color: "from-yellow-500 to-orange-600",
    stats: [
      { label: "Liberações Realizadas", value: "2.000+" },
      { label: "Aprovações em Juízo", value: "96%" },
      { label: "Prazo Médio", value: "20 dias" },
    ],
  },
  {
    id: "nome-negativado",
    title: "Meu nome foi negativado indevidamente. O que fazer?",
    description:
      "Você pode exigir a imediata retirada do seu nome do cadastro de inadimplentes e ainda receber indenização por danos morais.",
    icon: FaRegSadTear,
    color: "from-red-600 to-pink-600",
    stats: [
      { label: "Casos Resolvidos", value: "1.000+" },
      { label: "Indenizações Ganhas", value: "85%" },
      { label: "Prazo Médio", value: "15 dias" },
    ],
  },
  {
    id: "medicamento-negado",
    title: "Plano de saúde negou medicamento. Posso recorrer?",
    description:
      "Sim. Recusar medicamento necessário prescrito por médico pode ser considerado ilegal. A Justiça costuma garantir o direito com rapidez.",
    icon: FaPills,
    color: "from-purple-600 to-fuchsia-600",
    stats: [
      { label: "Liminares Concedidas", value: "600+" },
      { label: "Decisões Favoráveis", value: "92%" },
      { label: "Prazo Médio", value: "3 dias" },
    ],
  },
  {
    id: "auxilio-doenca",
    title: "Tenho direito ao auxílio-doença do INSS?",
    description:
      "Sim, desde que comprove incapacidade temporária por laudo médico e tenha contribuído por no mínimo 12 meses (salvo doenças isentas de carência).",
    icon: FaHeartbeat,
    color: "from-sky-600 to-cyan-600",
    stats: [
      { label: "Auxílios Concedidos", value: "950+" },
      { label: "Casos Vitoriosos", value: "89%" },
      { label: "Prazo Médio", value: "35 dias" },
    ],
  },
  {
    id: "horas-extras",
    title: "Não recebi minhas horas extras. Posso cobrar?",
    description:
      "Sim. Você tem até 2 anos após o fim do contrato para requerer judicialmente os valores de horas extras não pagas.",
    icon: FaBusinessTime,
    color: "from-orange-500 to-red-500",
    stats: [
      { label: "Ações Trabalhistas", value: "1.500+" },
      { label: "Vitórias", value: "91%" },
      { label: "Prazo Médio", value: "60 dias" },
    ],
  },
  {
    id: "despejo",
    title: "Como despejar um inquilino inadimplente?",
    description:
      "É necessário ingressar com ação de despejo por falta de pagamento. Em alguns casos, é possível conseguir liminar para desocupação rápida.",
    icon: FaHome,
    color: "from-teal-600 to-green-500",
    stats: [
      { label: "Despejos Efetivados", value: "300+" },
      { label: "Decisões em Liminar", value: "78%" },
      { label: "Prazo Médio", value: "20 dias" },
    ],
  },
  {
    id: "produto-defeituoso",
    title: "A loja se recusa a trocar um produto com defeito. E agora?",
    description:
      "Você tem até 90 dias para exigir a troca ou devolução de produtos duráveis com defeito. Pode acionar o Procon ou entrar na Justiça.",
    icon: FaFileInvoiceDollar,
    color: "from-lime-500 to-emerald-500",
    stats: [
      { label: "Reclamações Atendidas", value: "1.100+" },
      { label: "Ações Favoráveis", value: "95%" },
      { label: "Prazo Médio", value: "10 dias" },
    ],
  },
];

export default function ArtigosDireito() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-yellow-50 rounded-full mb-4">
            <FaBalanceScale className="w-6 h-6 text-yellow-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Artigos e Dúvidas Jurídicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclareça dúvidas comuns e conheça seus direitos nas mais diversas áreas do Direito.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {artigos.map((artigo, index) => (
            <motion.div
              key={artigo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${artigo.color} p-6 relative overflow-hidden`}>
                  <div className="absolute right-0 top-0 w-40 h-40 transform translate-x-20 -translate-y-20">
                    <div className="absolute inset-0 bg-white opacity-10 rounded-full" />
                  </div>
                  <div className="flex items-center space-x-4">
                    <artigo.icon className="w-10 h-10 text-white" />
                    <h3 className="text-2xl font-bold text-white">{artigo.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {artigo.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {artigo.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${artigo.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <a
                      href="https://api.whatsapp.com/send?phone=5551980483951"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${artigo.color} text-white rounded-full hover:opacity-90 transition-opacity duration-300 group`}
                    >
                      <span>Tirar Dúvida</span>
                      <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
