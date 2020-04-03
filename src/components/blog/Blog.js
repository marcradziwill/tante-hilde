import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import FullWidthBox from 'components/FullWidthBox';
import PageHeader from 'components/PageHeader';
import SEO from 'components/SEO/SEO';
// import StyledButton from 'components/StyledButton';
import StyledBox from 'components/StyledBox';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
// import Svelte from '../../../static/icons/Svelte_Logo.svg';
// import { NewsletterContext } from 'state/context';

function PaginatedBlog({
  data: { allMdx, site },
  pageContext: { pagination },
}) {
  console.log(allMdx);
  const { page, nextPagePath, previousPagePath } = pagination;
  const showPagination = previousPagePath || nextPagePath;

  console.log(allMdx.edges);
  const posts = page
    .map((id) =>
      allMdx.edges.find(
        (edge) =>
          edge.node.id === id &&
          edge.node.parent.sourceInstanceName !== 'pages',
      ),
    )
    .filter((post) => post !== undefined);

  return (
    <>
      <SEO
        title="Tante Hilde Blog"
        description="Unser Tante Hilde Blog"
        image="/Header-Tantehilde-Laden-Allgaeu.png"
        headerImage="/Header-Tantehilde-Laden-Allgaeu.png"
        follow="index, follow"
      />

      <StyledBox>
        <article>
          <PageHeader
            id="backtotop"
            title="Tante Hilde Blog"
            image={{
              src: 'Header-Tantehilde-Laden-Allgaeu.png',
              alt: 'Tante Hilde Laden - Dein virtueller Marktplatz im Allgäu!',
              title: 'Tante Hilde Laden Allgaeu',
            }}
            vheight="50vh"
          />
          <FullWidthBox>
            <h1
              css={css`
                color: #555;
              `}
            >
              Tante Hilde Blog
            </h1>
          </FullWidthBox>
          <FullWidthBox>
            <ResponsiveGrid>
              {posts.map(({ node: post }) => (
                <div
                  key={post.id}
                  style={{
                    padding: '0.5em',
                    display: 'flex',
                    msFlexDirection: 'column',
                    flexDirection: 'column',
                  }}
                >
                  {post.frontmatter.banner && (
                    <div
                      style={{
                        position: 'relative',
                      }}
                    >
                      <Link
                        aria-label={`View ${post.frontmatter.title} article`}
                        to={post.fields.slug}
                      >
                        <Img
                          style={{ height: '300px' }}
                          alt={`Image of blog post: ${post.frontmatter.title}`}
                          fluid={post.frontmatter.banner.childImageSharp.fluid}
                        />
                      </Link>
                    </div>
                  )}
                  <StyledBox>
                    <StyledBox pad={{ top: '20px' }}>
                      <h2
                        className="medium"
                        css={css`
                          // margin: 0;
                        `}
                      >
                        <Link
                          aria-label={`View ${post.frontmatter.title} article`}
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </h2>
                      <h3
                        style={{
                          fontSize: '.675rem',
                          lineHeight: '1.375rem',
                          fontWeight: '500',
                          letterSpacing: '.0071428571em',
                          margin: '0',
                        }}
                      >
                        von Tante Hilde{' | '}
                        <span
                          style={{
                            fontSize: '.675rem',
                            lineHeight: '1.375rem',
                            fontWeight: '500',
                            letterSpacing: '.0071428571em',
                            margin: '0',
                          }}
                        >
                          {post.frontmatter.date}
                          {' | '}
                        </span>
                        <span
                          css={css`
                            font-size: 0.675rem;
                          `}
                        >
                          {post.timeToRead === 1
                            ? `${post.timeToRead} minute to read`
                            : `${post.timeToRead} minutes to read`}
                        </span>
                      </h3>
                    </StyledBox>
                    {post.frontmatter.categories && (
                      <StyledBox>
                        <span
                          css={css`
                            font-size: 11.666666666666666px;
                            line-height: 20.666666666666668px;
                          `}
                        >
                          Kategorien:
                          {post.frontmatter.categories.map(
                            (categoryItem, idx) => {
                              let categoryItemName =
                                categoryItem.charAt(0).toUpperCase() +
                                categoryItem.slice(1);

                              if (categoryItem === 'javascript') {
                                categoryItemName = 'JavaScript';
                              }

                              return <span key={idx}> {categoryItemName}</span>;
                            },
                          )}
                        </span>
                      </StyledBox>
                    )}
                    <StyledBox pad={{ top: '20px' }}>
                      <p>{post.excerpt}</p>
                    </StyledBox>
                    <StyledBox
                      pad={{
                        bottom: '20px',
                      }}
                    >
                      <Link
                        to={post.fields.slug}
                        aria-label={`view "${post.frontmatter.title}" article`}
                      >
                        Mehr lesen →
                      </Link>
                    </StyledBox>
                  </StyledBox>
                </div>
              ))}
            </ResponsiveGrid>
          </FullWidthBox>

          {showPagination && (
            <FullWidthBox>
              <div css={{ display: 'flex', justifyContent: 'space-around' }}>
                {previousPagePath ? (
                  <Link to={previousPagePath} aria-label="View previous page">
                    ← Previous Page
                  </Link>
                ) : (
                  <div />
                )}
                {nextPagePath ? (
                  <Link to={nextPagePath} aria-label="View next page">
                    Next Page →
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </FullWidthBox>
          )}
        </article>
      </StyledBox>
    </>
  );
}

export default React.memo(PaginatedBlog);
