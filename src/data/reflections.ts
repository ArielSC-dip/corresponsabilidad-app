// Reflexiones destacadas para la portada. Se elige una al cargar.
export const featuredReflections: string[] = [
  'No existe una única forma de cuidar un hogar. Cada familia construye sus propias maneras de colaborar, organizarse y acompañarse.',
  'Las pequeñas acciones cotidianas sostienen la vida en común. Reconocerlas es el primer paso para valorarlas.',
  'Detrás de cada hogar hay tareas, cuidados y acuerdos que hacen posible el bienestar de todos.',
  'Reflexionar sobre nuestras actividades cotidianas puede ayudar a identificar oportunidades de colaboración.',
];

export const getRandomReflection = (): string =>
  featuredReflections[Math.floor(Math.random() * featuredReflections.length)];
