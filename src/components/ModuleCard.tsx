import { Link } from 'react-router-dom';
import type { Module } from '@/types';
import { getCapsulesByModule } from '@/data/capsules';
import Icon from '@/components/Icon';

interface ModuleCardProps {
  module: Module;
}

const accentRing: Record<Module['accent'], string> = {
  primary: 'group-hover:ring-primary-200',
  accent: 'group-hover:ring-accent-200',
  sand: 'group-hover:ring-sand-200',
};

const accentBadge: Record<Module['accent'], string> = {
  primary: 'bg-primary-50 text-primary-600',
  accent: 'bg-accent-50 text-accent-600',
  sand: 'bg-sand-100 text-sand-500',
};

export default function ModuleCard({ module }: ModuleCardProps) {
  const count = getCapsulesByModule(module.id).length;
  return (
    <Link
      to={`/modulos/${module.slug}`}
      className={`card group flex flex-col p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft ${accentRing[module.accent]} hover:ring-2`}
    >
      <span
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accentBadge[module.accent]}`}
      >
        <Icon name={module.icon} className="h-6 w-6" />
      </span>
      <h3 className="font-display text-lg font-semibold text-ink-900">{module.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-600">
        {module.shortDescription}
      </p>
      <span className="mt-4 text-xs font-medium text-ink-400">
        {count} {count === 1 ? 'cápsula' : 'cápsulas'}
      </span>
    </Link>
  );
}
