import { Metadata } from 'next';
import ContentPageLayout from '@/components/layout/ContentPageLayout';

export const metadata: Metadata = {
  title: 'Sobre o Sorte Mestre | Sorte Mestre',
  description: 'Saiba mais sobre o Sorte Mestre, a nossa missão e como avaliamos e classificamos casinos online.',
  alternates: { canonical: 'https://sortemestre.com/about' },
};

export default function AboutPage() {
  return (
    <ContentPageLayout
      badge="A Nossa História"
      title="Sobre o"
      titleHighlight="Sorte Mestre"
      description="Unimos jogadores e os melhores destinos de casino através de análises honestas e testes rigorosos."
    >
      <article className="bg-[#0a0a1f] rounded-2xl p-8 border border-[#12122b] gaming-glow-pink">
        <h2 className="text-3xl font-montserrat font-bold text-white mb-6">
          Porque Confiar no <span className="text-[#FF003C]">Sorte Mestre</span>?
        </h2>

        <div className="space-y-6 text-gray-300 font-poppins leading-relaxed">
          <p>
            No mundo em constante evolução do entretenimento online, encontrar uma plataforma fiável e emocionante pode ser uma tarefa difícil. É exatamente aqui que o Sorte Mestre entra. Atuamos como o seu guia de referência, unindo jogadores ocasionais aos melhores destinos de casino online.
          </p>

          <h3 className="text-xl font-montserrat font-semibold text-[#00F0FF] mt-8 mb-4">
            O Nosso Processo Rigoroso de Avaliação
          </h3>
          <p>
            Não nos limitamos a listar plataformas — analisamo-las a fundo. A nossa equipa de jogadores experientes e analistas do setor dedica inúmeras horas a testar cada site. Depositamos dinheiro real, testamos a velocidade dos levantamentos, avaliamos o apoio ao cliente e verificamos a imparcialidade dos geradores de números aleatórios (RNG). Se uma plataforma não cumprir os nossos critérios rigorosos de segurança, usabilidade e diversão, não entra na lista.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-[#050511] p-6 rounded-xl border border-gray-800">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-[#0033FF] flex items-center justify-center text-white">1</span>
                Segurança e Licenciamento Incomparáveis
              </h4>
              <p className="text-sm text-gray-400">
                A proteção dos seus dados é a nossa prioridade. Recomendamos exclusivamente sites com encriptação SSL de última geração e licenças válidas de entidades reguladoras reconhecidas, como o SRIJ ou a MGA.
              </p>
            </div>
            <div className="bg-[#050511] p-6 rounded-xl border border-gray-800">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-[#FF003C] flex items-center justify-center text-white">2</span>
                Bónus Premium e Termos Justos
              </h4>
              <p className="text-sm text-gray-400">
                Negociamos diretamente com operadores para lhe trazer pacotes de boas-vindas exclusivos e rodadas grátis. Mais importante ainda, lemos a letra pequena para garantir que os requisitos de apostas são justos e transparentes.
              </p>
            </div>
            <div className="bg-[#050511] p-6 rounded-xl border border-gray-800">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-[#00F0FF] flex items-center justify-center text-[#050511]">3</span>
                Variedade de Jogos e Software
              </h4>
              <p className="text-sm text-gray-400">
                Uma plataforma de topo deve oferecer um portefólio diversificado. Procuramos parcerias com fornecedores de software líderes como NetEnt, Microgaming e Evolution Gaming para garantir entretenimento de alta qualidade.
              </p>
            </div>
            <div className="bg-[#050511] p-6 rounded-xl border border-gray-800">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-white flex items-center justify-center text-[#050511]">4</span>
                Pagamentos Rápidos e Fiáveis
              </h4>
              <p className="text-sm text-gray-400">
                Quando ganha, não deve ter de esperar. Testamos o processo de levantamento de cada plataforma para garantir pagamentos rápidos e sem complicações através de múltiplos métodos, incluindo carteiras digitais e crypto.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-montserrat font-semibold text-[#00F0FF] mt-8 mb-4">A Nossa Missão</h3>
          <p>
            O Sorte Mestre existe para capacitar jogadores com informação transparente e imparcial. Somos um diretório independente — não pertencemos nem somos controlados por nenhum operador de jogo — e as nossas classificações refletem o que é genuinamente melhor para os jogadores, e não o que paga a comissão mais alta.
          </p>
        </div>
      </article>
    </ContentPageLayout>
  );
}
