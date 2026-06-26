"use client";
import React, { Suspense } from 'react';
import Image from 'next/image';
import { Star, StarHalf, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export interface GamingBrandData {
  id: string;
  name: string;
  logo: string;
  bonusText: string;
  pros: string[];
  features: string[];
  link: string;
}

interface GamingBrandShowcaseProps {
  index: number;
  brand: GamingBrandData;
}

function getBadgeLabel(position: number): string | null {
  if (position === 1) return 'Escolha do Editor';
  if (position === 2) return 'Em Destaque';
  if (position === 3) return 'Recomendado';
  return null;
}

function StarRow({
  fullStars,
  hasHalfStar,
  size = 16,
  className = 'text-[#00F0FF]',
}: {
  fullStars: number;
  hasHalfStar: boolean;
  size?: number;
  className?: string;
}) {
  return (
    <div className={`flex ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={size} fill="currentColor" />
      ))}
      {hasHalfStar && <StarHalf size={size} fill="currentColor" />}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-gray-600" />
      ))}
    </div>
  );
}

function ShowcaseContent({ index, brand }: GamingBrandShowcaseProps) {
  const searchParams = useSearchParams();
  const gclid = searchParams.get('gclid');

  let finalLink = brand.link;
  if (gclid) {
    finalLink = brand.link + (brand.link.includes('?') ? '&' : '?') + 'gclid=' + gclid;
  }

  const ratingOutOf10 = 10 - index * 0.1;
  const displayRating = (Math.floor((ratingOutOf10 / 2) * 10) / 10).toFixed(1);
  const scoreOutOf10 = ratingOutOf10.toFixed(1);

  const position = index + 1;
  let fullStars = 5;
  let hasHalfStar = false;

  if (position <= 3) {
    fullStars = 5;
    hasHalfStar = false;
  } else if (position <= 7) {
    fullStars = 4;
    hasHalfStar = true;
  } else {
    fullStars = 4;
    hasHalfStar = false;
  }

  const badgeLabel = getBadgeLabel(position);

  return (
    <>
      {/* Mobile — unchanged */}
      <a
        href={finalLink}
        className="gaming-border-gradient my-6 p-1 sm:p-0.5 block group cursor-pointer lg:hidden"
      >
        <div className="bg-[#0a0a1f] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col gap-5 relative overflow-hidden group-hover:bg-[#0c0c24] transition-colors">
          <div className="absolute top-0 left-0 bg-gradient-to-br from-[#00F0FF] to-[#0033FF] px-4 py-1 rounded-br-xl font-montserrat font-bold text-white text-sm z-10 shadow-lg">
            #{position}
          </div>

          <div className="flex items-center justify-between gap-4 pt-4 sm:pt-4">
            <div className="shrink-0">
              <div className="relative w-[170px] h-[80px]">
                <Image
                  src={brand.logo}
                  alt={`Logótipo ${brand.name}`}
                  fill
                  className="object-contain"
                  sizes="170px"
                />
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-sm font-poppins text-gray-400 font-medium">{displayRating} / 5</span>
              <StarRow fullStars={fullStars} hasHalfStar={hasHalfStar} />
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-[#12122b] pt-5">
            <p className="text-base sm:text-lg font-black font-montserrat text-white leading-snug">{brand.bonusText}</p>
            <div className="w-full py-3 sm:py-4 bg-[#00F0FF] group-hover:bg-[#00F0FF]/90 text-[#050511] rounded-xl font-montserrat font-bold uppercase tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] group-hover:-translate-y-1 flex items-center justify-center gap-1">
              Jogar Agora <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </a>

      {/* Desktop — table row layout */}
      <a
        href={finalLink}
        className="hidden lg:block mb-4 group cursor-pointer"
      >
        <div className="grid grid-cols-[200px_1fr_160px_200px] min-h-[120px] rounded-lg border border-[#2a2a3d] bg-[#0a0a1f] overflow-hidden transition-colors group-hover:bg-[#0c0c24] group-hover:border-[#00F0FF]/30">
          {/* Casino / Logo */}
          <div className="relative border-r border-[#2a2a3d] flex items-center justify-center p-4">
            {badgeLabel && (
              <div className="absolute top-0 left-0 z-10">
                <span className="inline-block bg-gradient-to-r from-[#00F0FF] to-[#0033FF] text-[#050511] text-[10px] font-montserrat font-black uppercase tracking-wider px-3 py-1 skew-x-[-8deg]">
                  <span className="inline-block skew-x-[8deg]">{badgeLabel}</span>
                </span>
              </div>
            )}
            <div className="relative w-[180px] h-[90px]">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
                sizes="180px"
              />
            </div>
          </div>

          {/* Offer */}
          <div className="flex flex-col justify-center border-r border-[#2a2a3d] px-6 py-4">
            <p className="text-xl font-montserrat font-bold text-white leading-snug mb-auto">
              {brand.bonusText}
            </p>
            <p className="text-[10px] leading-relaxed text-gray-500 font-poppins mt-4">
              18+. Apenas novos clientes. Depósito mínimo e requisitos de apostas aplicáveis. T&amp;C aplicáveis. Jogue com responsabilidade.
            </p>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center justify-center border-r border-[#2a2a3d] px-4 py-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-montserrat font-black text-white leading-none">{scoreOutOf10}</span>
              <StarRow fullStars={fullStars} hasHalfStar={hasHalfStar} size={18} />
            </div>
          </div>

          {/* Visit Site / CTA */}
          <div className="flex flex-col items-center justify-center gap-3 px-5 py-4">
            <div className="w-full py-3.5 bg-gradient-to-b from-[#00F0FF] to-[#0033FF] group-hover:from-[#33f3ff] group-hover:to-[#3355ff] text-white rounded-lg font-montserrat font-bold uppercase tracking-wide text-sm text-center shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all">
              Obter Bónus
            </div>
            <span className="text-sm font-poppins text-[#00F0FF] group-hover:underline underline-offset-2">
              Visitar Site
            </span>
          </div>
        </div>
      </a>
    </>
  );
}

export default function GamingBrandShowcase(props: GamingBrandShowcaseProps) {
  return (
    <Suspense
      fallback={
        <div className="gaming-border-gradient mb-8 p-1 sm:p-0.5 animate-pulse lg:hidden">
          <div className="bg-[#0a0a1f] h-48 rounded-xl sm:rounded-2xl"></div>
        </div>
      }
    >
      <ShowcaseContent {...props} />
    </Suspense>
  );
}
