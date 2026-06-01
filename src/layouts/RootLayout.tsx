import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Restaura el scroll al inicio en cada cambio de ruta.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Saltar al contenido
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="contenido" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
