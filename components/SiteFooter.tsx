import Link from 'next/link';
import { brandName, config } from '../lib/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          <strong>{brandName}</strong> · {config.brand.tagline}
        </p>
        <p>
          联系：{config.site.email} · {config.site.phone}
        </p>
        <p>
          <Link href="/faq/">常见问题</Link> · <Link href="/about/">关于我们</Link> ·{' '}
          <Link href="/llms.txt">llms.txt</Link> · <Link href="/sitemap.xml">网站地图</Link>
        </p>
        <p className="muted">本站为 GEO 官网模板演示，产品信息均为示例，请以 config/site.json 中的内容为准。</p>
      </div>
    </footer>
  );
}
