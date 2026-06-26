'use client';

import React, { useState } from 'react';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[#0a0a1f] rounded-2xl p-8 border border-[#12122b] text-center">
        <MessageSquare size={40} className="text-[#00F0FF] mx-auto mb-4" />
        <h2 className="text-2xl font-montserrat font-bold text-white mb-3">Mensagem Recebida</h2>
        <p className="text-gray-400 font-poppins">
          Obrigado pelo seu contacto. A nossa equipa responderá dentro de 1 a 2 dias úteis.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-[#0a0a1f] rounded-2xl p-8 border border-[#12122b]">
        <h2 className="text-2xl font-montserrat font-bold text-white mb-6">Entre em Contacto</h2>
        <div className="space-y-6 text-gray-300 font-poppins">
          <div className="flex items-start gap-4">
            <Mail size={20} className="text-[#00F0FF] shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-white">Email</p>
              <a href="mailto:support@sortemestre.com" className="text-[#00F0FF] hover:underline">
                support@sortemestre.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-[#00F0FF] shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-white">Escritório</p>
              <p className="text-gray-400 text-sm">Lisboa, Portugal</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Para pedidos de listagem de plataformas, parcerias ou questões gerais sobre as nossas classificações, utilize o formulário ou envie-nos um email diretamente.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#0a0a1f] rounded-2xl p-8 border border-[#12122b] space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-[#050511] border border-gray-800 rounded-lg px-4 py-3 text-white font-poppins text-sm focus:outline-none focus:border-[#00F0FF] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-[#050511] border border-gray-800 rounded-lg px-4 py-3 text-white font-poppins text-sm focus:outline-none focus:border-[#00F0FF] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full bg-[#050511] border border-gray-800 rounded-lg px-4 py-3 text-white font-poppins text-sm focus:outline-none focus:border-[#00F0FF] transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#00F0FF] hover:bg-[#00F0FF]/90 text-[#050511] rounded-xl font-montserrat font-bold uppercase tracking-wide transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
