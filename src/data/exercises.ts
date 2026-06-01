import type { ReflectiveExercise } from '@/types';

// Ejercicios reflexivos: NO hay respuestas correctas, no se califican,
// no generan puntuación ni avance. Tras responder, se muestra un mensaje
// reflexivo común a cualquier opción elegida.
export const exercises: ReflectiveExercise[] = [
  {
    id: 'e-acuerdos-1',
    prompt: '¿Cómo se reparten habitualmente las tareas en tu hogar?',
    options: [
      { id: 'o1', label: 'Conversamos y nos vamos acomodando' },
      { id: 'o2', label: 'Cada quien asume lo que le sale más natural' },
      { id: 'o3', label: 'Todavía estamos buscando la forma' },
      { id: 'o4', label: 'Preferiría que lo habláramos más' },
    ],
    reflectionMessage:
      'Cada hogar encuentra formas distintas de organizarse. Poner el tema sobre la mesa ya es una forma de cuidado compartido.',
  },
  {
    id: 'e-carga-1',
    prompt: '¿Quién suele anticipar lo que va a hacer falta en casa?',
    options: [
      { id: 'o1', label: 'Casi siempre la misma persona' },
      { id: 'o2', label: 'Vamos rotando según la semana' },
      { id: 'o3', label: 'Nunca lo había pensado' },
      { id: 'o4', label: 'Lo resolvemos sobre la marcha' },
    ],
    reflectionMessage:
      'Reflexionar sobre nuestras actividades cotidianas puede ayudar a identificar oportunidades de colaboración.',
  },
  {
    id: 'e-rutinas-1',
    prompt: 'Cuando una rutina deja de funcionar, en tu casa lo más habitual es…',
    options: [
      { id: 'o1', label: 'Conversarlo y ajustarla' },
      { id: 'o2', label: 'Seguir igual un tiempo más' },
      { id: 'o3', label: 'Que alguien proponga un cambio' },
      { id: 'o4', label: 'Probar algo distinto sin planearlo' },
    ],
    reflectionMessage:
      'Las rutinas son herramientas, no obligaciones. Revisarlas de vez en cuando puede aliviar a quienes cuidan.',
  },
  {
    id: 'e-espacios-1',
    prompt: '¿Cómo se cuidan los espacios comunes en tu hogar?',
    options: [
      { id: 'o1', label: 'Entre todas las personas que conviven' },
      { id: 'o2', label: 'Según quién tenga más tiempo' },
      { id: 'o3', label: 'Suele recaer en una o dos personas' },
      { id: 'o4', label: 'Es algo que nos gustaría mejorar' },
    ],
    reflectionMessage:
      'No existe una única manera correcta. Mirar cómo cuidamos lo compartido abre conversaciones valiosas.',
  },
  {
    id: 'e-descanso-1',
    prompt: '¿El descanso es algo que se conversa en tu casa?',
    options: [
      { id: 'o1', label: 'Sí, lo tenemos presente' },
      { id: 'o2', label: 'A veces, cuando alguien está agotado' },
      { id: 'o3', label: 'Pocas veces lo nombramos' },
      { id: 'o4', label: 'Me gustaría que lo habláramos más' },
    ],
    reflectionMessage:
      'Cuidar a otras personas es más sostenible cuando también hay espacio para el propio descanso.',
  },
  {
    id: 'e-acompanamiento-1',
    prompt: 'Al acompañar a una persona mayor, ¿qué priorizas?',
    options: [
      { id: 'o1', label: 'Respetar sus decisiones' },
      { id: 'o2', label: 'Estar presente sin invadir' },
      { id: 'o3', label: 'Compartir el cuidado con otras personas' },
      { id: 'o4', label: 'Estoy aprendiendo a hacerlo' },
    ],
    reflectionMessage:
      'Acompañar desde el respeto reconoce la autonomía de la otra persona. No hay una sola forma de hacerlo bien.',
  },
  {
    id: 'e-crianza-1',
    prompt: 'En la crianza, ¿cómo se toman las decisiones cotidianas?',
    options: [
      { id: 'o1', label: 'Las conversamos en equipo' },
      { id: 'o2', label: 'Cada quien aporta su mirada' },
      { id: 'o3', label: 'Suele decidir una persona' },
      { id: 'o4', label: 'Vamos encontrando el equilibrio' },
    ],
    reflectionMessage:
      'No hay una sola forma de criar; sí muchas formas de hacerlo juntos. Compartir la mirada también es cuidar.',
  },
  {
    id: 'e-decisiones-1',
    prompt: '¿Las decisiones económicas del hogar se conversan?',
    options: [
      { id: 'o1', label: 'Sí, con bastante transparencia' },
      { id: 'o2', label: 'Las grandes sí, las pequeñas no tanto' },
      { id: 'o3', label: 'Suele decidir quien gestiona el dinero' },
      { id: 'o4', label: 'Es algo que podríamos compartir más' },
    ],
    reflectionMessage:
      'Conversar sobre el dinero del hogar abre la puerta a decisiones más justas para todas las personas.',
  },
  {
    id: 'e-tiempo-1',
    prompt: '¿Cómo sientes el reparto del tiempo en tu hogar?',
    options: [
      { id: 'o1', label: 'Bastante equilibrado' },
      { id: 'o2', label: 'Depende de la etapa que estemos viviendo' },
      { id: 'o3', label: 'Algunas personas tienen menos tiempo propio' },
      { id: 'o4', label: 'Me gustaría revisarlo en familia' },
    ],
    reflectionMessage:
      'Reconocer el tiempo de cuidado y el tiempo propio ayuda a que todas las personas del hogar puedan descansar.',
  },
];

export const getExerciseById = (id: string): ReflectiveExercise | undefined =>
  exercises.find((e) => e.id === id);

export const getExercisesByIds = (ids: string[]): ReflectiveExercise[] =>
  ids.map(getExerciseById).filter((e): e is ReflectiveExercise => Boolean(e));
