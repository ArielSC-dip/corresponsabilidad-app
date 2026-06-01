import { Link } from 'react-router-dom';

interface BrandProps {
  /** 'dark' = texto oscuro sobre fondo claro · 'light' = texto claro sobre fondo verde */
  variant?: 'dark' | 'light';
  className?: string;
}

// Marca institucional reutilizable: emblema oficial (en placa blanca, para que
// se lea tanto sobre claro como sobre verde) + nombre del programa.
// El emblema se carga desde /logo_camara.png; si no existe, usa el placeholder SVG.
export default function Brand({ variant = 'dark', className = '' }: BrandProps) {
  const title = variant === 'light' ? 'text-white' : 'text-navy-700';
  const subtitle = variant === 'light' ? 'text-primary-100' : 'text-ink-500';
  // BASE_URL respeta la ruta base del build (./) para que el logo cargue también en GitHub Pages
  const base = import.meta.env.BASE_URL;

  return (
    <Link
      to="/"
      className={`flex items-center gap-3 ${className}`}
      aria-label="Inicio · Hogares que se cuidan, Cámara de Diputados"
    >
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5">
        <img
          src={`${base}logo_camara.png`}
          alt="Cámara de Diputados · LXVI Legislatura"
          className="h-full w-full object-contain"
          onError={(e) => {
            const img = e.currentTarget;
            if (!img.src.endsWith('logo-camara.svg')) img.src = `${base}logo-camara.svg`;
          }}
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-base font-semibold ${title}`}>
          Hogares que se cuidan
        </span>
        <span className={`text-[11px] ${subtitle}`}>Corresponsabilidad en los cuidados</span>
      </span>
    </Link>
  );
}
