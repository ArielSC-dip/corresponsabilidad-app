import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import NewsCard from '@/components/NewsCard';
import { news } from '@/data/news';

export default function News() {
  return (
    <>
      <PageHeader
        eyebrow="Novedades"
        title="Lo último de la iniciativa"
        description="Novedades, reflexiones y recursos sobre la corresponsabilidad en los cuidados del hogar. Sin prisa: léelo cuando quieras."
      />
      <Container as="section" className="py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
}
