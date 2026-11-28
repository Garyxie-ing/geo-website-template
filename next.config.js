/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the whole site is plain HTML/CSS/JS after `npm run build`.
  // Deploy the `out/` folder to Vercel, Netlify, GitHub Pages, InfinityFree, or any static host.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // GitHub Pages project sites live under a subpath (/geo-website-template/).
  // The Pages workflow sets PAGES_BASE_PATH so links and assets resolve there;
  // leave it unset for root-domain deploys (Vercel, Netlify, custom domain).
  basePath: process.env.PAGES_BASE_PATH || '',
};

module.exports = nextConfig;
