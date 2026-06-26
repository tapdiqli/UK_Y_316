import React from 'react';
import TopMegaNav from '@/components/layout/TopMegaNav';
import SiteFooter from '@/components/layout/SiteFooter';
import CompactHeroBanner from '@/components/home/CompactHeroBanner';

interface ContentPageLayoutProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  children: React.ReactNode;
}

export default function ContentPageLayout({
  badge,
  title,
  titleHighlight,
  description,
  children,
}: ContentPageLayoutProps) {
  return (
    <>
      <TopMegaNav />
      <main className="flex-1 bg-[#050511] w-full">
        <CompactHeroBanner
          badge={badge}
          title={title}
          titleHighlight={titleHighlight}
          description={description}
        />
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-16">
          {children}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
