import type { Community } from '@/types';

// Comunidades temáticas: espacios informativos de afinidad.
// Sin chats, sin redes sociales, sin perfiles. Solo recursos y reflexiones.
export const communities: Community[] = [
  {
    id: 'co-organizacion',
    slug: 'organizacion-familiar',
    title: 'Organización Familiar',
    description: 'Ideas y recursos para repartir la vida cotidiana del hogar.',
    longDescription:
      'Un espacio para encontrar miradas y materiales sobre cómo distribuir tareas, rutinas y acuerdos de manera flexible. No es un grupo de chat: es una colección de recursos para inspirar conversaciones en casa.',
    icon: 'home',
    accent: 'sand',
    resources: [
      {
        title: 'Acuerdos que suman',
        kind: 'capsula',
        summary: 'Cómo los acuerdos explícitos hacen más visible la organización del hogar.',
        to: '/capsulas/acuerdos-que-suman',
      },
      {
        title: 'Una tarea, muchas formas de hacerla',
        kind: 'lectura',
        summary: 'Breve lectura sobre por qué no existe una única manera correcta de organizarse.',
      },
      {
        title: 'Conversación para el fin de semana',
        kind: 'reflexion',
        summary: 'Tres preguntas suaves para abrir el tema en familia, sin presión.',
      },
    ],
  },
  {
    id: 'co-mayores',
    slug: 'cuidado-de-personas-mayores',
    title: 'Cuidado de Personas Mayores',
    description: 'Acompañar a quienes cuidamos, cuidándonos también.',
    longDescription:
      'Recursos sobre el acompañamiento a personas adultas mayores y dependientes desde el respeto y la autonomía, y sobre cómo distribuir ese cuidado entre quienes conviven.',
    icon: 'elder',
    accent: 'primary',
    resources: [
      {
        title: 'Acompañar con respeto',
        kind: 'capsula',
        summary: 'El acompañamiento desde la autonomía y el cariño.',
        to: '/capsulas/acompanar-con-respeto',
      },
      {
        title: 'Repartir el cuidado',
        kind: 'guia',
        summary: 'Guía breve para pensar cómo compartir las tareas de acompañamiento.',
      },
      {
        title: 'El cuidado también cuida a quien cuida',
        kind: 'reflexion',
        summary: 'Una reflexión sobre el descanso de las personas cuidadoras.',
      },
    ],
  },
  {
    id: 'co-crianza',
    slug: 'crianza',
    title: 'Crianza',
    description: 'Criar en equipo, sin recetas únicas.',
    longDescription:
      'Materiales y reflexiones sobre la crianza compartida y el acompañamiento de niñas y niños desde la corresponsabilidad, respetando que cada familia es distinta.',
    icon: 'child',
    accent: 'accent',
    resources: [
      {
        title: 'Criar en equipo',
        kind: 'capsula',
        summary: 'La crianza compartida como construcción cotidiana.',
        to: '/capsulas/criar-en-equipo',
      },
      {
        title: 'Mapa de tareas de crianza',
        kind: 'guia',
        summary: 'Una forma visual y sin juicios de mirar el reparto del cuidado.',
      },
    ],
  },
  {
    id: 'co-bienestar',
    slug: 'bienestar-familiar',
    title: 'Bienestar Familiar',
    description: 'Cuidar el clima emocional de la casa.',
    longDescription:
      'Un espacio sobre el bienestar colectivo del hogar: el descanso, los vínculos y las pequeñas prácticas que sostienen un clima cálido para todas las personas.',
    icon: 'heart',
    accent: 'accent',
    resources: [
      {
        title: 'El derecho al descanso',
        kind: 'capsula',
        summary: 'El descanso como parte del bienestar del hogar.',
        to: '/capsulas/el-derecho-al-descanso',
      },
      {
        title: 'Pequeñas pausas compartidas',
        kind: 'lectura',
        summary: 'Ideas para sostener momentos de bienestar en el día a día.',
      },
    ],
  },
  {
    id: 'co-economia',
    slug: 'economia-domestica',
    title: 'Economía Doméstica',
    description: 'Decisiones de hogar, conversadas.',
    longDescription:
      'Recursos para pensar las decisiones económicas del hogar como algo que puede compartirse y conversarse con transparencia, sin que recaiga en una sola persona.',
    icon: 'wallet',
    accent: 'sand',
    resources: [
      {
        title: 'Decisiones conversadas',
        kind: 'capsula',
        summary: 'Las decisiones económicas del hogar también pueden compartirse.',
        to: '/capsulas/decisiones-conversadas',
      },
      {
        title: 'Hablar de dinero sin tensión',
        kind: 'reflexion',
        summary: 'Una mirada amable para abrir el tema en casa.',
      },
    ],
  },
];

export const getCommunityBySlug = (slug: string): Community | undefined =>
  communities.find((c) => c.slug === slug);
