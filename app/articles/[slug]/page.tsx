import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '../../../components/JsonLd';
import { articles, getArticle } from '../../../lib/articles';
import { absolute, brandName } from '../../../lib/site';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: { title: article.title, description: article.description, type: 'article' },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    author: { '@type': 'Organization', name: brandName },
    datePublished: article.datePublished,
    description: article.description,
    headline: article.title,
    mainEntityOfPage: absolute(`/articles/${article.slug}/`),
  };

  return (
    <div className="container">
      <JsonLd data={jsonLd} />
      <article>
        <section>
          <p><Link href="/articles/">← 返回文章列表</Link></p>
          <h1>{article.title}</h1>
          <p className="muted">{article.datePublished} · {brandName}</p>
          <p><strong>{article.excerpt}</strong></p>
        </section>
        {article.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </section>
        ))}
        <section>
          <h2>常见问题</h2>
          {article.faq.map((f) => (
            <div className="faq-item" key={f.question}>
              <h3>{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
        </section>
      </article>
    </div>
  );
}
