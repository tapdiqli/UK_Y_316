"use client";
import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, ShieldAlert } from 'lucide-react';

const PLATFORM_LINKS = [
  { href: '/platforms/online-roulette', label: 'Roleta Online' },
  { href: '/platforms/online-blackjack', label: 'Blackjack Online' },
  { href: '/platforms/slots-offers', label: 'Ofertas de Slots' },
  { href: '/platforms/live-casino', label: 'Casino ao Vivo' },
  { href: '/platforms/new-casino-sites', label: 'Novos Casinos' },
] as const;

function NavContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobilePlatformsOpen, setMobilePlatformsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#050511]/90 backdrop-blur-md border-b border-[#0a0a1f]/50 gaming-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative">
              <Image 
                src="/assets/logo.svg" 
                alt="Logótipo Sorte Mestre" 
                width={200} 
                height={50} 
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className="text-white hover:text-[#00F0FF] transition-colors font-montserrat font-semibold flex items-center gap-1">
                Melhores Casinos <ChevronDown size={16} className={`transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-screen max-w-2xl bg-[#0a0a1f] border border-[#12122b] rounded-b-2xl shadow-2xl transition-all duration-300 transform origin-top ${megaMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
                <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PLATFORM_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all block font-montserrat font-semibold py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/testimonials" className="text-white hover:text-[#FF003C] transition-colors font-montserrat font-semibold">
              Testemunhos
            </Link>
            <Link href="/about" className="text-white hover:text-[#0033FF] transition-colors font-montserrat font-semibold">
              Sobre
            </Link>
            <Link href="/contact" className="text-white hover:text-[#00F0FF] transition-colors font-montserrat font-semibold">
              Contacto
            </Link>
            <Link href="/safe-play" className="text-white hover:text-[#00F0FF] transition-colors font-montserrat font-semibold flex items-center gap-1">
              <ShieldAlert size={16} /> Jogo Seguro
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#00F0FF] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a1f] border-b border-[#12122b]">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <button
              type="button"
              onClick={() => setMobilePlatformsOpen(!mobilePlatformsOpen)}
              className="w-full flex items-center justify-between text-white font-montserrat font-semibold py-3"
            >
              Melhores Casinos
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${mobilePlatformsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobilePlatformsOpen && (
              <div className="pl-4 pb-2 space-y-1 border-l border-[#12122b] ml-1">
                {PLATFORM_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-white font-montserrat font-medium py-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/testimonials" onClick={() => setIsOpen(false)} className="block text-white font-montserrat font-semibold py-3">
              Testemunhos
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block text-white font-montserrat font-semibold py-3">
              Sobre
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-white font-montserrat font-semibold py-3">
              Contacto
            </Link>
            <Link href="/safe-play" onClick={() => setIsOpen(false)} className="block text-white font-montserrat font-semibold py-3">
              Jogo Seguro
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function TopMegaNav() {
  return (
    <Suspense fallback={
      <nav className="sticky top-0 z-50 w-full bg-[#050511]/90 backdrop-blur-md border-b border-[#0a0a1f]/50 h-20"></nav>
    }>
      <NavContent />
    </Suspense>
  );
}
