import type { Capsule } from '@/types';

// 9 cápsulas iniciales. Los vimeoId son de ejemplo (mock) para el embed.
// Cada cápsula tiene UNA actividad opcional: 'formulario' (reflexión sin
// respuestas correctas) o 'memorama' (relacionar ideas, sin puntaje ni tiempo).
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
    activity: { type: 'formulario', exerciseId: 'e-acuerdos-1' },
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
    activity: {
      type: 'memorama',
      intro: 'Relaciona cada palabra con lo que representa en la carga invisible del hogar.',
      pairs: [
        { a: 'Planificar', b: 'Anticipar lo que hará falta' },
        { a: 'Recordar', b: 'Tener presentes fechas y pendientes' },
        { a: 'Organizar', b: 'Coordinar quién hace qué' },
        { a: 'Compartir', b: 'Repartir también lo que no se ve' },
      ],
      reflectionMessage:
        'Nombrar la carga invisible es el primer paso para poder compartirla en casa.',
    },
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
    activity: { type: 'formulario', exerciseId: 'e-rutinas-1' },
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
    activity: {
      type: 'memorama',
      intro: 'Relaciona cada idea con su sentido al cuidar los espacios compartidos.',
      pairs: [
        { a: 'Espacio común', b: 'Lo usamos y lo cuidamos entre todos' },
        { a: 'Orden', b: 'Se sostiene entre varias manos' },
        { a: 'Acuerdo', b: 'Definir cómo cuidar lo compartido' },
        { a: 'Turnos', b: 'Rotar las tareas del hogar' },
      ],
      reflectionMessage:
        'Los espacios compartidos se cuidan mejor cuando el cuidado también se comparte.',
    },
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
    activity: { type: 'formulario', exerciseId: 'e-descanso-1' },
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
    activity: {
      type: 'memorama',
      intro: 'Relaciona cada concepto con lo que significa al acompañar con respeto.',
      pairs: [
        { a: 'Autonomía', b: 'Respetar las decisiones de la persona' },
        { a: 'Presencia', b: 'Estar cerca sin invadir' },
        { a: 'Escucha', b: 'Atender lo que la persona necesita' },
        { a: 'Cuidado compartido', b: 'Repartir el acompañamiento' },
      ],
      reflectionMessage:
        'Acompañar desde el respeto reconoce la autonomía de cada persona.',
    },
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
    activity: { type: 'formulario', exerciseId: 'e-crianza-1' },
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
    activity: {
      type: 'memorama',
      intro: 'Relaciona cada idea con su sentido al conversar las decisiones del hogar.',
      pairs: [
        { a: 'Transparencia', b: 'Hablar del dinero con claridad' },
        { a: 'Diálogo', b: 'Conversar antes de decidir' },
        { a: 'Corresponsabilidad', b: 'Decidir entre quienes conviven' },
        { a: 'Prioridades', b: 'Acordar qué es lo importante' },
      ],
      reflectionMessage:
        'Conversar las decisiones del hogar abre la puerta a acuerdos más justos.',
    },
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
    activity: { type: 'formulario', exerciseId: 'e-tiempo-1' },
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
