import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';
import config from 'utils/website';
import FullWidthBox from 'components/FullWidthBox';
import SEO from 'components/SEO/SEO';
import ExternalLink from 'components/ExternalLink';
import SocialShare from 'components/SocialShare';
import mdxComponents from 'components/mdx';
// import NewsletterBox from 'components/NewsletterBox';
import Markdown from 'react-markdown';
import StyledBox from 'components/StyledBox';

export default function PostPage(props) {
  return <Post {...props} />;
}

function Post({ data: { site, mdx }, location }) {
  const {
    title,
    // slug,
    description,
    banner,
    bannerCredit,
    modified,
    date,
    modifiedDescription,
    categories,
  } = mdx.fields;
  // const blogPostUrl = `${config.siteUrl}${slug}`;
  return (
    <MDXProvider components={mdxComponents}>
      <SEO
        title={`blog: ${title}`}
        description={description}
        image={banner}
        pathname={location.pathname}
        headerImage={banner}
        article
        node={mdx.fields}
        follow="index,follow"
      />
      <StyledBox>
        <article>
          <FullWidthBox
            pad={{
              top: '120px',
              bottom: '20px',
            }}
            sectionwidth="45rem"
          >
            <h1
              css={css`
                text-align: center;
              `}
            >
              {title}
            </h1>
            <StyledBox className="align-c">
              <StyledBox pad={{ top: 'small', left: 'none', right: 'none' }}>
                <h3
                  style={{
                    fontSize: '15px',
                    lineHeight: '24px',
                    fontWeight: '500',
                    letterSpacing: '.0071428571em',
                    margin: '0',
                  }}
                >
                  von Tante Hilde{' | '}
                  <span
                    style={{
                      lineHeight: '1.375rem',
                      fontWeight: '500',
                      letterSpacing: '.0071428571em',
                      margin: '0',
                    }}
                  >
                    {date}
                    {' | '}
                  </span>
                  <span>
                    {mdx.timeToRead === 1
                      ? `${mdx.timeToRead} Minute Lesezeit`
                      : `${mdx.timeToRead} Minuten Lesezeit`}
                  </span>
                </h3>
              </StyledBox>
              {categories && (
                <StyledBox
                  css={css`
                    padding: 20px 0 0 0;
                  `}
                >
                  <span className="text large">
                    Kategorien:
                    {categories.map((categoryItem, idx) => {
                      let categoryItemName =
                        categoryItem.charAt(0).toUpperCase() +
                        categoryItem.slice(1);

                      if (categoryItem === 'javascript') {
                        categoryItemName = 'JavaScript';
                      }

                      return (
                        <span className="text large" key={idx}>
                          {' '}
                          {categoryItemName}
                          {idx === categories.length - 1 ? ' ' : ', '}
                        </span>
                      );
                    })}
                  </span>
                </StyledBox>
              )}
              <StyledBox
                css={css`
                  padding: 20px 0 0 0;
                `}
              >
                {description ? <Markdown>{description}</Markdown> : null}
              </StyledBox>
              {modified && (
                <StyledBox
                  pad={{ bottom: 'medium', left: 'none', right: 'none' }}
                >
                  <span className="text">
                    Dieser Beitrag wurde am {modified} bearbeitet. Für weitere
                    Details schaut bitte {` `}
                    <ExternalLink href="#modifiedDescription">
                      am Ende der Seite
                    </ExternalLink>
                    .
                  </span>
                </StyledBox>
              )}
            </StyledBox>
            {banner && (
              <div style={{ textAlign: 'center' }}>
                <Img
                  // style={{ maxHeight: '500px' }}
                  fluid={banner.childImageSharp.fluid}
                  alt={site.siteMetadata.keywords.join(', ')}
                />

                {bannerCredit ? (
                  <div
                    css={css`
                      p {
                        margin: 0;
                      }
                    `}
                  >
                    <Markdown>{bannerCredit}</Markdown>{' '}
                  </div>
                ) : null}
              </div>
            )}
          </FullWidthBox>
          <FullWidthBox
            sectionwidth="45rem"
            pad={{ top: '10px', bottom: '40px' }}
          >
            <MDXRenderer
              css={css`
                img {
                  display: block;
                  margin-left: auto;
                  margin-right: auto;
                  width: 50%;
                }
                li > p {
                  margin-bottom: 0 !important;
                }
                li > ul {
                  margin-top: 0;
                }
                hr {
                  height: 1px;
                }
              `}
            >
              {mdx.body}
            </MDXRenderer>
            <SocialShare />
          </FullWidthBox>
          {modifiedDescription && (
            <FullWidthBox
              id="modifiedDescription"
              sectionwidth="45rem"
              pad={{ top: '10px', bottom: '40px' }}
            >
              <span className="text" style={{ fontStyle: 'italic' }}>
                Dieser Beitrag wurde am {modified} bearbeitet.
                <br />
              </span>
              <span className="text" style={{ fontStyle: 'italic' }}>
                {modifiedDescription}
              </span>
            </FullWidthBox>
          )}

          <FullWidthBox
            css={css`
              display: flex;
              justify-content: center;
              text-align: center;
              align-items: center;
              text-align: center;
            `}
          >
            <p>
              Der{' '}
              <ExternalLink
                target="_blank"
                href="https://github.com/marcradziwill/tante-hilde"
              >
                Programmiercode
              </ExternalLink>{' '}
              dieser Seite ist quelloffen und darf gerne für deine Region
              verwendet werden. Für Texte und Bilder gilt folgende Lizenz:
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe
                unter gleichen Bedingungen 4.0 International Lizenz
              </a>
              .
            </p>
            <p>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                <img
                  alt="Creative Commons Lizenzvertrag"
                  src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
                />
              </a>
            </p>
          </FullWidthBox>
        </article>
      </StyledBox>
    </MDXProvider>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        keywords
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        modified
        modifiedDescription
        plainTextDescription
        author
        banner {
          ...bannerImage720
          ...bannerImageSeo1200
        }
        bannerCredit
        slug
        keywords
        readingDependencies
        readerLevel
        categories
      }
      wordCount {
        words
      }
      timeToRead
      body
    }
  }
`;
