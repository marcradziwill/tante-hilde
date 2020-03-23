/* eslint-disable complexity */
import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Facebook from './Facebook';
import Twitter from './Twitter';
import i18n from '../../utils/i18n';
import { useLocalContext } from 'components/LocalContext';

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
            twitter
            github
            facebook
            linkedin
            youtube
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
      portrait: file(relativePath: { eq: "Marc-Radziwill-im-Portrait.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoEn: file(relativePath: { eq: "marc-radziwill.en.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoDe: file(relativePath: { eq: "marc-radziwill.de.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageFiles: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(width: 1200, quality: 90) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `;

  const { site, portrait, logoDe, logoEn, imageFiles } = useStaticQuery(query);
  let { locale } = useLocalContext();
  if (locale === undefined) {
    locale = 'en';
  }
  const { defaultTitle, defaultDescription, siteLanguage } = i18n[locale];
  const {
    buildTime,
    siteMetadata: {
      author,
      siteUrl,
      defaultBanner,
      social: { twitter, facebook, github, youtube, linkedin, ogLanguage },
      organization,
    },
  } = site;

  let logo;
  if (locale === 'en') {
    logo = logoEn;
  } else {
    logo = logoDe;
  }

  let imageFile = '';
  if (imageFiles && imageFiles.edges.length > 0 && headerImage) {
    imageFile = imageFiles.edges.find((n) => {
      return n.node.relativePath.includes(headerImage.src);
    });
  }
  if (headerImage && headerImage.childImageSharp) {
    imageFile = {
      node: headerImage,
    };
  }

  const localizedPath = i18n[locale].default ? '' : `/${i18n[locale].path}`;
  const homeURL = `${siteUrl}${localizedPath}`;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ''}`,
  };
  const today = new Date();

  const schemaPersonAndOrg = {
    '@type': ['Person', 'Organization'],
    '@id': `${homeURL}#/schema/person/1`,
    name: author.name,
    description: i18n[locale].description,
    email: organization.email,
    knowsLanguage: 'de,en',
    workLocation: {
      '@type': 'Place',
      address: 'Ostbahnhofstraße 7, 87435 Kempten (Allgäu), Germany',
    },
    image: {
      '@type': 'ImageObject',
      '@id': `${homeURL}#personalimage`,
      url: `${siteUrl}${portrait.childImageSharp.fixed.src}`,
      width: portrait.childImageSharp.fixed.width,
      height: portrait.childImageSharp.fixed.height,
      caption: author.name,
    },
    sameAs: [twitter, github, facebook, linkedin, youtube],
    url: homeURL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${homeURL}#organizationlogo`,
      url: `${siteUrl}${logo.childImageSharp.fixed.src}`,
      width: logo.childImageSharp.fixed.width,
      height: logo.childImageSharp.fixed.height,
      caption: organization.name,
    },
  };

  const schemaImageFile = imageFile ? imageFile.node : logo;
  const schemaImage = {
    '@type': 'ImageObject',
    '@id': `${homeURL}#primaryimage`,
    url: `${siteUrl}${schemaImageFile.childImageSharp.fixed.src}`,
    width: schemaImageFile.childImageSharp.fixed.width,
    height: schemaImageFile.childImageSharp.fixed.height,
    caption: headerImage ? headerImage.alt : '',
  };

  const schemaOrgWebPage = {
    '@type': 'WebPage',
    '@id': `${homeURL}#webpage`,
    url: homeURL,
    inLanguage: siteLanguage,
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
    description: i18n[locale].description,
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

  const breadcrumList = pathname.split('/').filter(Boolean);
  if (article) {
    breadcrumList.splice(1);
  }

  let urlToConcat = '';
  breadcrumList.forEach((crum, idx) => {
    urlToConcat += `/${crum}`;
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': `${homeURL}${urlToConcat}/`,
        name: crum.charAt(0).toUpperCase() + crum.slice(1),
      },
      position: idx + 1,
    });
  });
  let schemaArticle = null;
  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        ...schemaPersonAndOrg,
      },
      copyrightHolder: {
        ...schemaPersonAndOrg,
      },
      copyrightYear: '2019',
      creator: {
        ...schemaPersonAndOrg,
      },
      publisher: {
        ...schemaPersonAndOrg,
      },
      datePublished: node.date,
      dateModified: node.modified || node.date,
      description: seo.description.replace(/_/g, ''),
      headline: seo.title,
      inLanguage: 'en',
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: imageFile
          ? imageFile.node.childImageSharp.fixed.src
          : logo.childImageSharp.fixed.src,
      },
      mainEntityOfPage: seo.url,
    };
    if (node.isTechArticle) {
      schemaArticle['@type'] = 'TechArticle';
      schemaArticle.proficiencyLevel = node.readerLevel || '';
      schemaArticle.dependencies = node.readingDependencies || '';
    }

    if (node.keywords) {
      schemaArticle.keywords = node.keywords.join(' ');
    }
    if (node.wordCount) {
      schemaArticle.wordcount = node.wordCount.words;
    }

    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
      },
      position: 3,
    });
  }

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
        <html lang={siteLanguage} />
        <meta name="author" content={author.name} />
        <meta name="description" content={seo.description.replace(/_/g, '')} />
        <meta
          name="image"
          content={
            imageFile
              ? siteUrl + imageFile.node.childImageSharp.fixed.src
              : siteUrl + logo.childImageSharp.fixed.src
          }
        />
        {typeof window !== `undefined` && (
          <meta
            name="robots"
            content={
              window.location.host === 'marcradziwill.com'
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
        {article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Facebook
        desc={seo.description.replace(/_/g, '')}
        image={
          imageFile === ''
            ? siteUrl + logo.childImageSharp.fixed.src
            : siteUrl + imageFile.node.childImageSharp.fixed.src
        }
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter
        title={seo.title}
        image={
          imageFile === ''
            ? siteUrl + logo.childImageSharp.fixed.src
            : siteUrl + imageFile.node.childImageSharp.fixed.src
        }
        desc={seo.description.replace(/_/g, '')}
        username={twitter}
      />
    </>
  );
};

export default SEO;
