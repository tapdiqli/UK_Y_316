import React from 'react';
import { Metadata } from 'next';
import TopMegaNav from '@/components/layout/TopMegaNav';
import SiteFooter from '@/components/layout/SiteFooter';
import CompactHeroBanner from '@/components/home/CompactHeroBanner';
import GamingBrandShowcase from '@/components/home/GamingBrandShowcase';
import BrandListTableHeader from '@/components/home/BrandListTableHeader';
import { TOP_BRANDS } from '@/data/brands';

export const metadata: Metadata = {
  title: 'Melhores Casinos Online Portugal 2026 | Sorte Mestre',
  description: 'Compare os melhores casinos online licenciados em Portugal. Análises de especialistas, bónus de boas-vindas, velocidade de levantamentos e classificações de segurança atualizadas semanalmente.',
  alternates: {
    canonical: 'https://sortemestre.com',
  },
  openGraph: {
    title: 'Melhores Casinos Online Portugal 2026 | Sorte Mestre',
    description: 'Compare os melhores casinos online licenciados em Portugal. Análises de especialistas, bónus e velocidade de pagamentos.',
    url: 'https://sortemestre.com',
    siteName: 'Sorte Mestre',
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <TopMegaNav />
      <main className="flex-1 bg-[#050511] w-full">
        <CompactHeroBanner />

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-4 md:pt-2">
          <div className="flex flex-col gap-6 lg:gap-0">
            <BrandListTableHeader />
            {TOP_BRANDS.map((brand, index) => (
              <GamingBrandShowcase key={brand.id} index={index} brand={brand} />
            ))}
          </div>

          <article className="mt-20 bg-[#0a0a1f] rounded-2xl p-8 border border-[#12122b] gaming-glow-pink">
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
            </div>
          </article>

          <section className="mt-16">
            <h2 className="text-3xl font-montserrat font-bold text-white mb-8 text-center">
              Como Começar em <span className="text-[#00F0FF]">3 Passos Simples</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0a0a1f] p-8 rounded-2xl border border-[#12122b] text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F0FF] to-[#0033FF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-[#050511] rounded-full flex items-center justify-center border border-[#00F0FF] mb-6 text-2xl font-bold text-[#00F0FF]">1</div>
                <h3 className="text-xl font-bold text-white mb-4">Escolha um Casino</h3>
                <p className="text-gray-400 text-sm">Explore a nossa lista selecionada pelos especialistas dos melhores casinos online. Compare bónus, leia as nossas análises detalhadas e escolha o que melhor se adapta ao seu estilo de jogo.</p>
              </div>
              <div className="bg-[#0a0a1f] p-8 rounded-2xl border border-[#12122b] text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF003C] to-[#FF5500] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-[#050511] rounded-full flex items-center justify-center border border-[#FF003C] mb-6 text-2xl font-bold text-[#FF003C]">2</div>
                <h3 className="text-xl font-bold text-white mb-4">Reclame o Seu Bónus</h3>
                <p className="text-gray-400 text-sm">Clique no botão &quot;Jogar Agora&quot; para visitar a plataforma em segurança. Registe a sua conta e faça o primeiro depósito para desbloquear o bónus de boas-vindas exclusivo.</p>
              </div>
              <div className="bg-[#0a0a1f] p-8 rounded-2xl border border-[#12122b] text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00FF66] to-[#00CC55] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-[#050511] rounded-full flex items-center justify-center border border-[#00FF66] mb-6 text-2xl font-bold text-[#00FF66]">3</div>
                <h3 className="text-xl font-bold text-white mb-4">Comece a Jogar</h3>
                <p className="text-gray-400 text-sm">Mergulhe em milhares de jogos emocionantes, desde slots clássicas a mesas com dealer ao vivo. Lembre-se de jogar sempre com responsabilidade e dentro dos seus limites.</p>
              </div>
            </div>
          </section>

          <section className="mt-16 bg-[#0a0a1f] rounded-2xl p-8 border border-[#12122b]">
            <h2 className="text-3xl font-montserrat font-bold text-white mb-8 text-center">
              O Que Diz a Nossa <span className="text-[#FF003C]">Comunidade</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#050511] p-6 rounded-xl border border-gray-800">
                <div className="flex text-[#00F0FF] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic mb-4">&quot;O Sorte Mestre ajudou-me a encontrar uma plataforma segura quando estava sobrecarregado com opções. O bónus que reclamei era exatamente como descrito, sem termos ocultos.&quot;</p>
                <p className="text-white font-bold text-sm">- João T., Portugal</p>
              </div>
              <div className="bg-[#050511] p-6 rounded-xl border border-gray-800">
                <div className="flex text-[#00F0FF] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic mb-4">&quot;Aprecio as análises honestas. Apontam realmente as falhas dos casinos em vez de os elogiar apenas. Isso torna as recomendações muito mais fiáveis.&quot;</p>
                <p className="text-white font-bold text-sm">- Maria S., Portugal</p>
              </div>
              <div className="bg-[#050511] p-6 rounded-xl border border-gray-800">
                <div className="flex text-[#00F0FF] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic mb-4">&quot;As classificações de pagamentos rápidos são uma salvação. Costumava esperar dias pelos meus ganhos, mas o site que encontrei aqui processa os levantamentos em menos de uma hora.&quot;</p>
                <p className="text-white font-bold text-sm">- Pedro L., Portugal</p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h3 className="text-3xl font-montserrat font-bold text-white mb-8 text-center">
              Perguntas <span className="text-[#00F0FF]">Frequentes</span>
            </h3>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="border border-gray-800 rounded-lg p-6 bg-[#0a0a1f] hover:border-gray-600 transition-colors">
                <h5 className="font-bold text-white mb-3 text-lg">Com que frequência são atualizadas estas classificações?</h5>
                <p className="text-gray-400 leading-relaxed">As nossas classificações são atualizadas semanalmente para refletir novos bónus, atualizações de plataformas, alterações nas avaliações de satisfação dos jogadores e mudanças no licenciamento ou conformidade regulatória.</p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6 bg-[#0a0a1f] hover:border-gray-600 transition-colors">
                <h5 className="font-bold text-white mb-3 text-lg">Estas plataformas são compatíveis com mobile?</h5>
                <p className="text-gray-400 leading-relaxed">Absolutamente. Compreendemos que os jogadores modernos jogam em movimento. Cada plataforma listada aqui foi rigorosamente testada em dispositivos iOS e Android para garantir desempenho fluido, navegação intuitiva e disponibilidade total de jogos.</p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6 bg-[#0a0a1f] hover:border-gray-600 transition-colors">
                <h5 className="font-bold text-white mb-3 text-lg">Posso jogar gratuitamente antes de depositar?</h5>
                <p className="text-gray-400 leading-relaxed">Sim, a maioria das nossas plataformas melhor classificadas oferece modos &quot;demo&quot; ou &quot;prática&quot; para a maioria dos seus jogos. Isto permite-lhe aprender as mecânicas, explorar novos títulos e desenvolver estratégias antes de apostar dinheiro real.</p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6 bg-[#0a0a1f] hover:border-gray-600 transition-colors">
                <h5 className="font-bold text-white mb-3 text-lg">O que são requisitos de apostas?</h5>
                <p className="text-gray-400 leading-relaxed">Os requisitos de apostas determinam quantas vezes deve jogar o valor de um bónus antes de poder levantar os ganhos associados. Priorizamos plataformas que oferecem requisitos de apostas justos, transparentes e alcançáveis.</p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6 bg-[#0a0a1f] hover:border-gray-600 transition-colors">
                <h5 className="font-bold text-white mb-3 text-lg">Os meus dados pessoais e financeiros estão seguros?</h5>
                <p className="text-gray-400 leading-relaxed">A segurança é o nosso principal critério. Todas as plataformas recomendadas utilizam tecnologia avançada de encriptação SSL para proteger os seus dados. Além disso, são auditadas por agências independentes para garantir imparcialidade e segurança.</p>
              </div>
            </div>
          </section>

          <section className="mt-16 bg-[#120a0a] rounded-2xl p-8 border border-[#331111]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FF003C] flex items-center justify-center text-white font-bold text-xl">18+</div>
              <h2 className="text-3xl font-montserrat font-bold text-white">
                Jogo <span className="text-[#FF003C]">Responsável</span>
              </h2>
            </div>

            <div className="text-gray-300 font-poppins leading-relaxed space-y-4">
              <p>
                O jogo deve ser sempre visto como uma forma de entretenimento, e não como uma forma de ganhar dinheiro. É crucial manter o controlo dos seus hábitos de jogo e reconhecer quando pode ser altura de fazer uma pausa.
              </p>
              <h4 className="text-white font-bold text-lg mt-6 mb-2">Dicas para Jogar com Segurança:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li><strong>Defina um Orçamento:</strong> Decida um orçamento rigoroso antes de começar a jogar e nunca o exceda. Nunca tente recuperar perdas.</li>
                <li><strong>Gestão de Tempo:</strong> Defina limites de tempo para as suas sessões de jogo. Faça pausas frequentes para manter a mente clara.</li>
                <li><strong>Não Jogue Sob Influência:</strong> Evite jogar quando estiver perturbado, stressado ou sob influência de álcool ou drogas.</li>
                <li><strong>Use as Ferramentas da Plataforma:</strong> Utilize as ferramentas de jogo responsável disponibilizadas pelos casinos, como limites de depósito, alertas de tempo e opções de autoexclusão.</li>
              </ul>
              <div className="mt-8 p-4 bg-[#050511] border border-gray-800 rounded-lg">
                <p className="text-sm text-gray-400">
                  Se sentir que o jogo está a afetar negativamente a sua vida, procure ajuda profissional imediatamente. Organizações como <a href="https://www.jogoresponsavel.pt/" target="_blank" rel="nofollow noreferrer" className="text-[#00F0FF] hover:underline">Jogo Responsável</a>, <a href="https://www.sns24.gov.pt/" target="_blank" rel="nofollow noreferrer" className="text-[#00F0FF] hover:underline">SNS 24</a> (Linha Vida: 1414) e o <a href="https://www.srij.turismodeportugal.pt/" target="_blank" rel="nofollow noreferrer" className="text-[#00F0FF] hover:underline">SRIJ</a> oferecem apoio e recursos confidenciais.
                </p>
              </div>
            </div>
          </section>

        </section>
      </main>

      <SiteFooter />
    </>
  );
}
