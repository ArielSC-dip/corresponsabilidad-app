import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '@/components/Container';
import VideoPlayer from '@/components/VideoPlayer';
import ReflectiveExercise from '@/components/ReflectiveExercise';
import Memorama from '@/components/Memorama';
import CapsuleCard from '@/components/CapsuleCard';
import Icon from '@/components/Icon';
import NotFound from '@/pages/NotFound';
import { getCapsuleBySlug, getCapsulesByModule } from '@/data/capsules';
import { getModuleById } from '@/data/modules';
import { getExerciseById } from '@/data/exercises';
import { useExploration } from '@/hooks/useExploration';

export default function CapsuleView() {
  const { slug } = useParams();
  const capsule = slug ? getCapsuleBySlug(slug) : undefined;
  const { markExplored } = useExploration();

  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [activityOpen, setActivityOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const activityRef = useRef<HTMLDivElement>(null);

  // Marca la cápsula como explorada (seguimiento ligero, solo local).
  useEffect(() => {
    if (capsule) markExplored(capsule.id);
  }, [capsule, markExplored]);

  if (!capsule) return <NotFound />;

  const module = getModuleById(capsule.moduleId);
  const related = module
    ? getCapsulesByModule(module.id).filter((c) => c.id !== capsule.id)
    : [];

  const activity = capsule.activity;
  const isMemorama = activity.type === 'memorama';
  const formExercise = activity.type === 'formulario' ? getExerciseById(activity.exerciseId) : undefined;
  const activityNoun = isMemorama ? 'un memorama' : 'una breve reflexión';

  const openActivity = () => {
    setActivityOpen(true);
    setBannerDismissed(true);
    window.setTimeout(
      () => activityRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      60,
    );
  };

  const showStartBanner = started && !ended && !activityOpen && !bannerDismissed;
  const showEndBanner = ended && !activityOpen && !bannerDismissed;

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
          <VideoPlayer
            vimeoId={capsule.vimeoId}
            title={capsule.title}
            onStart={() => setStarted(true)}
            onEnded={() => setEnded(true)}
          />

          {/* Banner sutil al iniciar */}
          {showStartBanner && (
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-ink-100/70 px-4 py-3 text-sm text-ink-600">
              <Icon name="sparkles" className="h-4 w-4 shrink-0 text-primary-600" />
              <span className="flex-1">Al terminar, te espera una actividad opcional.</span>
              <button
                type="button"
                onClick={openActivity}
                className="shrink-0 font-medium text-primary-700 underline-offset-2 hover:underline"
              >
                Verla ahora
              </button>
            </div>
          )}

          {/* Banner al terminar */}
          {showEndBanner && (
            <div className="mt-4 flex flex-col gap-3 rounded-xl bg-primary-50 p-4 ring-1 ring-primary-100 sm:flex-row sm:items-center">
              <Icon name="sparkles" className="h-5 w-5 shrink-0 text-primary-600" />
              <p className="flex-1 text-sm text-primary-900">
                ¿Quieres hacer una actividad opcional sobre esta cápsula? Es {activityNoun}, sin
                puntajes ni evaluación.
              </p>
              <div className="flex shrink-0 gap-2">
                <button type="button" onClick={openActivity} className="btn-primary">
                  Sí, ver actividad
                </button>
                <button
                  type="button"
                  onClick={() => setBannerDismissed(true)}
                  className="btn-ghost"
                >
                  Ahora no
                </button>
              </div>
            </div>
          )}

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

          {/* Actividad opcional: oculta hasta que la persona quiera verla */}
          <div ref={activityRef} className="mt-10 scroll-mt-24">
            {activityOpen ? (
              <>
                <h2 className="font-display text-xl font-semibold text-ink-900">
                  Actividad opcional
                </h2>
                <div className="mt-4">
                  {isMemorama ? (
                    <Memorama
                      intro={activity.intro}
                      pairs={activity.pairs}
                      reflectionMessage={activity.reflectionMessage}
                    />
                  ) : formExercise ? (
                    <ReflectiveExercise exercise={formExercise} />
                  ) : null}
                </div>
              </>
            ) : (
              <button
                type="button"
                onClick={openActivity}
                className="btn-ghost inline-flex items-center gap-2 text-primary-700"
              >
                <Icon name="sparkles" className="h-4 w-4" />
                Hacer la actividad opcional ({isMemorama ? 'memorama' : 'reflexión'})
              </button>
            )}
          </div>
        </div>

        {/* Columna lateral: otras cápsulas del módulo */}
        <aside className="lg:sticky lg:top-28">
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
