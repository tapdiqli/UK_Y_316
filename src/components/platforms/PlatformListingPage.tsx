import React from 'react';
import TopMegaNav from '@/components/layout/TopMegaNav';
import SiteFooter from '@/components/layout/SiteFooter';
import CompactHeroBanner from '@/components/home/CompactHeroBanner';
import GamingBrandShowcase from '@/components/home/GamingBrandShowcase';
import BrandListTableHeader from '@/components/home/BrandListTableHeader';
import { TOP_BRANDS } from '@/data/brands';
import { PlatformPageConfig } from '@/data/platformPages';

interface PlatformListingPageProps {
  page: PlatformPageConfig;
}

export default function PlatformListingPage({ page }: PlatformListingPageProps) {
  return (
    <>
      <TopMegaNav />
      <main className="flex-1 bg-[#050511] w-full">
        <CompactHeroBanner
          badge={page.badge}
          title={page.title}
          titleHighlight={page.titleHighlight}
          description={page.description}
        />

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-16 md:pt-2">
          <div className="flex flex-col gap-6 lg:gap-0">
            <BrandListTableHeader />
            {TOP_BRANDS.map((brand, index) => (
              <GamingBrandShowcase key={brand.id} index={index} brand={brand} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
