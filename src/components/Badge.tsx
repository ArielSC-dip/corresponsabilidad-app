import type { ReactNode } from 'react';

type Accent = 'primary' | 'accent' | 'sand' | 'neutral';

interface BadgeProps {
  children: ReactNode;
  accent?: Accent;
  className?: string;
}

const styles: Record<Accent, string> = {
  primary: 'bg-primary-50 text-primary-700 ring-primary-100',
  accent: 'bg-accent-50 text-accent-700 ring-accent-100',
  sand: 'bg-sand-50 text-sand-500 ring-sand-200',
  neutral: 'bg-ink-100 text-ink-600 ring-ink-200',
};

// Etiqueta visual no competitiva (informativa, nunca un "logro" o "nivel").
export default function Badge({ children, accent = 'neutral', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${styles[accent]} ${className}`}
    >
      {children}
    </span>
  );
}
