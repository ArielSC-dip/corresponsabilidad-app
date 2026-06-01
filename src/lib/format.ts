// Utilidades de formato compartidas.

const dateFormatter = new Intl.DateTimeFormat('es-MX', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/** Formatea una fecha ISO (yyyy-mm-dd) a texto legible en español. */
export const formatDate = (iso: string): string =>
  dateFormatter.format(new Date(`${iso}T00:00:00`));
