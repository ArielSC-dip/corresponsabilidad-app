import type { NewsPost } from '@/types';

// Novedades / blog (mock). En producción se alimentaría de un CMS.
// Ordenadas de más reciente a más antigua.
export const news: NewsPost[] = [
  {
    id: 'n-nuevas-capsulas',
    slug: 'nuevas-capsulas-sobre-organizacion',
    title: 'Nuevas cápsulas sobre organización del hogar',
    date: '2026-05-28',
    tag: 'Novedad',
    summary:
      'Sumamos cápsulas breves sobre rutinas flexibles y el cuidado de los espacios compartidos, pensadas para mirar en pocos minutos.',
    body: [
      'Esta semana incorporamos nuevas cápsulas al módulo de Organización del Hogar. Son videos breves que invitan a observar, sin juicios, cómo distribuimos las tareas cotidianas.',
      'Como siempre, no hay un orden obligatorio ni nada que completar: puedes verlas cuando quieras y en el orden que prefieras.',
      'Te invitamos a explorarlas y, si te animas, a conversar sobre ellas en casa.',
    ],
  },
  {
    id: 'n-carga-invisible',
    slug: 'hablemos-de-la-carga-invisible',
    title: 'Hablemos de la carga invisible',
    date: '2026-05-20',
    tag: 'Reflexión',
    summary:
      'Planificar, anticipar y recordar también es trabajo. Una reflexión sobre esas tareas que sostienen al hogar y muchas veces no se ven.',
    body: [
      'Hay un tipo de trabajo que rara vez se nombra: pensar qué hace falta comprar, recordar las citas, anticipar lo que vendrá. Es la llamada carga mental o carga invisible del hogar.',
      'Reconocerla es un primer paso para poder compartirla. No se trata de repartir culpas, sino de hacer visible lo que sostiene la vida en común.',
      'En la cápsula «La carga invisible» exploramos este tema con calma y sin recetas únicas.',
    ],
  },
  {
    id: 'n-guia-cuidados',
    slug: 'nueva-guia-de-cuidados-compartidos',
    title: 'Nueva guía: cuidados compartidos en casa',
    date: '2026-05-12',
    tag: 'Recurso',
    summary:
      'Publicamos una guía breve con ideas para conversar sobre el reparto de los cuidados, adaptable a distintas realidades familiares.',
    body: [
      'Preparamos una guía corta, pensada para inspirar conversaciones más que para dar instrucciones. Incluye preguntas suaves para abrir el tema en familia.',
      'La guía está disponible como recurso dentro de las comunidades temáticas y puede descargarse libremente.',
    ],
  },
  {
    id: 'n-taller-mayo',
    slug: 'taller-organizacion-familiar-junio',
    title: 'Abrimos inscripciones al taller de junio',
    date: '2026-05-05',
    tag: 'Taller',
    summary:
      'Un encuentro en línea para conversar sobre la organización familiar. Participación voluntaria y sin requisitos previos.',
    body: [
      'En junio realizaremos un taller en línea para conversar, entre pares, sobre cómo nos organizamos en casa. No es una capacitación ni una evaluación: es un espacio de diálogo.',
      'La participación es totalmente voluntaria y no se requiere haber visto ninguna cápsula antes. Puedes sumarte con la curiosidad que tengas.',
    ],
  },
];

export const getRecentNews = (n = 3): NewsPost[] => news.slice(0, n);

export const getNewsBySlug = (slug: string): NewsPost | undefined =>
  news.find((p) => p.slug === slug);
