import type { Workshop } from '@/types';

// Talleres / actividades (mock). Invitaciones voluntarias, sin obligatoriedad.
// Ordenados por fecha ascendente (próximos primero).
export const workshops: Workshop[] = [
  {
    id: 'w-organizacion',
    title: 'Conversaciones sobre organización familiar',
    date: '2026-06-18',
    modality: 'En línea',
    place: 'Transmisión por videollamada',
    summary:
      'Un encuentro para compartir, entre pares, cómo nos organizamos en casa. Sin expertos que evalúen: solo diálogo.',
    registerUrl: '#',
  },
  {
    id: 'w-cuidados',
    title: 'Cuidar a quienes cuidan',
    date: '2026-06-25',
    modality: 'Presencial',
    place: 'Centro Cultural · Ciudad de México',
    summary:
      'Una charla abierta sobre el acompañamiento a personas mayores y el descanso de las personas cuidadoras.',
    registerUrl: '#',
  },
  {
    id: 'w-crianza',
    title: 'Criar en equipo',
    date: '2026-07-09',
    modality: 'En línea',
    place: 'Transmisión por videollamada',
    summary:
      'Un espacio para conversar sobre la crianza compartida y las distintas formas de acompañar a niñas y niños.',
    registerUrl: '#',
  },
];

export const getUpcomingWorkshops = (n?: number): Workshop[] =>
  typeof n === 'number' ? workshops.slice(0, n) : workshops;
