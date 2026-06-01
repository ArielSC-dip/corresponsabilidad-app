import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';

const columns = [
  {
    title: 'Explorar',
    links: [
      { to: '/modulos', label: 'Módulos' },
      { to: '/capsulas', label: 'Cápsulas' },
      { to: '/comunidades', label: 'Comunidades temáticas' },
    ],
  },
  {
    title: 'Sobre el proyecto',
    links: [
      { to: '/iniciativa', label: 'La iniciativa' },
      { to: '/transparencia', label: 'Datos y transparencia' },
      { to: '/ayuda', label: 'Ayuda y preguntas' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-primary-800 text-primary-50">
      {/* Acento tricolor superior, como en la firma institucional */}
      <div className="flex h-1 w-full" aria-hidden>
        <div className="flex-1 bg-flag-green" />
        <div className="flex-1 bg-flag-white" />
        <div className="flex-1 bg-flag-red" />
      </div>

      <div className="container-content grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Brand variant="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-100/90">
            Un espacio de reflexión voluntario sobre la corresponsabilidad en los cuidados del
            hogar. Sin registros, sin evaluaciones, sin presión. Una iniciativa de la Cámara de
            Diputados.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-sm font-semibold text-white">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-100/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col gap-2 py-6 text-xs text-primary-100/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cámara de Diputados · LXVI Legislatura.</p>
          <p>No se recopilan datos personales. Participación libre y anónima.</p>
        </div>
      </div>
    </footer>
  );
}
