import site from '../config/site.json';

export type SiteConfig = typeof site;

export const config: SiteConfig = site;

/** Brand name, used in header / footer / titles. */
export const brandName = config.brand.name;
export const brandTagline = config.brand.tagline;
/** Canonical site URL, e.g. https://example.com — change it in config/site.json only. */
export const siteUrl = config.site.url.replace(/\/$/, '');
export const product = config.product;
export const faqs = config.faqs;
export const nav = config.nav;

export function absolute(path: string): string {
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function orgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    address: config.site.address,
    contactPoint: {
      '@type': 'ContactPoint',
      email: config.site.email,
      telephone: config.site.phone,
    },
    description: config.brand.description,
    name: brandName,
    url: siteUrl,
  };
}

export function productJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: product.reviewCount,
    },
    brand: { '@type': 'Brand', name: brandName },
    description: product.summary,
    name: product.name,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '299',
      priceCurrency: 'CNY',
      url: absolute('/product/'),
    },
  };
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
      name: f.question,
    })),
  };
}
