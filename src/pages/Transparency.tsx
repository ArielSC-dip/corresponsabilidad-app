import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Icon from '@/components/Icon';
import { anonymousMetrics, moduleViews, capsuleViews, formatMetric } from '@/data/metrics';
import { getModuleById } from '@/data/modules';
import { getCapsuleById } from '@/data/capsules';
import { useExploration } from '@/hooks/useExploration';

// Barra simple de proporción (solo informativa, no competitiva).
function ProportionBar({ value, max }: { value: number; max: number }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100" aria-hidden>
      <div className="h-full rounded-full bg-primary-400" style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function Transparency() {
  const { hasData, exploredCapsuleIds, reset } = useExploration();
  const maxModule = Math.max(...moduleViews.map((m) => m.views));
  const maxCapsule = Math.max(...capsuleViews.map((c) => c.views));

  return (
    <Container as="section" className="py-12 sm:py-16">
      <SectionHeading
        eyebrow="Datos y transparencia"
        title="Cómo cuidamos tu participación"
        description="Las cifras que mostramos son agregadas, anónimas y simuladas para esta demostración. Nunca se asocian a personas: no sabemos quién eres ni guardamos datos personales."
      />

      {/* Métricas agregadas anónimas */}
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {anonymousMetrics.map((m) => (
          <div key={m.label} className="card p-6">
            <p className="font-display text-3xl font-semibold text-primary-700">
              {formatMetric(m.value)}
            </p>
            <p className="mt-1 text-sm font-medium text-ink-900">{m.label}</p>
            <p className="mt-0.5 text-xs text-ink-500">{m.hint}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* Visitas por módulo */}
        <div>
          <h3 className="font-display text-lg font-semibold text-ink-900">Visitas por módulo</h3>
          <p className="mt-1 text-sm text-ink-500">Conteos agregados, sin identidad.</p>
          <ul className="mt-5 space-y-4">
            {moduleViews.map((mv) => {
              const module = getModuleById(mv.moduleId);
              if (!module) return null;
              return (
                <li key={mv.moduleId}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-ink-700">{module.title}</span>
                    <span className="font-medium text-ink-900">{formatMetric(mv.views)}</span>
                  </div>
                  <ProportionBar value={mv.views} max={maxModule} />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Visualizaciones por cápsula */}
        <div>
          <h3 className="font-display text-lg font-semibold text-ink-900">
            Visualizaciones por cápsula
          </h3>
          <p className="mt-1 text-sm text-ink-500">Reproducciones de video agregadas.</p>
          <ul className="mt-5 space-y-4">
            {capsuleViews.map((cv) => {
              const capsule = getCapsuleById(cv.capsuleId);
              if (!capsule) return null;
              return (
                <li key={cv.capsuleId}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-ink-700">{capsule.title}</span>
                    <span className="font-medium text-ink-900">{formatMetric(cv.views)}</span>
                  </div>
                  <ProportionBar value={cv.views} max={maxCapsule} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Datos locales de la persona */}
      <div className="mt-14 card flex flex-col gap-4 bg-sand-50 p-7 ring-sand-200 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <Icon name="leaf" className="mt-0.5 h-6 w-6 shrink-0 text-primary-600" />
          <div>
            <h3 className="font-display text-lg font-semibold text-ink-900">
              Tus datos locales de exploración
            </h3>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-600">
              {hasData
                ? `Solo en este navegador recordamos qué cápsulas has explorado (${exploredCapsuleIds.length}). Esto nunca sale de tu dispositivo y puedes borrarlo ahora mismo.`
                : 'Por ahora no hay nada guardado en este navegador. Si exploras cápsulas, recordaremos cuáles viste, solo localmente.'}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={reset}
          disabled={!hasData}
          className="btn-secondary shrink-0 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Borrar mis datos locales
        </button>
      </div>
    </Container>
  );
}
