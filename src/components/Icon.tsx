import type { IconName } from '@/types';

interface IconProps {
  name: IconName;
  className?: string;
  /** Texto accesible; si se omite, el icono se marca como decorativo */
  title?: string;
}

// Iconos SVG inline (stroke) para no depender de librerías externas.
// Trazos suaves y redondeados, acordes a una estética cálida y humana.
const paths: Record<IconName, JSX.Element> = {
  home: <path d="M3 10.5 12 3l9 7.5M5 9.5V20h5v-6h4v6h5V9.5" />,
  hands: (
    <path d="M7 11V6.5a1.5 1.5 0 0 1 3 0V10m0-1.5V5a1.5 1.5 0 0 1 3 0v5m0-3.5a1.5 1.5 0 0 1 3 0V13c0 3.5-2.5 6-6 6s-6-2-6.5-5.5L4 11.5a1.4 1.4 0 0 1 2.4-1.3L7 11" />
  ),
  heart: (
    <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z" />
  ),
  elder: (
    <path d="M10 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v5m0 0-2 7m2-7 2 7m4-11v13" />
  ),
  child: (
    <path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v6m0 0-2.5 7m2.5-7 2.5 7M7 11h10" />
  ),
  wallet: (
    <path d="M3 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Zm0 2h14m-3 3h2" />
  ),
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3 2" />,
  sparkles: (
    <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Zm6 9 .8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13Z" />
  ),
  book: (
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5v-15Zm16 0A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5v-15Z" />
  ),
  compass: (
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5 5-2Z" />
  ),
  play: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-2-12.5 6 3.5-6 3.5v-7Z" />,
  leaf: (
    <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14m-1-1 6-6" />
  ),
};

export default function Icon({ name, className = 'w-6 h-6', title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title && <title>{title}</title>}
      {paths[name]}
    </svg>
  );
}
