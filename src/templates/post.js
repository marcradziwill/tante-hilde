import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import FullWidthBox from 'components/FullWidthBox';
import SEO from 'components/SEO/SEO';
import ExternalLink from 'components/ExternalLink';
import SocialShare from 'components/SocialShare';
import StyledBox from 'components/StyledBox';

export default function PostPage(props) {
  return <Post {...props} />;
}

function Post({ data: { post }, location }) {
  const { title, date, excerpt, content, featured_media } = post;

  return (
    <>
      <SEO
        title={title}
        description={excerpt}
        image={featured_media.source_url}
        pathname={location.pathname}
        headerImage={featured_media.source_url}
        article
        follow="index,follow"
      />
      <StyledBox
        css={css`
          margin-top: 60px;
        `}
      >
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
              dangerouslySetInnerHTML={{ __html: title }}
            />

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
                  von Tante Hilde
                  {/* <span
                    style={{
                      lineHeight: '1.375rem',
                      fontWeight: '500',
                      letterSpacing: '.0071428571em',
                      margin: '0',
                    }}
                  >
                    {date}
                  </span> */}
                </h3>
              </StyledBox>
              {/* {categories && (
                <StyledBox
                  css={css`
                    padding: 20px 0 0 0;
                    margin-bottom: 20px;
                  `}
                >
                  <span className="text large">
                    Kategorien:
                    {categories.map((categoryItem, idx) => {
                      return (
                        <span className="text large" key={idx}>
                          {' '}
                          {categoryItem.name}
                          {idx === categories.length - 1 ? ' ' : ', '}
                        </span>
                      );
                    })}
                  </span>
                </StyledBox>
              )} */}
            </StyledBox>
            {/* {featured_media && (
              <div style={{ textAlign: 'center' }}>
                <img
                  src={featured_media.source_url}
                  alt={featured_media.alt}
                  title={featured_media.title}
                />
              </div>
            )} */}
          </FullWidthBox>
          <FullWidthBox
            sectionwidth="45rem"
            pad={{ top: '10px', bottom: '40px' }}
            css={css`
              iframe {
                width: 100%;
                min-height: 400px;
              }
            `}
          >
            <StyledBox
              css={css`
                padding: 20px 0 0 0;
              `}
            >
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </StyledBox>
            <SocialShare />
          </FullWidthBox>

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
    </>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        keywords
      }
    }
    post: wordpressPost(id: { eq: $id }) {
      id
      content
      path
      title
      date
      excerpt
      slug
      featured_media {
        alt_text
        source_url
        title
      }
      categories {
        name
      }
    }
  }
`;
