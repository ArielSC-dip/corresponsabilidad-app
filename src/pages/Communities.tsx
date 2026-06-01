import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import CommunityCard from '@/components/CommunityCard';
import Icon from '@/components/Icon';
import { communities } from '@/data/communities';

export default function Communities() {
  return (
    <>
      <PageHeader
        eyebrow="Comunidades temáticas"
        title="Espacios de afinidad para explorar juntos"
        description="Cada comunidad reúne recursos e ideas sobre un tema. No son chats ni redes sociales: son espacios informativos para encontrar materiales afines a lo que te interesa."
      />

      <Container as="section" className="py-12">
        <div className="inline-flex items-start gap-2 rounded-xl bg-primary-50 p-4 text-sm text-primary-800">
          <Icon name="leaf" className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
          <p>
            Aquí no se publican mensajes ni se interactúa con otras personas. Son colecciones de
            recursos pensadas para inspirar conversaciones en tu propio hogar.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </Container>
    </>
  );
}
