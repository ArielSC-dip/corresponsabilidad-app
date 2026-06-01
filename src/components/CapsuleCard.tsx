import { Link } from 'react-router-dom';
import type { Capsule } from '@/types';
import { getModuleById } from '@/data/modules';
import { useExploration } from '@/hooks/useExploration';
import Icon from '@/components/Icon';

interface CapsuleCardProps {
  capsule: Capsule;
}

export default function CapsuleCard({ capsule }: CapsuleCardProps) {
  const { isExplored } = useExploration();
  const module = getModuleById(capsule.moduleId);
  const explored = isExplored(capsule.id);

  return (
    <Link
      to={`/capsulas/${capsule.slug}`}
      className="card group flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
    >
      {/* Encabezado visual de la cápsula */}
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-primary-100 to-sand-100">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-primary-600 shadow-sm backdrop-blur transition group-hover:scale-105">
          <Icon name="play" className="h-7 w-7" />
        </span>
        <span className="absolute bottom-2 right-2 rounded-full bg-ink-900/70 px-2 py-0.5 text-xs font-medium text-white">
          {capsule.duration}
        </span>
        {explored && (
          <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary-700">
            <Icon name="sparkles" className="h-3.5 w-3.5" />
            Explorada
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {module && (
          <span className="text-xs font-medium uppercase tracking-wide text-ink-400">
            {module.title}
          </span>
        )}
        <h3 className="mt-1 font-display text-base font-semibold text-ink-900">{capsule.title}</h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-600">
          {capsule.description}
        </p>
      </div>
    </Link>
  );
}
