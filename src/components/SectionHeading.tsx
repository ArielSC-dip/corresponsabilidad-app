import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

// Encabezado de sección reutilizable, con "eyebrow" opcional.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-base leading-relaxed text-ink-600">{description}</p>}
    </div>
  );
}
