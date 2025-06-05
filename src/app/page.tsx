"use client";
import { useState, useEffect, useRef, RefObject } from "react";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AreasAtuacao from "@/components/AreasAtuacao";
import CasosEspeciais from '@/components/CasosEspeciais';
import Equipe from "@/components/Equipe";
import Footer from "@/components/Footer";

export default function Home() {
  const atuacaoRef = useRef<HTMLDivElement | null>(null);
  const equipeRef = useRef<HTMLDivElement | null>(null);
  const contatoRef = useRef<HTMLDivElement | null>(null);
  const casosespeciaisRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  const navigationItems = [
    { id: "atuacao", label: "Áreas de Atuação", ref: atuacaoRef },
    { id: "casosespeciais", label: "Casos Especiais", ref: casosespeciaisRef },
    { id: "equipe", label: "Equipe", ref: equipeRef },
    { id: "contato", label: "Contato", ref: contatoRef },
  ];

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "atuacao", ref: atuacaoRef },
        { id: "casosespeciais", ref: casosespeciaisRef },
        { id: "equipe", ref: equipeRef },
        { id: "contato", ref: contatoRef },
      ];

      let current = "";

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            current = section.id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicializa a seção ativa

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative bg-gray-50">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navigationItems={navigationItems}
      />

      {/* Seções do site */}
      <div id="Home" className="min-h-screen bg-gray-100">
        <Hero scrollToContact={() => scrollToSection(contatoRef)} />
      </div>

      <div ref={atuacaoRef} id="atuacao" className=" bg-gray-50">
        <AreasAtuacao />
      </div>

      <div ref={casosespeciaisRef} id="casosespeciais" className="min-h-screen bg-white">
        <CasosEspeciais />
      </div>

      <div ref={equipeRef} id="equipe" className="min-h-screen bg-gray-100">
        <Equipe />
      </div>

      <div ref={contatoRef} id="contato" className=" bg-white">
        <ContactForm />
      </div>

      {/*
      <div ref={contatoRef} id="contato" className=" bg-white">
          <ArtigosDireito />
        </div>
        */}

      <div className="">
        <Footer />
      </div>

    </main>
  );
}
