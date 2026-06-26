import { Metadata } from 'next';
import ContentPageLayout from '@/components/layout/ContentPageLayout';

export const metadata: Metadata = {
  title: 'Jogo Seguro e Jogo Responsável | Sorte Mestre',
  description: 'Saiba como jogar com responsabilidade, definir limites e aceder a recursos de apoio para um jogo mais seguro.',
  alternates: { canonical: 'https://sortemestre.com/safe-play' },
};

export default function SafePlayPage() {
  return (
    <ContentPageLayout
      badge="Jogue com Responsabilidade"
      title="Guia de"
      titleHighlight="Jogo Seguro"
      description="O jogo deve ser sempre entretenimento. Saiba como manter o controlo, definir limites e encontrar ajuda quando precisar."
    >
      <article className="bg-[#120a0a] rounded-2xl p-8 border border-[#331111]">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#FF003C] flex items-center justify-center text-white font-bold text-xl">
            18+
          </div>
          <h2 className="text-2xl font-montserrat font-bold text-white">
            Jogo <span className="text-[#FF003C]">Responsável</span>
          </h2>
        </div>

        <div className="text-gray-300 font-poppins leading-relaxed space-y-4">
          <p>
            O jogo deve ser sempre visto como uma forma de entretenimento, e não como uma forma de ganhar dinheiro. É crucial manter o controlo dos seus hábitos de jogo e reconhecer quando pode ser altura de fazer uma pausa.
          </p>

          <h3 className="text-white font-bold text-lg mt-8 mb-2">Dicas para Jogar com Segurança</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>
              <strong className="text-gray-300">Defina um Orçamento:</strong> Decida um orçamento rigoroso antes de começar a jogar e nunca o exceda. Nunca tente recuperar perdas.
            </li>
            <li>
              <strong className="text-gray-300">Gestão de Tempo:</strong> Defina limites de tempo para as suas sessões de jogo. Faça pausas frequentes para manter a mente clara.
            </li>
            <li>
              <strong className="text-gray-300">Não Jogue Sob Influência:</strong> Evite jogar quando estiver perturbado, stressado ou sob influência de álcool ou drogas.
            </li>
            <li>
              <strong className="text-gray-300">Use as Ferramentas da Plataforma:</strong> Utilize as ferramentas de jogo responsável disponibilizadas pelos casinos, como limites de depósito, alertas de tempo e opções de autoexclusão.
            </li>
          </ul>

          <h3 className="text-white font-bold text-lg mt-8 mb-2">Sinais de Alerta</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Gastar mais dinheiro ou tempo do que planeado</li>
            <li>Pedir dinheiro emprestado ou vender bens para jogar</li>
            <li>Sentir-se ansioso ou irritado quando não está a jogar</li>
            <li>Ocultar a atividade de jogo a amigos ou família</li>
          </ul>

          <div className="mt-8 p-4 bg-[#050511] border border-gray-800 rounded-lg">
            <p className="text-sm text-gray-400">
              Se sentir que o jogo está a afetar negativamente a sua vida, procure ajuda profissional imediatamente. Organizações como{' '}
              <a href="https://www.jogoresponsavel.pt/" target="_blank" rel="nofollow noreferrer" className="text-[#00F0FF] hover:underline">
                Jogo Responsável
              </a>
              ,{' '}
              <a href="https://www.sns24.gov.pt/" target="_blank" rel="nofollow noreferrer" className="text-[#00F0FF] hover:underline">
                SNS 24
              </a>{' '}
              (Linha Vida: 1414) e{' '}
              <a href="https://www.srij.turismodeportugal.pt/" target="_blank" rel="nofollow noreferrer" className="text-[#00F0FF] hover:underline">
                SRIJ
              </a>{' '}
              oferecem apoio e recursos confidenciais.
            </p>
          </div>
        </div>
      </article>
    </ContentPageLayout>
  );
}
