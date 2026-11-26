import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '../../lib/articles';

export const metadata: Metadata = {
  title: '文章',
  description: '选购指南与使用方法：结论先给，再分段展开，附常见问题。',
};

export default function ArticlesPage() {
  return (
    <div className="container">
      <section>
        <h1>文章</h1>
        <p>选购指南与使用方法。每一篇都先给结论，再分段展开，最后附常见问题——这是为 AI 搜索（GEO）优化的结构。</p>
        <ul className="article-list">
          {articles.map((a) => (
            <li key={a.slug}>
              <h2><Link href={`/articles/${a.slug}/`}>{a.title}</Link></h2>
              <p>{a.excerpt}</p>
              <p className="muted">{a.datePublished}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
