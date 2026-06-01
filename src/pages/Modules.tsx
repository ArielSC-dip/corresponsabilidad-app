import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import ModuleCard from '@/components/ModuleCard';
import { modules } from '@/data/modules';

export default function Modules() {
  return (
    <Container as="section" className="py-12 sm:py-16">
      <SectionHeading
        eyebrow="Catálogo de módulos"
        title="Elige un tema para explorar"
        description="Cada módulo reúne cápsulas breves y reflexiones sobre un aspecto de la vida en común. No hay un orden obligatorio: empieza por donde te llame la atención."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </Container>
  );
}
