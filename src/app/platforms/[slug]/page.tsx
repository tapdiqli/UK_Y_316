import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PlatformListingPage from '@/components/platforms/PlatformListingPage';
import { getPlatformPage, PLATFORM_PAGES } from '@/data/platformPages';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PLATFORM_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPlatformPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `https://sortemestre.com/platforms/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://sortemestre.com/platforms/${page.slug}`,
      siteName: 'Sorte Mestre',
      locale: 'pt_PT',
      type: 'website',
    },
  };
}

export default async function PlatformPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPlatformPage(slug);

  if (!page) {
    notFound();
  }

  return <PlatformListingPage page={page} />;
}
