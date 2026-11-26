import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container">
      <section>
        <h1>页面不存在（404）</h1>
        <p>你要找的页面不存在或已被移动。</p>
        <p><Link href="/">返回首页 →</Link></p>
      </section>
    </div>
  );
}
