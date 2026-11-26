/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the whole site is plain HTML/CSS/JS after `npm run build`.
  // Deploy the `out/` folder to Vercel, Netlify, GitHub Pages, InfinityFree, or any static host.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
