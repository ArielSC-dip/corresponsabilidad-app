import type { Module } from '@/types';

// Estructura escalable: agregar un nuevo módulo es añadir un objeto a este arreglo
// y, opcionalmente, sus cápsulas en data/capsules.ts.
export const modules: Module[] = [
  {
    id: 'm-corresponsabilidad',
    slug: 'corresponsabilidad-familiar',
    title: 'Corresponsabilidad Familiar',
    shortDescription: 'Repartir los cuidados como un proyecto común.',
    description:
      'Exploramos qué significa compartir las responsabilidades del hogar de forma equilibrada y cómo las conversaciones cotidianas pueden abrir oportunidades de colaboración.',
    icon: 'hands',
    accent: 'primary',
    capsuleIds: ['c-acuerdos', 'c-carga-invisible'],
  },
  {
    id: 'm-organizacion',
    slug: 'organizacion-del-hogar',
    title: 'Organización del Hogar',
    shortDescription: 'Acuerdos sencillos para el día a día.',
    description:
      'Ideas para ordenar tareas, rutinas y espacios de manera flexible, respetando los ritmos de cada familia.',
    icon: 'home',
    accent: 'sand',
    capsuleIds: ['c-rutinas', 'c-espacios'],
  },
  {
    id: 'm-bienestar',
    slug: 'bienestar-familiar',
    title: 'Bienestar Familiar',
    shortDescription: 'Cuidar el clima emocional de la casa.',
    description:
      'Pequeñas prácticas para sostener el bienestar colectivo, el descanso y los vínculos dentro del hogar.',
    icon: 'heart',
    accent: 'accent',
    capsuleIds: ['c-descanso'],
  },
  {
    id: 'm-mayores',
    slug: 'cuidado-de-personas-mayores',
    title: 'Cuidado de Personas Mayores',
    shortDescription: 'Acompañar con respeto y autonomía.',
    description:
      'Reflexiones sobre el cuidado de personas adultas mayores y dependientes, distribuyendo el acompañamiento entre quienes conviven.',
    icon: 'elder',
    accent: 'primary',
    capsuleIds: ['c-acompanamiento'],
  },
  {
    id: 'm-crianza',
    slug: 'crianza-y-acompanamiento',
    title: 'Crianza y Acompañamiento',
    shortDescription: 'Criar en equipo, sin recetas únicas.',
    description:
      'Miradas sobre la crianza compartida y el acompañamiento de niñas y niños desde la corresponsabilidad.',
    icon: 'child',
    accent: 'accent',
    capsuleIds: ['c-crianza-equipo'],
  },
  {
    id: 'm-economia',
    slug: 'economia-domestica',
    title: 'Economía Doméstica',
    shortDescription: 'Decisiones de hogar, conversadas.',
    description:
      'Cómo las decisiones económicas del hogar también pueden compartirse y conversarse con transparencia.',
    icon: 'wallet',
    accent: 'sand',
    capsuleIds: ['c-decisiones'],
  },
  {
    id: 'm-tiempo',
    slug: 'gestion-del-tiempo',
    title: 'Gestión del Tiempo',
    shortDescription: 'Tiempo para todas y todos.',
    description:
      'El tiempo como recurso compartido: reconocer el tiempo de cuidado y el tiempo propio dentro de la familia.',
    icon: 'clock',
    accent: 'primary',
    capsuleIds: ['c-tiempo-propio'],
  },
];

export const getModuleBySlug = (slug: string): Module | undefined =>
  modules.find((m) => m.slug === slug);

export const getModuleById = (id: string): Module | undefined =>
  modules.find((m) => m.id === id);
