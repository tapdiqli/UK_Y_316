"use client";
import React, { Suspense } from 'react';
import { ShieldCheck } from 'lucide-react';

export interface CompactHeroBannerProps {
  badge?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
}

const DEFAULT_PROPS: Required<CompactHeroBannerProps> = {
  badge: 'Análises Independentes de Especialistas — Atualizadas Semanalmente',
  title: 'Melhores Casinos Online',
  titleHighlight: 'Portugal 2026',
  description:
    'Compare os melhores casinos online licenciados em Portugal. Análises de especialistas, bónus de boas-vindas, velocidade de levantamentos e classificações de segurança para escolher com confiança.',
};

function HeroContent({
  badge,
  title,
  titleHighlight,
  description,
}: Required<CompactHeroBannerProps>) {
  return (
    <section className="relative overflow-hidden bg-[#050511] pt-3 pb-1 md:pt-8 md:pb-3">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-64 h-64 bg-[#00F0FF] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-[#FF003C] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-4  sm:px-6 lg:px-8 md:text-center">
        <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a1f] border border-[#12122b] mb-6 gaming-glow">
          <ShieldCheck size={16} className="text-[#00F0FF]" />
          <span className="text-sm font-poppins text-gray-300 font-medium">{badge}</span>
        </div>

        <h1 className="text-[1.35rem] leading-tight sm:text-5xl md:text-6xl font-montserrat font-black text-white mb-2 md:mb-6 uppercase tracking-tight">
          {title}{' '}
          <span className="gaming-gradient-text">{titleHighlight}</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 font-poppins">
          {description}
        </p>
      </div>
    </section>
  );
}

export default function CompactHeroBanner(props: CompactHeroBannerProps = {}) {
  const heroProps = { ...DEFAULT_PROPS, ...props };

  return (
    <Suspense fallback={
      <section className="relative overflow-hidden bg-[#050511] pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-pulse">
           <div className="h-10 w-48 bg-[#0a0a1f] mx-auto rounded-full mb-6"></div>
           <div className="h-24 w-3/4 bg-[#0a0a1f] mx-auto rounded-xl mb-6"></div>
           <div className="h-12 w-1/2 bg-[#0a0a1f] mx-auto rounded-xl mb-8"></div>
        </div>
      </section>
    }>
      <HeroContent {...heroProps} />
    </Suspense>
  );
}
