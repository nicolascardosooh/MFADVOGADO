"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';

interface StatusMessage {
  type: 'success' | 'error';
  message: string;
}

const ContactForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [telefone, setTelefone] = useState('');
  const [status, setStatus] = useState<StatusMessage | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, mensagem, telefone }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.  Em caso de urgência, envie mensagem para o WhatsApp (51) 9-80483951 .'
         
        });
        setNome('');
        setEmail('');
        setMensagem('');
        setTelefone('');
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Erro ao enviar a mensagem. Por favor, tente novamente.'
        });
      }
    } catch (error) {
      console.log(error);
      
      setStatus({
        type: 'error',
        message: 'Erro ao enviar a mensagem. Por favor, tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white rounded-lg shadow-md p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-2">
            Entre em Contato
          </h3>
          <div className="w-16 h-1 bg-amber-700 mx-auto"></div>
        </div>

        {/* Nome Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaUser className="h-5 w-5 text-amber-700" />
          </div>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="text-stone-800 w-full pl-10 pr-4 py-3 border border-stone-200 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-amber-700" />
          </div>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-stone-800 w-full pl-10 pr-4 py-3 border border-stone-200 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>

        {/* Telefone Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaPhone className="h-5 w-5 text-amber-700" />
          </div>
          <input
            type="tel"
            placeholder="Seu telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="text-stone-800 w-full pl-10 pr-4 py-3 border border-stone-200 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>

        {/* Mensagem Textarea */}
        <div className="relative">
          <textarea
            placeholder="Sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="text-stone-800 w-full p-4 border border-stone-200 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 min-h-[120px] resize-y"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-md text-amber-50 font-medium flex items-center justify-center space-x-2 
            ${isSubmitting 
              ? 'bg-stone-400 cursor-not-allowed' 
              : 'bg-amber-800 hover:bg-amber-700'} 
            transition-colors duration-300 shadow-md hover:shadow-lg border border-amber-700/30`}
          whileTap={{ scale: 0.95 }}
        >
          <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
          <FaPaperPlane className={`w-4 h-4 ml-2 ${isSubmitting ? 'animate-pulse' : ''}`} />
        </motion.button>

        {/* Status Message */}
        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`rounded-md p-4 flex items-center space-x-2 
                ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}
            >
              {status.type === 'success' ? (
                <FaCheck className="w-5 h-5 text-green-500" />
              ) : (
                <FaTimes className="w-5 h-5 text-red-500" />
              )}
              <p className="text-sm">{status.message}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`rounded-md p-4 flex items-center space-x-2  text-amber-800`}
            >
              <p className="text-lg">Em caso de urgência, envie mensagem para o WhatsApp (51) 98048-3951 .</p>
            </motion.div>
        </AnimatePresence>
      </motion.form>
    </div>
  );
};

export default ContactForm;
