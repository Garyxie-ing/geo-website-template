import type { Metadata } from 'next';
import './globals.css';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import JsonLd from '../components/JsonLd';
import { brandName, brandTagline, config, orgJsonLd, siteUrl } from '../lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brandName} | ${brandTagline}`,
    template: `%s | ${brandName}`,
  },
  description: config.brand.description,
  openGraph: {
    description: config.brand.description,
    locale: 'zh_CN',
    siteName: brandName,
    title: `${brandName} | ${brandTagline}`,
    type: 'website',
    url: siteUrl,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <JsonLd data={orgJsonLd()} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
