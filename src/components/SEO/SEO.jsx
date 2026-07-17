import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { siteContact } from '../../utils/siteContact.js';

export const SITE_URL = 'https://abstudies.in';
export const SITE_DESCRIPTION =
  'AB Studies provides Tuition, Abacus, Therapy, Computer Education, Art & Craft, School Projects and Child Development programs in Guwahati.';

const SOCIAL_IMAGE = `${SITE_URL}/og-image.png`;

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return `/${pathname.replace(/^\/+|\/+$/g, '')}`;
}

function SEO({
  title,
  pathname = '/',
  description = SITE_DESCRIPTION,
  noIndex = false,
  includeCanonical = true,
}) {
  const normalizedPath = normalizePath(pathname);
  const canonicalUrl =
    normalizedPath === '/' ? SITE_URL : `${SITE_URL}${normalizedPath}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'EducationalOrganization'],
        '@id': `${SITE_URL}/#organization`,
        name: 'AB Studies',
        url: SITE_URL,
        logo: `${SITE_URL}/apple-touch-icon.png`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteContact.address,
          addressCountry: 'IN',
        },
        telephone: siteContact.phone,
        email: siteContact.email,
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'AB Studies',
        url: SITE_URL,
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        inLanguage: 'en',
      },
    ],
  };

  useEffect(() => {
    document
      .querySelectorAll('[data-seo-fallback]')
      .forEach((element) => element.remove());
  }, []);

  return (
    <Helmet>
      <title>{title}</title>
      {includeCanonical ? <link rel="canonical" href={canonicalUrl} /> : null}
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow'}
      />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={SOCIAL_IMAGE} />
      <meta property="og:image:alt" content="AB Studies logo" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AB Studies" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
      <meta name="twitter:image:alt" content="AB Studies logo" />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}

export default SEO;
