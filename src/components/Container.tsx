import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Etiqueta semántica del contenedor; por defecto un div */
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'article';
}

// Envoltorio de ancho máximo y padding horizontal consistente.
export default function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return <Tag className={`container-content ${className}`}>{children}</Tag>;
}
