import type { MetadataRoute } from 'next';

const SITE = 'https://www.ratanmia.pro';

const ROUTES = [
  '',
  '/about',
  '/services',
  '/portfolio',
  '/case-studies',
  '/case-studies/auto-trader',
  '/case-studies/chery-bangladesh-app',
  '/case-studies/elf-bangladesh-app',
  '/case-studies/gamify',
  '/case-studies/omoda-jaecoo',
  '/case-studies/shopify-headless-cms',
  '/case-studies/turfnations-booking',
  '/resume',
  '/contact',
  '/quote',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : path.startsWith('/case-studies/') ? 0.7 : 0.6,
  }));
}
