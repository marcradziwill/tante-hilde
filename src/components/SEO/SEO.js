/* eslint-disable complexity */
import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Facebook from './Facebook';
import Twitter from './Twitter';
// import i18n from '../../utils/i18n';
// import { useLocalContext } from 'components/LocalContext';

// eslint-disable-next-line complexity
// eslint-disable-next-line max-statements
// eslint-disable-next-line complexity
// eslint-disable-next-line max-statements
const SEO = ({
  title,
  description,
  banner,
  pathname,
  article,
  node,
  image,
  headerImage,
  follow,
}) => {
  const query = graphql`
    query SEO {
      site {
        buildTime(formatString: "YYYY-MM-DD")
        siteMetadata {
          siteUrl
          defaultBanner: image
          social {
            ogLanguage
            instagram
            facebook
          }
          author {
            name
          }
          organization {
            name
            email
            address {
              streetNumber
              zipCity
            }
            logo
          }
        }
      }
    }
  `;

  const { site, portrait, logoDe, logoEn, imageFiles } = useStaticQuery(query);
  // let { locale } = useLocalContext();
  let locale;

  if (locale === undefined) {
    locale = 'de';
  }
  // const { defaultTitle, defaultDescription, siteLanguage } = i18n[locale];
  const {
    buildTime,
    siteMetadata: {
      author,
      siteUrl,
      defaultBanner,
      social: { facebook, instagram, ogLanguage },
      organization,
    },
  } = site;

  // let logo;
  // if (locale === 'en') {
  //   logo = logoEn;
  // } else {
  //   logo = logoDe;
  // }

  // const localizedPath = i18n[locale].default ? '' : `/${i18n[locale].path}`;
  // const homeURL = `${siteUrl}${localizedPath}`;
  const homeURL = `https://tante-hilde.org/`;

  const seo = {
    title: title || 'defaultTitle',
    description: description || 'defaultDescription',
    image: `${image}`,
    url: `${siteUrl}${pathname || ''}`,
  };
  const today = new Date();

  const schemaPersonAndOrg = {
    '@type': ['Person', 'Organization'],
    '@id': `${homeURL}#/schema/person/1`,
    name: author.name,
    description: 'i18n[locale].description',
    email: organization.email,
    knowsLanguage: 'de,en',
    workLocation: {
      '@type': 'Place',
      address: 'Ostbahnhofstraße 7, 87435 Kempten (Allgäu), Germany',
    },
    image: {
      '@type': 'ImageObject',
      '@id': `${homeURL}#personalimage`,
      url: `${image}`,
      // width: portrait.childImageSharp.fixed.width,
      // height: portrait.childImageSharp.fixed.height,
      caption: author.name,
    },
    sameAs: [instagram, facebook],
    url: homeURL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${homeURL}#organizationlogo`,
      url: `${siteUrl}/tantehilde-gruen.png`,
      width: '',
      height: '',
      caption: organization.name,
    },
  };

  // const schemaImageFile = imageFile ? imageFile.node : logo;
  const schemaImage = {
    '@type': 'ImageObject',
    '@id': `${homeURL}#primaryimage`,
    url: `${image}`,
  };

  const schemaOrgWebPage = {
    '@type': 'WebPage',
    '@id': `${homeURL}#webpage`,
    url: homeURL,
    inLanguage: 'de_DE',
    mainEntityOfPage: homeURL,
    description,
    name: title,
    copyrightYear: today.getFullYear(),
    about: schemaPersonAndOrg,
    author: schemaPersonAndOrg,
    copyrightHolder: schemaPersonAndOrg,
    creator: schemaPersonAndOrg,
    publisher: schemaPersonAndOrg,
    datePublished: '2019-12-02',
    dateModified: buildTime,
    isPartOf: { '@id': `${homeURL}#website` },
    primaryImageOfPage: { '@id': `${homeURL}#primaryimage` },
    image: schemaImage,
  };

  const schemaWebsite = {
    '@type': 'WebSite',
    '@id': `${homeURL}#website`,
    url: homeURL,
    name: author.name,
    description: 'i18n[locale].description',
    publisher: {
      '@id': `${homeURL}#/schema/person/1`,
    },
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      schemaPersonAndOrg,
      schemaWebsite,
      schemaImage,
      schemaOrgWebPage,
    ],
  };

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
  ];

  // const breadcrumList = pathname.split('/').filter(Boolean);
  // if (article) {
  //   breadcrumList.splice(1);
  // }

  // let urlToConcat = '';
  // breadcrumList.forEach((crum, idx) => {
  //   urlToConcat += `/${crum}`;
  //   itemListElement.push({
  //     '@type': 'ListItem',
  //     item: {
  //       '@id': `${homeURL}${urlToConcat}/`,
  //       name: crum.charAt(0).toUpperCase() + crum.slice(1),
  //     },
  //     position: idx + 1,
  //   });
  // });

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  };

  const followValue = follow ? follow : 'noindex, nofollow';

  return (
    <>
      <Helmet title={seo.title}>
        <html lang="de" />
        <meta name="author" content={author.name} />
        <meta name="description" content={seo.description.replace(/_/g, '')} />
        <meta name="image" content={`${siteUrl}/tantehilde-gruen.png`} />
        <link
          href="https://fonts.googleapis.com/css?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
          rel="stylesheet"
        />
        {typeof window !== `undefined` && (
          <meta
            name="robots"
            content={
              window.location.host === 'tante-hilde.org'
                ? followValue
                : 'noindex, nofollow'
            }
          />
        )}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        {!article && (
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Facebook
        desc={seo.description.replace(/_/g, '')}
        image={`${siteUrl}/tantehilde-gruen.png`}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
    </>
  );
};

export default SEO;
