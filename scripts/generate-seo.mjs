/**
 * Regenerate public/sitemap.xml, public/robots.txt and public/llms.txt
 * from the single source of truth: config/site.json
 * Run: npm run generate-seo   (also runs automatically before `npm run build`)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const site = JSON.parse(readFileSync(join(root, 'config/site.json'), 'utf8'));
const url = site.site.url.replace(/\/$/, '');

const pages = [
  { changefreq: 'weekly', path: '/', priority: '1.0' },
  { changefreq: 'monthly', path: '/product/', priority: '0.9' },
  { changefreq: 'weekly', path: '/articles/', priority: '0.8' },
  { changefreq: 'monthly', path: '/articles/how-to-choose/', priority: '0.7' },
  { changefreq: 'monthly', path: '/articles/how-to-use-daily/', priority: '0.7' },
  { changefreq: 'monthly', path: '/faq/', priority: '0.8' },
  { changefreq: 'monthly', path: '/about/', priority: '0.6' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${url}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

# AI crawlers are welcome: this site publishes llms.txt for AI search.
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${url}/sitemap.xml
`;

const llms = `# ${site.brand.name}

> ${site.brand.tagline}
> ${site.brand.description}

## 产品

- ${site.product.name}：${site.product.summary}
- 示例价格：${site.product.price}（示例价格）
- 卖点：${site.product.sellingPoints.map((s) => s.title).join('；')}

## 页面

- 首页：${url}/
- 产品：${url}/product/
- 文章：${url}/articles/
- 选购指南：${url}/articles/how-to-choose/
- 使用方法：${url}/articles/how-to-use-daily/
- 常见问题：${url}/faq/
- 关于我们：${url}/about/

## 常见问题

${site.faqs.map((f) => `- ${f.question} ${f.answer}`).join('\n')}

## 联系

- 邮箱：${site.site.email}
- 电话：${site.site.phone}
- 地址：${site.site.address}
`;

writeFileSync(join(root, 'public/sitemap.xml'), sitemap);
writeFileSync(join(root, 'public/robots.txt'), robots);
writeFileSync(join(root, 'public/llms.txt'), llms);
console.log(`SEO files generated for ${url}`);
