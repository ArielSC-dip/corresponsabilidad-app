import { Link, useParams } from 'react-router-dom';
import Container from '@/components/Container';
import CapsuleCard from '@/components/CapsuleCard';
import Icon from '@/components/Icon';
import NotFound from '@/pages/NotFound';
import { getModuleBySlug } from '@/data/modules';
import { getCapsulesByModule } from '@/data/capsules';

// El encabezado usa siempre el verde suave; el ícono conserva el color del tema.
const accentText: Record<string, string> = {
  primary: 'text-primary-700',
  accent: 'text-accent-700',
  sand: 'text-sand-500',
};

export default function ModuleDetail() {
  const { slug } = useParams();
  const module = slug ? getModuleBySlug(slug) : undefined;

  if (!module) return <NotFound />;

  const capsules = getCapsulesByModule(module.id);

  return (
    <>
      {/* Encabezado del módulo */}
      <section className="bg-gradient-to-b from-primary-50 to-ink-50">
        <Container className="py-12 sm:py-16">
          <nav className="mb-6 flex items-center gap-2 text-sm text-ink-500" aria-label="Migas de pan">
            <Link to="/modulos" className="hover:text-ink-700">
              Módulos
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink-700">{module.title}</span>
          </nav>
          <div className="flex items-start gap-4">
            <span
              className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-ink-100/60 ${accentText[module.accent]}`}
            >
              <Icon name={module.icon} className="h-7 w-7" />
            </span>
            <div>
              <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
                {module.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-700">
                {module.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Cápsulas del módulo */}
      <Container as="section" className="py-12">
        <h2 className="font-display text-xl font-semibold text-ink-900">
          {capsules.length} {capsules.length === 1 ? 'cápsula' : 'cápsulas'} en este módulo
        </h2>
        {capsules.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capsules.map((capsule) => (
              <CapsuleCard key={capsule.id} capsule={capsule} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-ink-600">Pronto agregaremos cápsulas a este módulo.</p>
        )}

        <div className="mt-10">
          <Link to="/modulos" className="btn-ghost">
            ← Volver a todos los módulos
          </Link>
        </div>
      </Container>
    </>
  );
}
