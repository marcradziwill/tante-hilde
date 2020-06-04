import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
// import BackgroundImage from 'gatsby-background-image';
import StyledBox from 'components/StyledBox';

const Feed = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(
        limit: 2
        filter: { status: { eq: "publish" } }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          id
          title
          date
          content
          slug
          excerpt
          categories {
            name
          }
          featured_media {
            alt_text
            source_url
            title
          }
        }
      }
    }
  `);

  const feed = data.allWordpressPost.nodes;

  return (
    <StyledBox
      style={{
        WebkitBoxPack: 'start',
        WebkitJustifyVontent: 'flex-start',
        MsFlexPack: 'start',
        justifyContent: 'flex-start',
      }}
      // background="green"
    >
      <h2>Tante Hildes Schaufenster</h2>
      <ResponsiveGrid
        templatecolumns={feed.length > 2 ? '33% 33% 33%' : '50% 50%'}
        css={css`
          margin-top: 80px;
        `}
      >
        {feed.map((blog, idx) => {
          let borderSide = '';

          if (idx === 0) {
            borderSide = 'right';
          } else if (idx === 2) {
            borderSide = 'left';
          } else {
            borderSide = 'vertical';
          }
          const borderConfig = {
            side: borderSide,
            color: 'green-4',
          };
          return (
            <Link key={idx} to={`/schaufenster/${blog.slug}`}>
              <StyledBox
                height="medium"
                border={borderConfig}
                css={css`
                  background: linear-gradient(
                    0deg,
                    #73b471 20%,
                    transparent 100%
                  );
                  margin-right: 5px;
                `}
              >
                <StyledBox
                  css={css`
                    background-size: cover;
                    background-image: url(${blog.featured_media.source_url});
                    display: flex;
                    justify-content: flex-end;
                  `}
                  pad="none"
                  height="100%"
                >
                  <div
                    css={css`
                      background-color: #73b471;
                      padding: 24px;
                    `}
                  >
                    {/* <span className="text small" size="small" color="white">
                      {blog.date}
                    </span> */}
                    <h3
                      className="small white mn"
                      dangerouslySetInnerHTML={{ __html: blog.title }}
                    />
                    {/* <span className="text small" size="small" color="white">
                      {blog.categories.map((categoryItem, index) => {
                        return (
                          <span key={index}>
                            {categoryItem.name}
                            {index === blog.categories.length - 1 ? ' ' : ', '}
                          </span>
                        );
                      })}
                    </span> */}
                  </div>
                </StyledBox>
              </StyledBox>
            </Link>
          );
        })}
      </ResponsiveGrid>
    </StyledBox>
  );
};

export default React.memo(Feed);
