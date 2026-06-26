import { Metadata } from 'next';
import ContentPageLayout from '@/components/layout/ContentPageLayout';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Sorte Mestre',
  description: 'Saiba como o Sorte Mestre recolhe, utiliza e protege as suas informações pessoais.',
  alternates: { canonical: 'https://sortemestre.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <ContentPageLayout
      badge="A Sua Privacidade Importa"
      title="Política de"
      titleHighlight="Privacidade"
      description="Estamos empenhados em proteger a sua privacidade. Esta política explica que dados recolhemos e como os utilizamos."
    >
      <article className="bg-[#0a0a1f] rounded-2xl p-8 border border-[#12122b] space-y-6 text-gray-300 font-poppins leading-relaxed">
        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">1. Informação que Recolhemos</h2>
          <p className="text-gray-400 text-sm mb-3">
            Podemos recolher os seguintes tipos de informação quando utiliza o nosso Site:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 text-sm">
            <li>Dados de utilização, como páginas visitadas, tempo passado e URLs de referência</li>
            <li>Informação do dispositivo e navegador (endereço IP, tipo de navegador, sistema operativo)</li>
            <li>Informação fornecida voluntariamente através de formulários de contacto (nome, email, mensagem)</li>
            <li>Dados de cookies e rastreamento, conforme descrito nas nossas práticas de cookies abaixo</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">2. Como Utilizamos a Sua Informação</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 text-sm">
            <li>Para operar, manter e melhorar o Site</li>
            <li>Para responder a pedidos submetidos através do formulário de contacto</li>
            <li>Para analisar tráfego e comportamento dos utilizadores e melhorar o nosso conteúdo e classificações</li>
            <li>Para cumprir obrigações legais e proteger contra fraude</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">3. Cookies e Rastreamento</h2>
          <p className="text-gray-400 text-sm">
            Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência de navegação, recordar preferências e medir o desempenho do site. Parceiros afiliados também podem definir cookies quando clica em links externos para rastrear referências. Pode gerir as preferências de cookies nas definições do seu navegador.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">4. Links de Terceiros</h2>
          <p className="text-gray-400 text-sm">
            O nosso Site contém links para operadores de jogo e organizações de apoio de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Encorajamo-lo a ler as respetivas políticas de privacidade antes de fornecer qualquer informação pessoal.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">5. Partilha de Dados</h2>
          <p className="text-gray-400 text-sm">
            Não vendemos as suas informações pessoais. Podemos partilhar dados com prestadores de serviços de confiança que nos ajudam a operar o Site (como fornecedores de análise ou alojamento), sujeitos a acordos de confidencialidade. Também podemos divulgar informação se exigido por lei.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">6. Retenção de Dados</h2>
          <p className="text-gray-400 text-sm">
            Retemos informação pessoal apenas durante o tempo necessário para cumprir os fins descritos nesta política, salvo se um período de retenção mais longo for exigido por lei.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">7. Os Seus Direitos</h2>
          <p className="text-gray-400 text-sm">
            Dependendo da sua localização, pode ter o direito de aceder, corrigir, eliminar ou restringir o tratamento dos seus dados pessoais. Para exercer estes direitos, contacte-nos em{' '}
            <a href="mailto:support@sortemestre.com" className="text-[#00F0FF] hover:underline">
              support@sortemestre.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">8. Segurança</h2>
          <p className="text-gray-400 text-sm">
            Implementamos medidas técnicas e organizacionais razoáveis para proteger a sua informação. No entanto, nenhum método de transmissão pela internet é completamente seguro e não podemos garantir segurança absoluta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">9. Alterações a Esta Política</h2>
          <p className="text-gray-400 text-sm">
            Podemos atualizar esta Política de Privacidade periodicamente. As alterações serão publicadas nesta página com uma data atualizada. Encorajamo-lo a rever esta política regularmente.
          </p>
        </section>

        <p className="text-xs text-gray-500 pt-4 border-t border-gray-800">
          Última atualização: Junho de 2026
        </p>
      </article>
    </ContentPageLayout>
  );
}
