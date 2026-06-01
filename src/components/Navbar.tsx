import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Brand from '@/components/Brand';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/modulos', label: 'Módulos' },
  { to: '/capsulas', label: 'Cápsulas' },
  { to: '/comunidades', label: 'Comunidades' },
  { to: '/iniciativa', label: 'La iniciativa' },
  { to: '/ayuda', label: 'Ayuda' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'bg-white/15 text-white' : 'text-primary-100 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-primary-800 shadow-sm">
      <nav className="container-content flex h-20 items-center justify-between gap-4">
        <Brand variant="light" />

        {/* Navegación desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className={navLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/modulos"
          className="btn hidden bg-accent-500 text-white hover:bg-accent-600 sm:inline-flex"
        >
          Explorar contenido
        </Link>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="btn p-2 text-white hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-primary-800 lg:hidden">
          <ul className="container-content flex flex-col gap-1 py-3">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium ${
                      isActive
                        ? 'bg-white/15 text-white'
                        : 'text-primary-100 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/modulos" className="btn w-full bg-accent-500 text-white hover:bg-accent-600">
                Explorar contenido
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
