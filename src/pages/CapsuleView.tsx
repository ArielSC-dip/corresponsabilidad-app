import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '@/components/Container';
import VideoPlayer from '@/components/VideoPlayer';
import ReflectiveExercise from '@/components/ReflectiveExercise';
import CapsuleCard from '@/components/CapsuleCard';
import Icon from '@/components/Icon';
import NotFound from '@/pages/NotFound';
import { getCapsuleBySlug, getCapsulesByModule } from '@/data/capsules';
import { getModuleById } from '@/data/modules';
import { getExercisesByIds } from '@/data/exercises';
import { useExploration } from '@/hooks/useExploration';

export default function CapsuleView() {
  const { slug } = useParams();
  const capsule = slug ? getCapsuleBySlug(slug) : undefined;
  const { markExplored } = useExploration();

  // Marca la cápsula como explorada (seguimiento ligero, solo local).
  useEffect(() => {
    if (capsule) markExplored(capsule.id);
  }, [capsule, markExplored]);

  if (!capsule) return <NotFound />;

  const module = getModuleById(capsule.moduleId);
  const exercises = getExercisesByIds(capsule.exerciseIds);
  const related = module
    ? getCapsulesByModule(module.id).filter((c) => c.id !== capsule.id)
    : [];

  return (
    <Container as="section" className="py-10 sm:py-12">
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-ink-500" aria-label="Migas de pan">
        <Link to="/capsulas" className="hover:text-ink-700">
          Cápsulas
        </Link>
        {module && (
          <>
            <span aria-hidden>/</span>
            <Link to={`/modulos/${module.slug}`} className="hover:text-ink-700">
              {module.title}
            </Link>
          </>
        )}
        <span aria-hidden>/</span>
        <span className="text-ink-700">{capsule.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        {/* Columna principal */}
        <div>
          <VideoPlayer vimeoId={capsule.vimeoId} title={capsule.title} />

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="clock" className="h-4 w-4" />
              {capsule.duration}
            </span>
            {module && (
              <Link
                to={`/modulos/${module.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-primary-700"
              >
                <Icon name={module.icon} className="h-4 w-4" />
                {module.title}
              </Link>
            )}
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold text-ink-900">{capsule.title}</h1>
          <p className="mt-3 text-base leading-relaxed text-ink-700">{capsule.description}</p>

          {/* Reflexión principal */}
          <div className="mt-6 rounded-2xl bg-sand-50 p-6 ring-1 ring-sand-200">
            <p className="text-xs font-semibold uppercase tracking-wide text-sand-500">
              Reflexión principal
            </p>
            <p className="mt-2 font-display text-lg leading-relaxed text-ink-800">
              {capsule.reflection}
            </p>
          </div>

          {/* Ejercicios reflexivos opcionales */}
          {exercises.length > 0 && (
            <div className="mt-10 space-y-5">
              <h2 className="font-display text-xl font-semibold text-ink-900">
                Para seguir pensando
              </h2>
              {exercises.map((exercise) => (
                <ReflectiveExercise key={exercise.id} exercise={exercise} />
              ))}
            </div>
          )}
        </div>

        {/* Columna lateral: otras cápsulas del módulo */}
        <aside className="lg:sticky lg:top-24">
          <h2 className="font-display text-lg font-semibold text-ink-900">
            {module ? `Más de ${module.title}` : 'Otras cápsulas'}
          </h2>
          {related.length > 0 ? (
            <div className="mt-4 space-y-4">
              {related.map((c) => (
                <CapsuleCard key={c.id} capsule={c} />
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-ink-600">
              Esta es la única cápsula del módulo por ahora.
            </p>
          )}
          <Link to="/capsulas" className="btn-ghost mt-4 w-full">
            Ver todas las cápsulas
          </Link>
        </aside>
      </div>
    </Container>
  );
}
