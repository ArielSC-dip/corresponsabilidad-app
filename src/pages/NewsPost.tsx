import { Link, useParams } from 'react-router-dom';
import Container from '@/components/Container';
import Badge from '@/components/Badge';
import NewsCard from '@/components/NewsCard';
import NotFound from '@/pages/NotFound';
import { getNewsBySlug, news } from '@/data/news';
import { formatDate } from '@/lib/format';
import type { NewsTag } from '@/types';

const tagAccent: Record<NewsTag, 'primary' | 'accent' | 'sand' | 'neutral'> = {
  Novedad: 'primary',
  Reflexión: 'sand',
  Recurso: 'accent',
  Taller: 'neutral',
};

export default function NewsPost() {
  const { slug } = useParams();
  const post = slug ? getNewsBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  const related = news.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-ink-50">
        <Container className="py-12 sm:py-16">
          <nav className="mb-6 flex items-center gap-2 text-sm text-ink-500" aria-label="Migas de pan">
            <Link to="/novedades" className="hover:text-ink-700">
              Novedades
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink-700">{post.title}</span>
          </nav>
          <div className="flex items-center gap-3">
            <Badge accent={tagAccent[post.tag]}>{post.tag}</Badge>
            <time dateTime={post.date} className="text-sm text-ink-500">
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            {post.title}
          </h1>
        </Container>
      </section>

      <Container as="article" className="py-12">
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink-700">
          <p className="text-lg font-medium text-ink-900">{post.summary}</p>
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/novedades" className="btn-ghost">
            ← Volver a novedades
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-xl font-semibold text-ink-900">Más novedades</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <NewsCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
