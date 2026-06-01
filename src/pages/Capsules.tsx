import { useState } from 'react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import CapsuleCard from '@/components/CapsuleCard';
import { capsules } from '@/data/capsules';
import { modules } from '@/data/modules';

export default function Capsules() {
  const [activeModule, setActiveModule] = useState<string | 'all'>('all');

  const filtered =
    activeModule === 'all' ? capsules : capsules.filter((c) => c.moduleId === activeModule);

  const filters = [{ id: 'all' as const, title: 'Todas' }, ...modules.map((m) => ({ id: m.id, title: m.title }))];

  return (
    <Container as="section" className="py-12 sm:py-16">
      <SectionHeading
        eyebrow="Cápsulas"
        title="Videos breves para mirar y pensar"
        description="Cada cápsula dura solo unos minutos. Míralas en el orden que prefieras: no hay avances que desbloquear ni nada que completar."
      />

      {/* Filtros por módulo */}
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar por módulo">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActiveModule(f.id)}
            aria-pressed={activeModule === f.id}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeModule === f.id
                ? 'bg-primary-600 text-white'
                : 'bg-white text-ink-600 ring-1 ring-inset ring-ink-200 hover:bg-ink-100'
            }`}
          >
            {f.title}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((capsule) => (
          <CapsuleCard key={capsule.id} capsule={capsule} />
        ))}
      </div>
    </Container>
  );
}
