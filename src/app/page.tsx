"use client";
import { useState, useEffect, useRef } from "react";
import GoogleMaps from "@/components/GoogleMaps";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { AiOutlineClose } from 'react-icons/ai'; // Importando o ícone de "X"
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const sobreRef = useRef<HTMLDivElement>(null);
  const atuacaoRef = useRef<HTMLDivElement>(null);
  const depoimentosRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "sobre", ref: sobreRef },
        { id: "atuacao", ref: atuacaoRef },
        { id: "depoimentos", ref: depoimentosRef },
        { id: "contato", ref: contatoRef },
      ];

      for (const section of sections) {
        if (
          section.ref.current &&
          section.ref.current.getBoundingClientRect().top <= 200
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref, { once: true });

  return (
    <div className="font-sans">
      {/* Navbar */}

      <section className="relative w-full h-screen flex items-center justify-center text-white">
        {/* Imagem de fundo */}
        <Image
          src="/images/fundomf.jpg"
          alt="Imagem de fundo"
          layout="fill" // Ocupa toda a seção
          objectFit="cover" // Garante que a imagem cubra toda a tela
          priority // Carrega a imagem antes do resto da página
          className="absolute inset-0 z-0" // Imagem com z-index menor
        />

        {/* Menu Desktop */}
        <motion.div
          className="hidden md:flex fixed top-0 left-0 w-full py-4 px-10 justify-between items-center z-10 bg-slate-950"
          initial={{ x: '-100%', opacity: 0 }} // Inicia fora da tela e com opacidade 0
          animate={{ x: 0, opacity: 1 }}      // Anima para a posição normal com opacidade 1
          transition={{ type: 'spring', stiffness: 40, delay: 0.1 }} // Configura a transição
        >

          <nav className="hidden md:flex fixed top-0 left-0 w-full py-4 px-10 justify-between items-center z-10 bg-slate-950">
            {/* Logo à esquerda */}

            <div className="flex items-center">
              MF Advogado
            </div>

            {/* Itens de navegação à direita */}
            <div className="flex space-x-10">
              {[
                { id: "atuacao", label: "Áreas de Atuação", ref: atuacaoRef },
                { id: "sobre", label: "Equipe", ref: sobreRef },
                { id: "depoimentos", label: "Depoimentos", ref: depoimentosRef },
                { id: "contato", label: "Contato", ref: contatoRef },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className={`text-white font-medium hover:text-blue-300 cursor-pointer ${activeSection === item.id ? "font-bold text-blue-300" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

        </motion.div>


        {/* Menu Mobile */}
        <nav className="md:hidden fixed top-0 left-0 right-0 w-full py-4 px-6 z-10 bg-transparent">
          <div className="flex justify-between items-center">
            {/* Logo à esquerda */}

            {/* Ícone de Menu Hambúrguer à direita */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Menu Mobile Condicional */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 w-full bg-gray-50 p-6 space-y-4 shadow-md z-50">
              {/* Botão de fechar */}
              <div className="flex justify-center">
                <button
                  onClick={() => setIsMobileMenuOpen(false)} // Função para fechar o menu
                  className="text-2xl text-red-600 hover:text-red-800"
                >
                  <AiOutlineClose />
                </button>
              </div>

              {[{ id: "atuacao", label: "Áreas de Atuação", ref: atuacaoRef },
              { id: "sobre", label: "Equipe", ref: sobreRef },
              { id: "contato", label: "Contato", ref: contatoRef }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.ref);
                    setIsMobileMenuOpen(false); // Fecha o menu ao clicar no item
                  }}
                  className="w-full text-blue-700 font-medium"
                >
                  {item.label}
                </button>

              ))}
            </div>

          )}
        </nav>

        {/* Sobreposição escura */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Conteúdo */}
        <div className="relative">

          {/* Conteúdo com animação */}
          <motion.div
            className="relative  text-center px-6"
            initial={{ x: '-100%', opacity: 0 }} // Inicia fora da tela e com opacidade 0
            animate={{ x: 0, opacity: 1 }}      // Anima para a posição normal com opacidade 1
            transition={{ type: 'spring', stiffness: 60, delay: 0.1 }} // Configura a transição
          >


            <div className="flex justify-center items-center">
              <Image
                src="/images/logoof.png"  // Substitua pelo caminho da sua logo dentro da pasta public
                alt="Logo"
                width={230}       // Largura da imagem (ajustável)
                height={230}      // Altura da imagem (ajustável)
                className="rounded-full object-cover"  // Borda arredondada e adaptação do tamanho
              />
            </div>

          </motion.div>
          <motion.div
            className="relative text-center px-6"
            initial={{ x: '-100%', opacity: 0 }} // Inicia fora da tela e com opacidade 0
            animate={{ x: 0, opacity: 1 }}      // Anima para a posição normal com opacidade 1
            transition={{ type: 'spring', stiffness: 60, delay: 0.3 }} // Configura a transição
          >

          </motion.div>
          <motion.div
            className="relative text-center px-6"
            initial={{ x: '-100%', opacity: 0 }} // Inicia fora da tela e com opacidade 0
            animate={{ x: 0, opacity: 1 }}      // Anima para a posição normal com opacidade 1
            transition={{ type: 'spring', stiffness: 60, delay: 0.5 }} // Configura a transição
          >
            <a
              onClick={() => scrollToSection(contatoRef)} // Usando a função scrollToSection
              className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition cursor-pointer"
            >
              Entre em Contato
            </a>
            

          </motion.div>
        </div>
      </section>


      {/* Áreas de Atuação */}
      <div className=" bg-gray-100">
        <motion.div
          ref={ref} // Agora a referência está diretamente no motion.div
          className=" px-4 bg-gray-50 text-black"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ type: "spring", stiffness: 30, delay: 0.2 }}
        >
          <section ref={atuacaoRef} id="atuacao" className="py-16 px-4 bg-gray-50 text-black">
            <h2 className="text-center text-3xl font-bold mb-8">Áreas de Atuação</h2>
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                {/* Direito Trabalhista */}
                <div className="card p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-center text-orange-500">Direito Trabalhista</h3>
                  <ul className="list-disc pl-5 text-center">
                    <li>Reconhecimento de Vínculo</li>
                    <li>Categorias Especiais</li>
                    <li>Salários e benefícios</li>
                    <li>Adicionais</li>
                    <li>Estabilidade</li>
                    <li>Acidente de trabalho</li>
                    <li>Assédio</li>
                    <li>Demissão irregular</li>
                  </ul>
                </div>

                {/* Direito Cível */}
                <div className="card p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-center text-orange-500">Direito Cível</h3>
                  <ul className="list-disc pl-5 text-center">
                    <li>Ação de medicamentos de alto custo e doenças raras</li>
                    <li>Ação Indenizatória</li>
                    <li>Revisional</li>
                    <li>Renegociação de dívidas</li>
                    <li>Execução</li>
                    <li>Busca e apreensão</li>
                    <li>Contratos</li>
                  </ul>
                </div>

                {/* Direito Penal */}
                <div className="card p-4  rounded-lg shadow-lg ">
                  <h3 className="text-xl font-bold mb-2 text-center text-orange-500">Direito Penal</h3>
                  <ul className="list-disc pl-5 text-center">
                    <li>Prisão em flagrante</li>
                    <li>Audiência de custódia</li>
                    <li>Liberdade Provisória</li>
                    <li>Habeas Corpus</li>
                    <li>Revogação de prisão</li>
                  </ul>
                </div>

                {/* Direito de Família */}
                <div className="card p-4  rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-center text-orange-500">Direito de Família</h3>
                  <ul className="list-disc pl-5 text-center">
                    <li>Casamento</li>
                    <li>Divórcio</li>
                    <li>Alimentos</li>
                    <li>Guarda</li>
                    <li>Paternidade</li>
                    <li>Adoção</li>
                    <li>Filiação Socioafetiva</li>
                    <li>Alienação Parental</li>
                    <li>Interdição e curatela</li>
                    <li>Inventário</li>
                    <li>Testamento</li>
                  </ul>
                </div>

                {/* Direito Empresarial */}
                <div className="card p-4  rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-center text-orange-500">Direito Empresarial</h3>
                  <ul className="list-disc pl-5 text-center">
                    <li>Contratos</li>
                    <li>Prevenção</li>
                    <li>Diligências</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>


        </motion.div>

      </div>

      <div className="bg-gray-100">
        <motion.div
          ref={ref2} // Agora a referência está diretamente no motion.div
          className=" px-4 bg-gray-50 text-black"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ type: "spring", stiffness: 30, delay: 0.2 }}
        >
          {/* Casos Especiais e Urgentes */}
          <section id="casos-especiais" className="py-16 px-4 bg-gray-100 text-black">
            <h2 className="text-center text-3xl font-bold mb-8">Casos Especiais e Urgentes</h2>
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                {/* Card AME */}
                <div className="card p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-center text-orange-500">AME - Atrofia Muscular Espinhal</h3>
                  <p className="text-center">
                    A saúde é um direito constitucional. A atrofia muscular espinhal (AME) é uma doença genética rara com custo de tratamento elevado e urgente. Busque o tratamento imediato na justiça.
                  </p>
                  <div className="text-center mt-4">
                    <a href="https://wa.me/5551980483951" className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer">Fale Conosco &gt;&gt;</a>
                  </div>
                </div>

                {/* Card Canabidiol */}
                <div className="card p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-center text-orange-500">Canabidiol</h3>
                  <p className="text-center">
                    Substância extraída da canabis para tratamento de doenças psiquiátricas ou neurodegenerativas, como esclerose múltipla, esquizofrenia, mal de Parkinson, epilepsia ou ansiedade. Busque a autorização para tratamento na justiça.
                  </p>
                  <div className="text-center mt-4">
                    <a href="https://wa.me/5551980483951" className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer">Fale Conosco &gt;&gt;</a>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </motion.div>

      </div>


      {/* Sobre */}
      <section ref={sobreRef} className="py-16 px-6 container mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-950 text-center">Equipe</h2>
        <p className="text-gray-700 text-center mt-4 max-w-2xl mx-auto">
          Com anos de experiência, oferecemos serviços jurídicos personalizados e de alta qualidade.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Advogado 1 */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
              <Image
                src="/images/pai.avif" // Altere para o caminho da imagem do advogado 1
                alt="Advogado 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-4 font-semibold text-lg text-gray-800">Dr. Maicon Fabiano Cardoso</p>
            <p className="text-gray-500">OAB/RS 121.195</p>
          </div>

          {/* Advogado 2 */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
              <Image
                src="/images/rodrigo.avif" // Altere para o caminho da imagem do advogado 2
                alt="Advogado 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-4 font-semibold text-lg text-gray-800">Dr. Rodrigo S. de Souza</p>
            <p className="text-gray-500">OAB/RS 125.182</p>
          </div>

        </div>
      </section>

      {/* vazia 
      <section ref={depoimentosRef} className="py-16 px-6 container mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-950 text-center">titulo vazio </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">

        </div>
      </section>
      */}

      {/* Contato */}
      <section ref={contatoRef} className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-950 text-center">Contato</h2>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Nosso Endereço</h3>
            <p className="text-gray-600 mt-2">Rua dos Andradas, 1560, Centro Historico, Porto Alegre RS, 90020-000, Brasil</p>
            <p className="text-gray-600 mt-2">Telefone: 55 (51) 98048-3951</p>
            <p className="text-gray-600 mt-2">Email: maiconfabianoadv@gmail.com</p>
          </div>
        </div>

        {/* Google Maps */}
        <GoogleMaps />

      </section>
      {/* Footer */}
      <a
        href="https://wa.me/5551980483951" // Troque pelo seu número
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <Image
          src="/images/logowpp.png" // Caminho da imagem
          alt="WhatsApp"
          width={60} // Largura da imagem
          height={60} // Altura da imagem
        />
      </a>

    </div>
  );
}
