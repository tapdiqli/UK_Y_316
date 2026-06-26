import { Metadata } from 'next';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | Sorte Mestre',
  description: 'Entre em contacto com a equipa Sorte Mestre para apoio, parcerias ou questões gerais.',
  alternates: { canonical: 'https://sortemestre.com/contact' },
};

export default function ContactPage() {
  return (
    <ContentPageLayout
      badge="Estamos Aqui para Ajudar"
      title="Contacte a"
      titleHighlight="Nossa Equipa"
      description="Tem uma questão sobre as nossas classificações, um pedido de parceria ou feedback? Adoraríamos ouvi-lo."
    >
      <ContactForm />
    </ContentPageLayout>
  );
}
