import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import WorkshopCard from '@/components/WorkshopCard';
import Icon from '@/components/Icon';
import { workshops } from '@/data/workshops';

export default function Workshops() {
  return (
    <>
      <PageHeader
        eyebrow="Talleres y actividades"
        title="Encuentros para conversar"
        description="Espacios voluntarios de diálogo en torno a los cuidados del hogar. No son capacitaciones ni evaluaciones: son invitaciones abiertas a participar si te interesa."
      />
      <Container as="section" className="py-12">
        <div className="inline-flex items-start gap-2 rounded-xl bg-primary-50 p-4 text-sm text-primary-800">
          <Icon name="leaf" className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
          <p>
            Participar es completamente opcional y no requiere haber visto ninguna cápsula antes.
            Súmate con la curiosidad que tengas.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </Container>
    </>
  );
}
