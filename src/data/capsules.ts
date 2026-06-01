import type { Capsule } from '@/types';

// 9 cápsulas iniciales. Los vimeoId son de ejemplo (mock) para el embed.
export const capsules: Capsule[] = [
  {
    id: 'c-acuerdos',
    slug: 'acuerdos-que-suman',
    moduleId: 'm-corresponsabilidad',
    title: 'Acuerdos que suman',
    duration: '4 min',
    durationMinutes: 4,
    vimeoId: '76979871',
    description:
      'Una mirada a cómo los acuerdos explícitos hacen más visible y justa la organización del hogar.',
    reflection:
      'Poner en palabras quién hace qué no busca repartir culpas: busca abrir la conversación.',
    exerciseIds: ['e-acuerdos-1'],
  },
  {
    id: 'c-carga-invisible',
    slug: 'la-carga-invisible',
    moduleId: 'm-corresponsabilidad',
    title: 'La carga invisible',
    duration: '5 min',
    durationMinutes: 5,
    vimeoId: '76979871',
    description:
      'Esas tareas de planificación y anticipación que muchas veces no se ven, pero sostienen al hogar.',
    reflection:
      'Reconocer la carga mental del hogar es un primer paso para compartirla.',
    exerciseIds: ['e-carga-1'],
  },
  {
    id: 'c-rutinas',
    slug: 'rutinas-flexibles',
    moduleId: 'm-organizacion',
    title: 'Rutinas flexibles',
    duration: '3 min',
    durationMinutes: 3,
    vimeoId: '76979871',
    description: 'Cómo construir rutinas que acompañen a la familia sin volverse una imposición.',
    reflection: 'Una rutina útil es la que se adapta a la vida, no al revés.',
    exerciseIds: ['e-rutinas-1'],
  },
  {
    id: 'c-espacios',
    slug: 'espacios-compartidos',
    moduleId: 'm-organizacion',
    title: 'Espacios compartidos',
    duration: '4 min',
    durationMinutes: 4,
    vimeoId: '76979871',
    description: 'Ordenar los espacios comunes como una tarea de todas y todos.',
    reflection: 'Un espacio compartido se cuida mejor cuando todas las manos participan.',
    exerciseIds: ['e-espacios-1'],
  },
  {
    id: 'c-descanso',
    slug: 'el-derecho-al-descanso',
    moduleId: 'm-bienestar',
    title: 'El derecho al descanso',
    duration: '5 min',
    durationMinutes: 5,
    vimeoId: '76979871',
    description: 'El descanso también forma parte del bienestar del hogar.',
    reflection: 'Cuidar a otras personas es más sostenible cuando también nos cuidamos.',
    exerciseIds: ['e-descanso-1'],
  },
  {
    id: 'c-acompanamiento',
    slug: 'acompanar-con-respeto',
    moduleId: 'm-mayores',
    title: 'Acompañar con respeto',
    duration: '6 min',
    durationMinutes: 6,
    vimeoId: '76979871',
    description: 'El acompañamiento a personas mayores desde la autonomía y el cariño.',
    reflection: 'Acompañar no es decidir por la otra persona, sino estar presente.',
    exerciseIds: ['e-acompanamiento-1'],
  },
  {
    id: 'c-crianza-equipo',
    slug: 'criar-en-equipo',
    moduleId: 'm-crianza',
    title: 'Criar en equipo',
    duration: '4 min',
    durationMinutes: 4,
    vimeoId: '76979871',
    description: 'La crianza compartida como una construcción cotidiana.',
    reflection: 'No hay una sola forma de criar; sí muchas formas de hacerlo juntos.',
    exerciseIds: ['e-crianza-1'],
  },
  {
    id: 'c-decisiones',
    slug: 'decisiones-conversadas',
    moduleId: 'm-economia',
    title: 'Decisiones conversadas',
    duration: '4 min',
    durationMinutes: 4,
    vimeoId: '76979871',
    description: 'Las decisiones económicas del hogar también pueden compartirse.',
    reflection: 'Conversar sobre el dinero del hogar abre la puerta a decisiones más justas.',
    exerciseIds: ['e-decisiones-1'],
  },
  {
    id: 'c-tiempo-propio',
    slug: 'tiempo-de-cuidado-tiempo-propio',
    moduleId: 'm-tiempo',
    title: 'Tiempo de cuidado, tiempo propio',
    duration: '5 min',
    durationMinutes: 5,
    vimeoId: '76979871',
    description: 'Reconocer el tiempo dedicado a cuidar y también el tiempo para una misma.',
    reflection: 'Repartir el tiempo de cuidado libera tiempo para todas las personas del hogar.',
    exerciseIds: ['e-tiempo-1'],
  },
];

export const getCapsuleBySlug = (slug: string): Capsule | undefined =>
  capsules.find((c) => c.slug === slug);

export const getCapsuleById = (id: string): Capsule | undefined =>
  capsules.find((c) => c.id === id);

export const getCapsulesByModule = (moduleId: string): Capsule[] =>
  capsules.filter((c) => c.moduleId === moduleId);

/** Cápsulas recientes (mock): las últimas agregadas al catálogo */
export const getRecentCapsules = (n = 3): Capsule[] => capsules.slice(0, n);
