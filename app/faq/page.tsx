import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { faqs, faqJsonLd } from '../../lib/site';

export const metadata: Metadata = {
  title: '常见问题',
  description: '关于示例产品的常见问题：适用人群、首次使用、清洁存放、保修与购买渠道。',
};

export default function FaqPage() {
  return (
    <div className="container">
      <JsonLd data={faqJsonLd()} />
      <section>
        <h1>常见问题</h1>
        <p>下面是关于示例产品的常见问题，答案均为模板示例，请替换为真实内容。</p>
        {faqs.map((f) => (
          <div className="faq-item" key={f.question}>
            <h2 style={{ fontSize: 20, margin: '0 0 6px' }}>{f.question}</h2>
            <p>{f.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
