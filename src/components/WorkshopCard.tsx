import type { Workshop } from '@/types';
import Badge from '@/components/Badge';
import Icon from '@/components/Icon';
import { formatDate } from '@/lib/format';

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: WorkshopCardProps) {
  return (
    <div className="card flex flex-col p-6">
      <div className="flex items-center gap-3">
        <Badge accent={workshop.modality === 'En línea' ? 'primary' : 'accent'}>
          {workshop.modality}
        </Badge>
        <time dateTime={workshop.date} className="text-xs font-medium text-ink-500">
          {formatDate(workshop.date)}
        </time>
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">{workshop.title}</h3>

      <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-500">
        <Icon name="compass" className="h-4 w-4 shrink-0" />
        {workshop.place}
      </p>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{workshop.summary}</p>

      <a
        href={workshop.registerUrl}
        className="btn-secondary mt-4 self-start"
        aria-label={`Inscribirme al taller: ${workshop.title}`}
      >
        Quiero participar
      </a>
    </div>
  );
}
