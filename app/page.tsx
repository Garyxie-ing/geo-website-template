import type { Metadata } from 'next';
import Link from 'next/link';
import { brandName, brandTagline, config, product } from '../lib/site';
import { articles } from '../lib/articles';

export const metadata: Metadata = {
  title: `${brandName} | ${brandTagline}`,
  description: config.brand.description,
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>{brandName}：{brandTagline}</h1>
          <p>{product.summary}</p>
          <p>
            <Link className="btn" href="/product/">查看产品</Link>
            <Link className="btn btn-secondary" href="/articles/">阅读选购指南</Link>
          </p>
          <p className="muted">示例价格 {product.price} · 示例评分 {product.rating}（{product.reviewCount} 条评价）</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>为什么选这款产品？</h2>
          <div className="card-grid">
            {product.sellingPoints.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>最新文章</h2>
          <ul className="article-list">
            {articles.map((a) => (
              <li key={a.slug}>
                <h2><Link href={`/articles/${a.slug}/`}>{a.title}</Link></h2>
                <p>{a.excerpt}</p>
              </li>
            ))}
          </ul>
          <p><Link href="/articles/">查看全部文章 →</Link></p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>常见问题（节选）</h2>
          {config.faqs.slice(0, 3).map((f) => (
            <div className="faq-item" key={f.question}>
              <h3>{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
          <p><Link href="/faq/">查看全部常见问题 →</Link></p>
        </div>
      </section>
    </>
  );
}
