// Tipos de dominio de la plataforma.
// No representan personas ni datos personales: solo contenido y afinidad temática.

export interface Module {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  /** Nombre de icono (mapeado en components/Icon.tsx) */
  icon: IconName;
  /** Clave de color del tema (primary | accent | sand) para acentos visuales */
  accent: 'primary' | 'accent' | 'sand';
  capsuleIds: string[];
}

export interface MemoramaPair {
  /** Dos textos que forman una pareja a relacionar */
  a: string;
  b: string;
}

/**
 * Actividad opcional posterior al video — una por cápsula.
 * No competitiva: sin puntaje, sin cronómetro, sin aprobado/reprobado.
 */
export type CapsuleActivity =
  | { type: 'formulario'; exerciseId: string }
  | { type: 'memorama'; intro: string; pairs: MemoramaPair[]; reflectionMessage: string };

export interface Capsule {
  id: string;
  slug: string;
  moduleId: string;
  title: string;
  /** Duración legible, p. ej. "4 min" */
  duration: string;
  durationMinutes: number;
  /** ID de Vimeo para el embed (mock) */
  vimeoId: string;
  description: string;
  /** Reflexión principal que acompaña al video */
  reflection: string;
  /** Actividad opcional asociada (formulario o memorama) */
  activity: CapsuleActivity;
}

export interface ExerciseOption {
  id: string;
  label: string;
}

export interface ReflectiveExercise {
  id: string;
  prompt: string;
  options: ExerciseOption[];
  /**
   * Mensaje reflexivo mostrado tras cualquier respuesta.
   * No hay respuestas correctas ni puntuación.
   */
  reflectionMessage: string;
}

export interface Community {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: IconName;
  accent: 'primary' | 'accent' | 'sand';
  /** Recursos informativos de afinidad (sin chat, sin red social) */
  resources: CommunityResource[];
}

export interface CommunityResource {
  title: string;
  kind: 'lectura' | 'capsula' | 'guia' | 'reflexion';
  summary: string;
  /** Ruta interna opcional, p. ej. a una cápsula relacionada */
  to?: string;
}

export type IconName =
  | 'home'
  | 'hands'
  | 'heart'
  | 'elder'
  | 'child'
  | 'wallet'
  | 'clock'
  | 'sparkles'
  | 'book'
  | 'compass'
  | 'play'
  | 'leaf';

/** Métricas anónimas simuladas — nunca asociadas a personas */
export interface AnonymousMetric {
  label: string;
  value: number;
  hint: string;
}

export type NewsTag = 'Novedad' | 'Reflexión' | 'Recurso' | 'Taller';

/** Entrada editorial de novedades / blog */
export interface NewsPost {
  id: string;
  slug: string;
  title: string;
  /** Fecha en formato ISO yyyy-mm-dd */
  date: string;
  tag: NewsTag;
  summary: string;
  /** Cuerpo en párrafos */
  body: string[];
}

/** Taller o actividad (invitación, sin obligatoriedad) */
export interface Workshop {
  id: string;
  title: string;
  /** Fecha en formato ISO yyyy-mm-dd */
  date: string;
  modality: 'Presencial' | 'En línea';
  place: string;
  summary: string;
  /** Enlace de inscripción (mock) */
  registerUrl: string;
}
