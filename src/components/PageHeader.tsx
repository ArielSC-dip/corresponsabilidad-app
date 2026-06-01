import type { ReactNode } from 'react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  /** Contenido extra dentro de la banda (p. ej. una nota o aviso) */
  children?: ReactNode;
}

// Encabezado de página con banda de degradado verde suave, consistente con
// la página "La iniciativa". El contenido principal va debajo, sobre ink-50.
export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-ink-50">
      <Container className="py-12 sm:py-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        {children}
      </Container>
    </section>
  );
}
