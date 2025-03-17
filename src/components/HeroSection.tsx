import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Imagem de fundo */}
      <Image
        src="/images/fundomf.jpg"
        alt="Imagem de fundo"
        layout="fill" // Ocupa toda a seção
        objectFit="cover" // Garante que a imagem cubra toda a tela
        objectPosition="center" // Centraliza a imagem
        priority // Carrega a imagem antes do resto da página
        className="absolute inset-0"
      />

      {/* Sobreposição escura */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Advogado Especialista em Direito Civil
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Defendendo seus direitos com ética e compromisso.
        </p>
        <a
          href="#contato"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
