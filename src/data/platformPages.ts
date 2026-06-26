export interface PlatformPageConfig {
  slug: string;
  title: string;
  titleHighlight: string;
  badge: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const PLATFORM_PAGES: PlatformPageConfig[] = [
  {
    slug: 'online-roulette',
    title: 'Melhores Sites de Roleta Online',
    titleHighlight: 'Portugal 2026',
    badge: 'Análises de Especialistas — Atualizadas Semanalmente',
    description:
      'Compare os melhores sites licenciados em Portugal para roleta online. Mesas europeias e americanas, opções com dealer ao vivo, bónus de boas-vindas e velocidade de levantamentos analisados pelos nossos especialistas.',
    metaTitle: 'Melhores Sites de Roleta Online Portugal 2026 | Sorte Mestre',
    metaDescription:
      'Encontre os melhores sites de roleta online em Portugal para 2026. Compare bónus, mesas ao vivo, licenciamento e velocidade de pagamentos.',
  },
  {
    slug: 'online-blackjack',
    title: 'Melhores Sites de Blackjack Online',
    titleHighlight: 'Portugal 2026',
    badge: 'Análises de Especialistas — Atualizadas Semanalmente',
    description:
      'Compare as melhores plataformas em Portugal para blackjack online. Blackjack clássico, multi-mão e com dealer ao vivo analisados quanto a bónus, limites de mesa, licenciamento e fiabilidade de pagamentos.',
    metaTitle: 'Melhores Sites de Blackjack Online Portugal 2026 | Sorte Mestre',
    metaDescription:
      'Encontre os melhores sites de blackjack online em Portugal para 2026. Compare bónus de boas-vindas, mesas ao vivo, licenciamento e classificações de especialistas.',
  },
  {
    slug: 'slots-offers',
    title: 'Melhores Ofertas de Slots',
    titleHighlight: 'Portugal 2026',
    badge: 'Comparação de Bónus — Atualizada Semanalmente',
    description:
      'Explore as melhores ofertas de slots de plataformas licenciadas em Portugal. Rodadas grátis, bónus de depósito e requisitos de apostas comparados para encontrar o melhor valor.',
    metaTitle: 'Melhores Ofertas de Slots Portugal 2026 | Sorte Mestre',
    metaDescription:
      'Compare as melhores ofertas de slots em Portugal para 2026. Rodadas grátis, bónus de boas-vindas e requisitos de apostas justos em sites de confiança.',
  },
  {
    slug: 'live-casino',
    title: 'Melhores Casinos ao Vivo',
    titleHighlight: 'Portugal 2026',
    badge: 'Análises de Especialistas — Atualizadas Semanalmente',
    description:
      'Compare os melhores casinos ao vivo em Portugal. Dealers reais, streaming HD, mesas de blackjack, roleta e bacará analisadas quanto a qualidade, bónus e licenciamento.',
    metaTitle: 'Melhores Casinos ao Vivo Portugal 2026 | Sorte Mestre',
    metaDescription:
      'Encontre os melhores casinos ao vivo em Portugal para 2026. Compare jogos com dealer ao vivo, bónus, qualidade de streaming e velocidade de pagamentos.',
  },
  {
    slug: 'new-casino-sites',
    title: 'Novos Casinos Online',
    titleHighlight: 'Portugal 2026',
    badge: 'Novas Listagens — Analisadas por Especialistas',
    description:
      'Descubra casinos online recém-lançados e licenciados para jogadores em Portugal. Cada plataforma é analisada quanto a ofertas de boas-vindas, segurança, termos de bónus transparentes e pagamentos fiáveis.',
    metaTitle: 'Novos Casinos Online Portugal 2026 | Sorte Mestre',
    metaDescription:
      'Explore novos casinos online em Portugal para 2026. Plataformas analisadas por especialistas com bónus de boas-vindas, informação de licenciamento e detalhes de pagamentos.',
  },
];

export function getPlatformPage(slug: string): PlatformPageConfig | undefined {
  return PLATFORM_PAGES.find((page) => page.slug === slug);
}
