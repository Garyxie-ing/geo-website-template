import type { Metadata } from 'next';
import { config } from '../../lib/site';

export const metadata: Metadata = {
  title: '关于我们',
  description: config.brand.description,
};

export default function AboutPage() {
  return (
    <div className="container">
      <section>
        <h1>关于我们</h1>
        <p>{config.brand.description}</p>
        <table>
          <tbody>
            <tr><th scope="row">品牌</th><td>{config.brand.name}（{config.brand.nameEn}）</td></tr>
            <tr><th scope="row">成立</th><td>{config.brand.founded}（示例）</td></tr>
            <tr><th scope="row">地点</th><td>{config.brand.location}</td></tr>
            <tr><th scope="row">邮箱</th><td>{config.site.email}</td></tr>
            <tr><th scope="row">电话</th><td>{config.site.phone}</td></tr>
            <tr><th scope="row">地址</th><td>{config.site.address}</td></tr>
          </tbody>
        </table>
        <p className="muted">本页所有信息均为模板示例，请在 config/site.json 中替换为真实品牌信息。</p>
      </section>
    </div>
  );
}
