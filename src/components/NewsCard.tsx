import { Link } from 'react-router-dom';
import type { NewsPost, NewsTag } from '@/types';
import Badge from '@/components/Badge';
import { formatDate } from '@/lib/format';

interface NewsCardProps {
  post: NewsPost;
}

const tagAccent: Record<NewsTag, 'primary' | 'accent' | 'sand' | 'neutral'> = {
  Novedad: 'primary',
  Reflexión: 'sand',
  Recurso: 'accent',
  Taller: 'neutral',
};

export default function NewsCard({ post }: NewsCardProps) {
  return (
    <Link
      to={`/novedades/${post.slug}`}
      className="card group flex flex-col p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
    >
      <div className="flex items-center gap-3">
        <Badge accent={tagAccent[post.tag]}>{post.tag}</Badge>
        <time dateTime={post.date} className="text-xs text-ink-400">
          {formatDate(post.date)}
        </time>
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">{post.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-600">{post.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-700">
        Leer más
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
