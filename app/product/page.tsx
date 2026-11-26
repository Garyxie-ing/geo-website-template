import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { config, product, productJsonLd } from '../../lib/site';

export const metadata: Metadata = {
  title: product.name,
  description: product.summary,
  openGraph: { title: product.name, description: product.summary, type: 'website' },
};

export default function ProductPage() {
  return (
    <div className="container">
      <JsonLd data={productJsonLd()} />
      <section>
        <h1>{product.name}</h1>
        <p>{product.summary}</p>
        <p className="price">
          {product.price} <del>{product.originalPrice}</del>
        </p>
        <p className="muted">示例评分 {product.rating}（{product.reviewCount} 条评价）· 示例分类：{product.category}</p>
        <p><a className="btn" href={`mailto:${config.site.email}`}>咨询购买（示例）</a></p>
      </section>

      <section>
        <h2>卖点</h2>
        <div className="card-grid">
          {product.sellingPoints.map((s) => (
            <article className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>参数表（示例）</h2>
        <table>
          <tbody>
            {product.specs.map((s) => (
              <tr key={s.label}>
                <th scope="row">{s.label}</th>
                <td>{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="muted">以上参数均为示例，请在 config/site.json 中替换为真实规格。</p>
      </section>

      <section>
        <h2>使用方法（示例）</h2>
        <ol>
          {product.howToUse.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
