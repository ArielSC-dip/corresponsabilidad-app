import type { AnonymousMetric } from '@/types';

// Analítica simulada y completamente anónima.
// Nunca se asocia a personas: son agregados de uso del contenido.
export const anonymousMetrics: AnonymousMetric[] = [
  { label: 'Descargas de materiales', value: 12480, hint: 'Guías y recursos descargados' },
  { label: 'Visitas por módulo', value: 38920, hint: 'Aperturas de módulos temáticos' },
  { label: 'Visualizaciones de cápsulas', value: 51230, hint: 'Reproducciones de video' },
];

// Visitas agregadas por módulo (mock). Solo conteos, sin identidad.
export const moduleViews: { moduleId: string; views: number }[] = [
  { moduleId: 'm-corresponsabilidad', views: 9120 },
  { moduleId: 'm-organizacion', views: 7430 },
  { moduleId: 'm-bienestar', views: 5980 },
  { moduleId: 'm-mayores', views: 4870 },
  { moduleId: 'm-crianza', views: 4510 },
  { moduleId: 'm-economia', views: 3360 },
  { moduleId: 'm-tiempo', views: 3650 },
];

// Visualizaciones agregadas por cápsula (mock).
export const capsuleViews: { capsuleId: string; views: number }[] = [
  { capsuleId: 'c-acuerdos', views: 8120 },
  { capsuleId: 'c-carga-invisible', views: 7640 },
  { capsuleId: 'c-rutinas', views: 6210 },
  { capsuleId: 'c-espacios', views: 5180 },
  { capsuleId: 'c-descanso', views: 6890 },
  { capsuleId: 'c-acompanamiento', views: 4720 },
  { capsuleId: 'c-crianza-equipo', views: 4530 },
  { capsuleId: 'c-decisiones', views: 3870 },
  { capsuleId: 'c-tiempo-propio', views: 4070 },
];

const numberFormatter = new Intl.NumberFormat('es-MX');

export const formatMetric = (value: number): string => numberFormatter.format(value);
