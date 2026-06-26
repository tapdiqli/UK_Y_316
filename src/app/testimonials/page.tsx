import { Metadata } from 'next';
import ContentPageLayout from '@/components/layout/ContentPageLayout';

export const metadata: Metadata = {
  title: 'Testemunhos de Jogadores | Sorte Mestre',
  description: 'Leia histórias reais de jogadores que encontraram casinos de confiança através do Sorte Mestre.',
  alternates: { canonical: 'https://sortemestre.com/testimonials' },
};

const TESTIMONIALS = [
  {
    quote:
      'O Sorte Mestre ajudou-me a encontrar uma plataforma segura quando estava sobrecarregado com opções. O bónus que reclamei através deles era exatamente como descrito, sem termos ocultos.',
    author: 'João T.',
    location: 'Portugal',
  },
  {
    quote:
      'Aprecio as análises honestas. Apontam realmente as falhas dos casinos em vez de os elogiar apenas. Isso torna as recomendações muito mais fiáveis.',
    author: 'Maria S.',
    location: 'Portugal',
  },
  {
    quote:
      'As classificações de pagamentos rápidos são uma salvação. Costumava esperar dias pelos meus ganhos, mas o site que encontrei aqui processa os meus levantamentos em menos de uma hora.',
    author: 'Pedro L.',
    location: 'Portugal',
  },
  {
    quote:
      'Como principiante, não sabia por onde começar. O Sorte Mestre explicou tudo claramente — bónus, licenciamento, velocidade de pagamentos — e senti-me confiante ao registar-me.',
    author: 'Ana R.',
    location: 'Portugal',
  },
  {
    quote:
      'O que distingue este site é a transparência. Explicam os requisitos de apostas antecipadamente, por isso não há surpresas desagradáveis quando tento levantar.',
    author: 'Ricardo K.',
    location: 'Portugal',
  },
  {
    quote:
      'Visito o site todos os meses para ver as classificações atualizadas. Os bónus mudam rapidamente e o Sorte Mestre mantém as listas atuais. Já me poupou dinheiro mais do que uma vez.',
    author: 'Sofia M.',
    location: 'Portugal',
  },
];

function StarRating() {
  return (
    <div className="flex text-[#00F0FF] mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <ContentPageLayout
      badge="Vozes da Comunidade"
      title="Testemunhos de"
      titleHighlight="Jogadores"
      description="Feedback real de jogadores que usaram o Sorte Mestre para descobrir plataformas de confiança, bónus justos e pagamentos rápidos."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item) => (
          <div key={item.author} className="bg-[#0a0a1f] p-6 rounded-xl border border-[#12122b]">
            <StarRating />
            <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">&quot;{item.quote}&quot;</p>
            <p className="text-white font-bold text-sm">
              - {item.author}, {item.location}
            </p>
          </div>
        ))}
      </div>
    </ContentPageLayout>
  );
}
