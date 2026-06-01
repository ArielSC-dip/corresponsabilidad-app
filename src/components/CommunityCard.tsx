import { Link } from 'react-router-dom';
import type { Community } from '@/types';
import Icon from '@/components/Icon';

interface CommunityCardProps {
  community: Community;
}

const accentBadge: Record<Community['accent'], string> = {
  primary: 'bg-primary-50 text-primary-600',
  accent: 'bg-accent-50 text-accent-600',
  sand: 'bg-sand-100 text-sand-500',
};

export default function CommunityCard({ community }: CommunityCardProps) {
  return (
    <Link
      to={`/comunidades/${community.slug}`}
      className="card group flex flex-col p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
    >
      <span
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accentBadge[community.accent]}`}
      >
        <Icon name={community.icon} className="h-6 w-6" />
      </span>
      <h3 className="font-display text-lg font-semibold text-ink-900">{community.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-600">{community.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-700">
        Explorar recursos
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
