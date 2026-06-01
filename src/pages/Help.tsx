import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import Icon from '@/components/Icon';

const faqs = [
  {
    q: '¿Necesito registrarme o crear una cuenta?',
    a: 'La plataforma es completamente abierta. No pedimos registro, inicio de sesión ni datos personales de ningún tipo.',
  },
  {
    q: '¿Las respuestas de las reflexiones se guardan o se califican?',
    a: 'No se califican ni se guardan en ningún servidor. No hay respuestas correctas: las preguntas son solo una invitación a pensar, y tus respuestas se quedan en tu pantalla.',
  },
  {
    q: '¿Hay un orden obligatorio para ver el contenido?',
    a: 'Puedes empezar por cualquier módulo o cápsula, en el orden que prefieras. No hay avances que desbloquear ni nada que completar.',
  },
  {
    q: '¿Qué es el indicador de «cápsula explorada»?',
    a: 'Es una ayuda visual opcional que recuerda, solo en tu navegador, qué cápsulas ya viste. No es un puntaje ni un nivel, y puedes borrarlo cuando quieras desde la sección de transparencia.',
  },
  {
    q: '¿Las comunidades temáticas son chats?',
    a: 'Las comunidades temáticas son espacios informativos que reúnen recursos sobre un tema. No hay mensajes, publicaciones ni interacción con otras personas.',
  },
  {
    q: '¿Recibiré notificaciones o recordatorios?',
    a: 'No enviamos recordatorios ni notificaciones de ningún tipo. Visitas la plataforma cuando quieras, sin presión.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium text-ink-900">{q}</span>
        <Icon
          name="compass"
          className={`h-5 w-5 shrink-0 text-primary-600 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="px-5 pb-5 text-sm leading-relaxed text-ink-600">{a}</p>}
    </div>
  );
}

export default function Help() {
  return (
    <>
      <PageHeader
        eyebrow="Ayuda"
        title="Preguntas frecuentes"
        description="Resolvemos las dudas más comunes sobre cómo funciona este espacio y cómo cuidamos tu participación."
      />
      <Container as="section" className="py-12">
        <div className="grid gap-3 lg:max-w-3xl">
        {faqs.map((faq) => (
          <FaqItem key={faq.q} {...faq} />
        ))}
      </div>

      <div className="mt-12 card flex flex-col items-start gap-4 bg-primary-50 p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink-900">¿Tienes otra duda?</h3>
          <p className="mt-1 text-sm text-ink-600">
            Conoce más sobre la iniciativa o revisa cómo tratamos los datos.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/iniciativa" className="btn-secondary">
            La iniciativa
          </Link>
          <Link to="/transparencia" className="btn-primary">
            Datos y transparencia
          </Link>
        </div>
        </div>
      </Container>
    </>
  );
}
