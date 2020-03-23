import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
import BackgroundImage from 'gatsby-background-image';
import StyledBox from 'components/StyledBox';

const Feed = ({ feed, color = 'green', content }) => {
  return (
    <StyledBox
      style={{
        WebkitBoxPack: 'start',
        WebkitJustifyVontent: 'flex-start',
        MsFlexPack: 'start',
        justifyContent: 'flex-start',
      }}
      background={color}
    >
      <h2>{content.frontmatter.title}</h2>
      <ResponsiveGrid templatecolumns="33% 33% 33%">
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
            <Link key={idx} to={`/blog/${blog.node.frontmatter.slug}`}>
              <StyledBox height="medium" border={borderConfig}>
                <BackgroundImage
                  css={css`
                    transition-property: transform, filter, opacity;
                    transition-duration: 0.3s;
                    transition-timing-function: cubic-bezier(
                      0.57,
                      0.21,
                      0.69,
                      1
                    );
                    &:hover {
                      transform: scale(1.05, 1.05);
                    }
                    height: 100%;
                  `}
                  fluid={blog.node.frontmatter.banner.childImageSharp.fluid}
                  boxBackground="white"
                >
                  <StyledBox
                    pad="large"
                    height="100%"
                    style={{
                      WebkitBoxPack: 'end',
                      WebkitJustifyContent: 'flex-end',
                      MsFlexPack: 'end',
                      background:
                        'linear-gradient(0deg, #555 20%, transparent 100%)',
                    }}
                  >
                    <span className="text small" size="small" color="white">
                      {blog.node.frontmatter.date}
                    </span>
                    <h3 className="small white mn">{blog.node.fields.title}</h3>
                    <span className="text small" size="small" color="white">
                      {blog.node.frontmatter.categories.map(
                        (categoryItem, index) => {
                          let categoryItemName =
                            categoryItem.charAt(0).toUpperCase() +
                            categoryItem.slice(1);

                          if (categoryItem === 'javascript') {
                            categoryItemName = 'JavaScript';
                          }

                          return (
                            <span key={index}>
                              {categoryItemName}
                              {index ===
                              blog.node.frontmatter.categories.length - 1
                                ? ' '
                                : ', '}
                            </span>
                          );
                        },
                      )}
                    </span>
                  </StyledBox>
                </BackgroundImage>
              </StyledBox>
            </Link>
          );
        })}
      </ResponsiveGrid>
    </StyledBox>
  );
};

export default React.memo(Feed);
