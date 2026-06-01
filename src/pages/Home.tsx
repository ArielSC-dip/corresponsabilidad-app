import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import NewsCard from '@/components/NewsCard';
import WorkshopCard from '@/components/WorkshopCard';
import Icon from '@/components/Icon';
import { getModuleById } from '@/data/modules';
import { getCapsuleById } from '@/data/capsules';
import { getRecentNews } from '@/data/news';
import { getUpcomingWorkshops } from '@/data/workshops';
import { getRandomReflection } from '@/data/reflections';
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

// Módulo sugerido para "Empieza por aquí"
const FEATURED_MODULE_ID = 'm-corresponsabilidad';

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
  // Se elige una reflexión al montar la portada
  const [reflection] = useState(getRandomReflection);
  const recentNews = getRecentNews(3);
  const upcomingWorkshops = getUpcomingWorkshops(2);
  const featured = getModuleById(FEATURED_MODULE_ID);

  return (
    <>
      {/* Hero principal */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-ink-50">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-100/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-sand-100/25 blur-3xl"
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
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-primary-50 via-sand-50 to-ink-50 p-8 text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-sm ring-1 ring-primary-100">
                  <Icon name="home" className="h-8 w-8" />
                </span>
                <p className="font-display text-xl font-medium text-ink-800">
                  «Detrás de cada hogar hay tareas, cuidados y acuerdos que hacen posible el
                  bienestar de todos.»
                </p>
                <p className="text-sm text-ink-600">Una invitación a conversar, no a evaluar.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContinueBanner />

      {/* Empieza por aquí: módulo sugerido */}
      {featured && (
        <Container as="section" className="py-16">
          <div className="card grid items-center gap-8 overflow-hidden p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                Empieza por aquí
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-600">
                {featured.description}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to={`/modulos/${featured.slug}`} className="btn-primary">
                  Explorar este módulo
                </Link>
                <Link to="/modulos" className="btn-ghost">
                  Ver todos los temas
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <span className="inline-flex h-28 w-28 items-center justify-center rounded-3xl bg-primary-50 text-primary-600">
                <Icon name={featured.icon} className="h-14 w-14" />
              </span>
            </div>
          </div>
        </Container>
      )}

      {/* Reflexión destacada */}
      <section className="bg-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Icon name="leaf" className="mx-auto h-8 w-8 text-primary-200" />
            <p className="mt-5 font-display text-2xl font-medium leading-relaxed sm:text-3xl">
              «{reflection}»
            </p>
          </div>
        </Container>
      </section>

      {/* Novedades */}
      <Container as="section" className="py-16">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Novedades" title="Lo último de la iniciativa" />
          <Link
            to="/novedades"
            className="hidden shrink-0 text-sm font-medium text-primary-700 hover:underline sm:inline"
          >
            Ver todas →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recentNews.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link to="/novedades" className="btn-secondary w-full">
            Ver todas las novedades
          </Link>
        </div>
      </Container>

      {/* Talleres */}
      <section className="bg-white py-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Talleres y actividades"
              title="Encuentros para conversar"
              description="Espacios voluntarios de diálogo. Participar es opcional y no requiere nada previo."
            />
            <Link
              to="/talleres"
              className="hidden shrink-0 text-sm font-medium text-primary-700 hover:underline sm:inline"
            >
              Ver todos →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {upcomingWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link to="/talleres" className="btn-secondary w-full">
              Ver todos los talleres
            </Link>
          </div>
        </Container>
      </section>

      {/* Beneficios */}
      <Container as="section" className="py-16">
        <SectionHeading
          align="center"
          eyebrow="Por qué es diferente"
          title="Una experiencia libre, cálida y sin presión"
          description="Nos inspiramos en lo mejor del aprendizaje digital, pero dejamos fuera la competencia, las evaluaciones y la presión."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl bg-white p-6 ring-1 ring-ink-100/60">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                <Icon name={b.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink-900">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{b.text}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Llamado a explorar */}
      <Container as="section" className="pb-16">
        <div className="card relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 p-10 text-center text-white sm:p-14">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Tómate un momento para explorar
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-100">
            No necesitas registrarte ni dejar ningún dato. Solo elige un tema que te interese y
            empieza a mirar.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/modulos" className="btn bg-white text-primary-700 hover:bg-primary-50">
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
