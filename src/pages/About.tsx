import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Icon from '@/components/Icon';

const principles = [
  'Sin registro obligatorio',
  'Sin inicio de sesión',
  'Sin perfiles de usuario',
  'Sin almacenamiento de datos personales',
  'Sin seguimiento individual',
  'Sin rankings',
  'Sin puntuaciones',
  'Sin insignias competitivas',
  'Sin certificados',
  'Sin bloqueos de avance',
  'Sin recordatorios',
  'Sin notificaciones de presión',
];

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-ink-50">
        <Container className="py-14 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 ring-1 ring-primary-100">
              <Icon name="hands" className="h-4 w-4" />
              Cámara de Diputados
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink-900">
              La iniciativa
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              «Hogares que se cuidan» es una iniciativa institucional para promover la
              concientización sobre la corresponsabilidad en los cuidados del hogar. Buscamos abrir
              un espacio de reflexión sobre cómo organizamos, compartimos y sostenemos la vida en
              común.
            </p>
          </div>
        </Container>
      </section>

      <Container as="section" className="py-14">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Nuestro propósito"
              title="Invitar a la reflexión, no a la obligación"
              description="No se trata de una capacitación, una evaluación ni un sistema de cumplimiento. Es una invitación abierta y voluntaria a mirar lo cotidiano del hogar con otros ojos, para identificar oportunidades de colaboración."
            />
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              La plataforma reúne módulos temáticos, cápsulas en video y reflexiones suaves sobre la
              organización familiar, las tareas domésticas, los cuidados cotidianos, el bienestar
              del hogar y el acompañamiento de personas dependientes.
            </p>
          </div>

          <div className="card bg-white p-7">
            <h3 className="font-display text-lg font-semibold text-ink-900">
              Lo que esta plataforma <span className="text-primary-700">no</span> es
            </h3>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {principles.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                  <Icon name="leaf" className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-primary-700 p-8 text-white sm:p-10">
          <p className="font-display text-xl leading-relaxed sm:text-2xl">
            «Cada hogar encuentra formas distintas de organizarse.»
          </p>
          <p className="mt-3 max-w-2xl text-primary-100">
            Por eso no proponemos un modelo único ni medimos a nadie. Ofrecemos contenido para
            pensar, conversar y, si así se decide, transformar la vida en común desde el respeto.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/modulos" className="btn bg-white text-primary-700 hover:bg-primary-50">
              Explorar los módulos
            </Link>
            <Link
              to="/transparencia"
              className="btn bg-primary-500/40 text-white ring-1 ring-inset ring-white/30 hover:bg-primary-500/60"
            >
              Cómo cuidamos los datos
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
