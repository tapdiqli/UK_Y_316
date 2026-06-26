import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const REGULATORY_SIGNS = [
  {
    href: 'https://www.srij.turismodeportugal.pt/pt/srijsite/',
    src: '/signs/srij.png',
    alt: 'SRIJ - Serviço de Regulação e Inspeção de Jogos',
    width: 72,
    height: 36,
  },
  {
    href: 'https://www.gamcare.org.uk/',
    src: '/signs/gamcare.png',
    alt: 'GamCare',
    width: 120,
    height: 36,
  },
  {
    href: 'https://www.begambleaware.org/',
    src: '/signs/gamble-aware.png',
    alt: 'GambleAware',
    width: 140,
    height: 36,
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-[#050511] border-t border-[#12122b] pt-16 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-[#12122b] pb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/logo.svg"
                alt="Sorte Mestre"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              O seu destino de referência para descobrir os casinos online mais seguros, fiáveis e recompensadores. Jogue de forma inteligente e responsável.
            </p>
            <div className="flex items-center gap-3 bg-[#120a0a] border border-[#331111] p-3 rounded-lg w-fit">
              <div className="w-10 h-10 rounded-full bg-[#FF003C] flex items-center justify-center text-white font-bold">18+</div>
              <div className="text-xs text-gray-300">
                <p className="font-bold text-white">Apenas 18+</p>
                <p>O jogo por menores é proibido por lei.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-[#00F0FF] transition-colors">Melhores Casinos</Link></li>
              <li><Link href="/testimonials" className="hover:text-[#00F0FF] transition-colors">Testemunhos</Link></li>
              <li><Link href="/about" className="hover:text-[#00F0FF] transition-colors">Sobre Nós</Link></li>
              <li><Link href="/contact" className="hover:text-[#00F0FF] transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal e Política</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/terms" className="hover:text-[#00F0FF] transition-colors">Termos e Condições</Link></li>
              <li><Link href="/privacy" className="hover:text-[#00F0FF] transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/safe-play" className="hover:text-[#00F0FF] transition-colors">Jogo Responsável</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 pb-10 border-b border-[#12122b]">
          {REGULATORY_SIGNS.map((sign) => (
            <Link
              key={sign.src}
              href={sign.href}
              target="_blank"
              rel="nofollow noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              <Image
                src={sign.src}
                alt={sign.alt}
                width={sign.width}
                height={sign.height}
                className="h-9 w-auto object-contain"
              />
            </Link>
          ))}
        </div>

        <div className="text-center text-gray-500 font-poppins text-xs space-y-4">
          <p className="max-w-4xl mx-auto leading-relaxed">
            <strong>Aviso:</strong> O Sorte Mestre é um diretório e serviço de informação independente, livre de qualquer controlo por operadores de jogo. Os links para sites de terceiros são disponibilizados para sua conveniência. Podemos receber compensação se visitar estes sites através dos nossos links. No entanto, isto não influencia as nossas avaliações. É sua responsabilidade garantir que cumpre todos os requisitos legais e de idade antes de entrar num casino ou fazer uma aposta.
          </p>
          <p className="max-w-4xl mx-auto leading-relaxed text-[#FF003C]">
            O jogo pode causar dependência. Por favor, jogue com responsabilidade. Se sentir que o jogo está a afetar negativamente a sua vida, procure ajuda junto de organizações como o Jogo Responsável ou a Linha Vida.
          </p>
          <p className="pt-4 border-t border-[#12122b]/50">
            © {new Date().getFullYear()} Sorte Mestre. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
