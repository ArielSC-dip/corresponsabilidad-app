import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import Icon from '@/components/Icon';

export default function NotFound() {
  return (
    <Container as="section" className="flex flex-col items-center py-24 text-center">
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
        <Icon name="compass" className="h-8 w-8" />
      </span>
      <h1 className="mt-6 font-display text-3xl font-semibold text-ink-900">
        No encontramos esta página
      </h1>
      <p className="mt-3 max-w-md text-ink-600">
        Quizás el contenido se movió o el enlace cambió. Puedes volver al inicio y seguir
        explorando con calma.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-primary">
          Volver al inicio
        </Link>
        <Link to="/modulos" className="btn-secondary">
          Ver los módulos
        </Link>
      </div>
    </Container>
  );
}
