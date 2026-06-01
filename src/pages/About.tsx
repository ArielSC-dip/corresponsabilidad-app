import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Icon from '@/components/Icon';

const experiencia = [
  'Explora los contenidos que más te interesen',
  'Accede a cualquier módulo en cualquier momento',
  'Participa a tu propio ritmo',
  'Reflexiona a partir de situaciones cotidianas',
  'Descubre nuevas perspectivas sobre la vida en el hogar',
  'Continúa cuando lo desees',
];

export default function About() {
  return (
    <>
      {/* Encabezado e introducción */}
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
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-700">
              <p>
                <span className="font-semibold text-ink-900">Hogares que se cuidan</span> es una
                iniciativa que reúne contenidos breves, experiencias y recursos orientados a
                fortalecer la organización cotidiana del hogar.
              </p>
              <p>
                A través de cápsulas en video, temas de interés y ejercicios de reflexión, la
                plataforma ofrece un espacio accesible para explorar distintas formas de colaborar
                en las actividades que hacen posible el bienestar familiar.
              </p>
              <p>
                Reconocemos que cada hogar tiene dinámicas, necesidades y formas de organización
                propias. Por ello, la experiencia está diseñada para que cada persona pueda recorrer
                los contenidos libremente, a su propio ritmo y según sus intereses.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Nuestro propósito + tarjeta lateral */}
      <Container as="section" className="py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Nuestro propósito"
              title="Acompañar conversaciones que comienzan en casa"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-600">
              <p>
                Las actividades cotidianas que permiten que un hogar funcione suelen pasar
                desapercibidas, aunque forman parte esencial de la vida diaria.
              </p>
              <p>
                Esta iniciativa busca visibilizar esas tareas, reconocer su importancia y ofrecer
                herramientas que ayuden a reflexionar sobre cómo nos organizamos, colaboramos y
                construimos bienestar en nuestro entorno cercano.
              </p>
              <p>
                Más que ofrecer respuestas únicas, la plataforma invita a descubrir perspectivas,
                compartir experiencias y encontrar ideas que puedan adaptarse a distintas realidades
                familiares.
              </p>
            </div>
          </div>

          {/* Tarjeta lateral: una experiencia libre y flexible */}
          <div className="card bg-white p-7">
            <h3 className="font-display text-lg font-semibold text-ink-900">
              Una experiencia libre y flexible
            </h3>
            <ul className="mt-5 space-y-3">
              {experiencia.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-ink-100 pt-4 text-xs leading-relaxed text-ink-500">
              Sin registros obligatorios, evaluaciones ni puntuaciones.
            </p>
          </div>
        </div>

        {/* Frase destacada */}
        <div className="mt-12 rounded-2xl bg-primary-700 p-8 text-white sm:p-12">
          <p className="font-display text-xl leading-relaxed sm:text-2xl">
            «No existe una única forma de cuidar un hogar. Cada familia construye sus propias maneras
            de colaborar, organizarse y acompañarse.»
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
