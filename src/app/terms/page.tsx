import { Metadata } from 'next';
import ContentPageLayout from '@/components/layout/ContentPageLayout';

export const metadata: Metadata = {
  title: 'Termos e Condições | Sorte Mestre',
  description: 'Leia os termos e condições que regem a utilização do website e serviços Sorte Mestre.',
  alternates: { canonical: 'https://sortemestre.com/terms' },
};

export default function TermsPage() {
  return (
    <ContentPageLayout
      badge="Legal"
      title="Termos e"
      titleHighlight="Condições"
      description="Leia estes termos cuidadosamente antes de utilizar o Sorte Mestre. Ao aceder ao nosso site, concorda com as seguintes condições."
    >
      <article className="bg-[#0a0a1f] rounded-2xl p-8 border border-[#12122b] space-y-6 text-gray-300 font-poppins leading-relaxed">
        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">1. Aceitação dos Termos</h2>
          <p className="text-gray-400 text-sm">
            Ao aceder e utilizar sortemestre.com (&quot;o Site&quot;), aceita e concorda em ficar vinculado a estes Termos e Condições. Se não concordar, por favor não utilize o Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">2. Elegibilidade</h2>
          <p className="text-gray-400 text-sm">
            O Site destina-se apenas a utilizadores com 18 anos ou mais. O jogo online pode ser ilegal na sua jurisdição. É sua responsabilidade garantir que o acesso a plataformas de jogo através dos nossos links cumpre todas as leis aplicáveis na sua localização.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">3. Finalidade Informativa</h2>
          <p className="text-gray-400 text-sm">
            O Sorte Mestre é um serviço independente de informação e comparação. Não operamos nenhuma plataforma de jogo, não processamos pagamentos nem aceitamos apostas. Toda a atividade de jogo ocorre em sites de terceiros, que possuem os seus próprios termos e condições.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">4. Divulgação de Afiliados</h2>
          <p className="text-gray-400 text-sm">
            Podemos receber compensação quando clica em links para operadores de jogo de terceiros e se regista ou deposita. Esta compensação ajuda-nos a manter o Site, mas não influencia as nossas classificações editoriais, que se baseiam em testes independentes e critérios de avaliação.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">5. Precisão da Informação</h2>
          <p className="text-gray-400 text-sm">
            Esforçamo-nos por manter ofertas de bónus, detalhes de plataformas e classificações precisos e atualizados. No entanto, os operadores podem alterar termos sem aviso prévio. Verifique sempre as ofertas e condições atuais diretamente no website do operador antes de se registar ou depositar.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">6. Limitação de Responsabilidade</h2>
          <p className="text-gray-400 text-sm">
            O Sorte Mestre é disponibilizado &quot;tal como está&quot;, sem garantias de qualquer tipo. Não somos responsáveis por quaisquer perdas, danos ou disputas decorrentes da sua utilização de plataformas de jogo de terceiros ligadas a partir do nosso Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">7. Propriedade Intelectual</h2>
          <p className="text-gray-400 text-sm">
            Todo o conteúdo do Site, incluindo texto, gráficos, logótipos e design, é propriedade do Sorte Mestre ou dos seus licenciadores e está protegido pelas leis de direitos de autor e marcas aplicáveis. Não pode reproduzir ou distribuir o nosso conteúdo sem consentimento prévio por escrito.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">8. Alterações aos Termos</h2>
          <p className="text-gray-400 text-sm">
            Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações serão publicadas nesta página com uma data de atualização. A utilização continuada do Site após alterações constitui aceitação dos Termos revistos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-montserrat font-bold text-white mb-3">9. Contacto</h2>
          <p className="text-gray-400 text-sm">
            Para questões sobre estes Termos, contacte-nos em{' '}
            <a href="mailto:support@sortemestre.com" className="text-[#00F0FF] hover:underline">
              support@sortemestre.com
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-gray-500 pt-4 border-t border-gray-800">
          Última atualização: Junho de 2026
        </p>
      </article>
    </ContentPageLayout>
  );
}
