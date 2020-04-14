import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import FullWidthBox from 'components/FullWidthBox';
import PageHeader from 'components/PageHeader';
import SEO from 'components/SEO/SEO';
import StyledBox from 'components/StyledBox';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';

function PaginatedBlog({ data, pageContext: { pagination } }) {
  const { nextPagePath, previousPagePath } = pagination;
  const showPagination = previousPagePath || nextPagePath;

  const posts = data.allWordpressPost.nodes;
  return (
    <>
      <SEO
        title="Tante Hilde Schaufenster"
        description=" Du kannst deine allgäuer Lieblingsläden und Lieblingsdienstleister
        gerade nicht persönlich besuchen. Deshalb gibt es jetzt das Tante
        Hilde Schaufenster für dich. In unseren Interviews erzählen die
        Menschen, die hinter den Länden und Dienstleistungen im Allgäu
        stecken, wie sie das Beste aus der aktuellen Situation machen."
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
                margin-bottom: 100px;
              `}
            >
              Das Tante Hilde - Schaufenster
            </h1>
            <h2>Was ist das Tante Hilde Schaufenster?</h2>
            <p>
              Du kannst deine allgäuer Lieblingsläden und Lieblingsdienstleister
              gerade nicht persönlich besuchen. Deshalb gibt es jetzt das Tante
              Hilde Schaufenster für dich. In unseren Interviews erzählen die
              Menschen, die hinter den Länden und Dienstleistungen im Allgäu
              stecken, wie sie das Beste aus der aktuellen Situation machen.
            </p>
            <p>
              In unseren Inteviews kannst du die Menschen endlich mal wieder
              sehen und hören. Außerdem erfährst du, warum sie Tante Hilde sind.
            </p>
          </FullWidthBox>
          <FullWidthBox pad="none">
            <ResponsiveGrid>
              {posts.map((post) => (
                <div
                  key={post.id}
                  style={{
                    padding: '0.5em',
                    display: 'flex',
                    msFlexDirection: 'column',
                    flexDirection: 'column',
                  }}
                >
                  {post.featured_media && (
                    <div
                      style={{
                        position: 'relative',
                      }}
                    >
                      <Link
                        aria-label={`View ${post.title} article`}
                        to={`/schaufenster/${post.slug}/`}
                      >
                        <div style={{ textAlign: 'center' }}>
                          <img
                            src={post.featured_media.source_url}
                            alt={post.featured_media.alt}
                            title={post.featured_media.title}
                          />
                        </div>
                      </Link>
                    </div>
                  )}
                  <StyledBox>
                    <StyledBox pad={{ top: '20px' }}>
                      <h2 className="medium">
                        <Link
                          to={`/schaufenster/${post.slug}/`}
                          aria-label={`View ${post.title} article`}
                          dangerouslySetInnerHTML={{ __html: post.title }}
                        />
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
                        von Tante Hilde
                        {/* {' | '} */}
                        {/* <span
                          style={{
                            fontSize: '.675rem',
                            lineHeight: '1.375rem',
                            fontWeight: '500',
                            letterSpacing: '.0071428571em',
                            margin: '0',
                          }}
                        >
                          {post.date}
                        </span> */}
                      </h3>
                    </StyledBox>
                    {/* {post.categories && (
                      <StyledBox>
                        <span
                          css={css`
                            font-size: 11.666666666666666px;
                            line-height: 20.666666666666668px;
                          `}
                        >
                          Kategorien:
                          {post.categories.map((categoryItem, idx) => {
                            return <span key={idx}> {categoryItem.name}</span>;
                          })}
                        </span>
                      </StyledBox>
                    )} */}
                    <StyledBox pad={{ top: '20px' }}>
                      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    </StyledBox>
                    <StyledBox
                      pad={{
                        bottom: '20px',
                      }}
                    >
                      <Link
                        to={`/schaufenster/${post.slug}/`}
                        aria-label={`view "${post.title}" article`}
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
