import { Link, useParams } from 'react-router-dom';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Badge from '@/components/Badge';
import NotFound from '@/pages/NotFound';
import { getCommunityBySlug } from '@/data/communities';
import type { CommunityResource } from '@/types';

const kindLabel: Record<CommunityResource['kind'], string> = {
  lectura: 'Lectura',
  capsula: 'Cápsula',
  guia: 'Guía',
  reflexion: 'Reflexión',
};

const kindIcon: Record<CommunityResource['kind'], 'book' | 'play' | 'compass' | 'leaf'> = {
  lectura: 'book',
  capsula: 'play',
  guia: 'compass',
  reflexion: 'leaf',
};

function ResourceItem({ resource }: { resource: CommunityResource }) {
  const content = (
    <div className="card flex items-start gap-4 p-5 transition hover:shadow-soft">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
        <Icon name={kindIcon[resource.kind]} className="h-5 w-5" />
      </span>
      <div className="flex-1">
        <Badge accent="primary">{kindLabel[resource.kind]}</Badge>
        <h3 className="mt-2 font-display text-base font-semibold text-ink-900">{resource.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-600">{resource.summary}</p>
        {resource.to && (
          <span className="mt-2 inline-block text-sm font-medium text-primary-700">Abrir →</span>
        )}
      </div>
    </div>
  );

  return resource.to ? <Link to={resource.to}>{content}</Link> : content;
}

export default function CommunityDetail() {
  const { slug } = useParams();
  const community = slug ? getCommunityBySlug(slug) : undefined;

  if (!community) return <NotFound />;

  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-ink-50">
        <Container className="py-12 sm:py-16">
          <nav className="mb-6 flex items-center gap-2 text-sm text-ink-500" aria-label="Migas de pan">
            <Link to="/comunidades" className="hover:text-ink-700">
              Comunidades
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink-700">{community.title}</span>
          </nav>
          <div className="flex items-start gap-4">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-primary-600 shadow-sm">
              <Icon name={community.icon} className="h-7 w-7" />
            </span>
            <div>
              <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
                {community.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-700">
                {community.longDescription}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container as="section" className="py-12">
        <h2 className="font-display text-xl font-semibold text-ink-900">Recursos de afinidad</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {community.resources.map((resource) => (
            <ResourceItem key={resource.title} resource={resource} />
          ))}
        </div>
        <div className="mt-10">
          <Link to="/comunidades" className="btn-ghost">
            ← Volver a comunidades
          </Link>
        </div>
      </Container>
    </>
  );
}
