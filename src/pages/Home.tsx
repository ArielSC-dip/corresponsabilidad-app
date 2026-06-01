import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import ModuleCard from '@/components/ModuleCard';
import CapsuleCard from '@/components/CapsuleCard';
import Icon from '@/components/Icon';
import { modules } from '@/data/modules';
import { getRecentCapsules, getCapsuleById } from '@/data/capsules';
import { useExploration } from '@/hooks/useExploration';
import type { IconName } from '@/types';

const benefits: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'leaf',
    title: 'A tu ritmo, sin presión',
    text: 'No hay tareas obligatorias ni fechas límite. Exploras lo que quieras, cuando quieras.',
  },
  {
    icon: 'compass',
    title: 'Sin registros ni perfiles',
    text: 'No pedimos datos personales ni inicio de sesión. Tu participación es libre y anónima.',
  },
  {
    icon: 'sparkles',
    title: 'Microaprendizaje cálido',
    text: 'Cápsulas breves y reflexiones suaves, pensadas para inspirar conversaciones en casa.',
  },
  {
    icon: 'heart',
    title: 'Sin evaluaciones',
    text: 'No hay respuestas correctas, ni puntuaciones, ni certificados. Solo reflexión compartida.',
  },
];

function ContinueBanner() {
  const { lastCapsuleId } = useExploration();
  if (!lastCapsuleId) return null;
  const capsule = getCapsuleById(lastCapsuleId);
  if (!capsule) return null;

  return (
    <Container className="pt-8">
      <Link
        to={`/capsulas/${capsule.slug}`}
        className="card flex items-center gap-4 p-4 transition hover:shadow-soft sm:p-5"
      >
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <Icon name="play" className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
            Última cápsula que viste
          </p>
          <p className="truncate font-display font-semibold text-ink-900">{capsule.title}</p>
        </div>
        <span className="hidden text-sm font-medium text-primary-700 sm:inline">Continuar →</span>
      </Link>
    </Container>
  );
}

export default function Home() {
  const recent = getRecentCapsules(3);

  return (
    <>
      {/* Hero principal */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-100 via-primary-50 to-ink-50">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sand-100/60 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-accent-100/50 blur-3xl"
        />
        <Container className="relative grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 ring-1 ring-primary-100">
              <Icon name="hands" className="h-4 w-4" />
              Iniciativa de la Cámara de Diputados
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              Cuidar el hogar es una tarea de todas las personas
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
              Un espacio para reflexionar, a tu propio ritmo, sobre cómo compartimos los cuidados,
              las tareas y el bienestar dentro de casa. Sin registros, sin evaluaciones, sin
              presión.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/modulos" className="btn-primary">
                Explorar los módulos
              </Link>
              <Link to="/iniciativa" className="btn-secondary">
                Conocer la iniciativa
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="card overflow-hidden p-2">
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-primary-100 via-sand-100 to-accent-100 p-8 text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-primary-600 shadow-sm">
                  <Icon name="home" className="h-8 w-8" />
                </span>
                <p className="font-display text-xl font-medium text-ink-800">
                  «Cada hogar encuentra formas distintas de organizarse.»
                </p>
                <p className="text-sm text-ink-600">Una invitación a conversar, no a evaluar.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContinueBanner />

      {/* Explicación institucional */}
      <Container as="section" className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Sobre este espacio"
              title="Una conversación sobre la corresponsabilidad en los cuidados"
              description="Esta plataforma busca fomentar la reflexión sobre cómo organizamos la vida en común: las tareas domésticas, los cuidados cotidianos, el bienestar del hogar y el acompañamiento de las personas que más lo necesitan. No es una capacitación ni una evaluación: es una invitación abierta a mirar lo cotidiano con otros ojos."
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Organización familiar',
                'Tareas domésticas',
                'Cuidados cotidianos',
                'Bienestar del hogar',
                'Cuidado de personas dependientes',
                'Gestión compartida de actividades',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-700">
                  <Icon name="leaf" className="h-4 w-4 shrink-0 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card bg-primary-700 p-7 text-white">
            <p className="font-display text-lg leading-relaxed">
              «Reflexionar sobre nuestras actividades cotidianas puede ayudar a identificar
              oportunidades de colaboración.»
            </p>
            <p className="mt-4 text-sm text-primary-100">
              Participar es completamente voluntario. No hay seguimiento individual ni datos
              personales de por medio.
            </p>
          </div>
        </div>
      </Container>

      {/* Acceso rápido a módulos */}
      <Container as="section" className="py-4">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Módulos" title="Temas para explorar" />
          <Link to="/modulos" className="hidden shrink-0 text-sm font-medium text-primary-700 hover:underline sm:inline">
            Ver todos →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.slice(0, 6).map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link to="/modulos" className="btn-secondary w-full">
            Ver todos los módulos
          </Link>
        </div>
      </Container>

      {/* Cápsulas recientes */}
      <Container as="section" className="py-16">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Cápsulas recientes" title="Videos breves para mirar y pensar" />
          <Link to="/capsulas" className="hidden shrink-0 text-sm font-medium text-primary-700 hover:underline sm:inline">
            Ver todas →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((capsule) => (
            <CapsuleCard key={capsule.id} capsule={capsule} />
          ))}
        </div>
      </Container>

      {/* Beneficios */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Por qué es diferente"
            title="Una experiencia libre, cálida y sin presión"
            description="Nos inspiramos en lo mejor del aprendizaje digital, pero dejamos fuera la competencia, las evaluaciones y la presión."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-ink-50 p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-900">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{b.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Llamado a explorar */}
      <Container as="section" className="py-16">
        <div className="card relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 p-10 text-center text-white sm:p-14">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Tómate un momento para explorar
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-100">
            No necesitas registrarte ni dejar ningún dato. Solo elige un tema que te interese y
            empieza a mirar.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/modulos"
              className="btn bg-white text-primary-700 hover:bg-primary-50"
            >
              Explorar contenido
            </Link>
            <Link
              to="/comunidades"
              className="btn bg-primary-500/40 text-white ring-1 ring-inset ring-white/30 hover:bg-primary-500/60"
            >
              Ver comunidades temáticas
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
