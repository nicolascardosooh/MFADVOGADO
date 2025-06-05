"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from 'react-icons/ai';
import Image from "next/image";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  navigationItems: Array<{
    id: string;
    label: string;
    ref: React.RefObject<HTMLDivElement | null>;
  }>;
}

export default function Navigation({ activeSection, scrollToSection, navigationItems }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-stone-900/95 backdrop-blur-md shadow-lg py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo2.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="rounded-full transition-transform duration-300 hover:scale-105"
                style={{ width: 'auto' }}
              />
              <span className={`text-xl font-sans font-semibold tracking-widest ${
                isScrolled ? "text-amber-100" : "text-white"
              }`}>
              </span>
            </div>
            <div className="flex space-x-10">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  style={{ fontSize: '16px', fontFamily: 'revert' }}
                  className={`relative tracking-wide font-light px-3 py-2 transition-colors duration-300 hover:cursor-pointer ${
                    isScrolled ? "text-amber-100" : "text-amber-100"
                  } hover:text-amber-400`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 text-center">
        <div className={`px-4 py-4 transition-all duration-300 ${
          isScrolled ? "bg-stone-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo2.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
              <span className={`text-lg font-serif ${isScrolled ? "text-amber-100" : "text-white"}`}>
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 rounded-lg ${isScrolled ? "text-amber-100" : "text-white"}`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-0 z-50"
            >
              <div className="flex flex-col h-full text-center bg-gradient-to-b from-stone-900 via-stone-950 to-black">
                <div className="flex justify-between items-center p-6 border-b border-stone-800">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/logo2.jpg"
                      alt="Logo"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <span className="text-xl font-serif text-amber-100"></span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-amber-100"
                  >
                    <AiOutlineClose className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col items-center space-y-8 p-10 mt-6">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.ref);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-lg tracking-wide ${
                        activeSection === item.id
                          ? "text-amber-400 border-b border-amber-400 pb-1"
                          : "text-amber-100"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
