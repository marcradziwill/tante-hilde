import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import { media } from '../utils/media';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        mobileImage: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(
                  maxWidth: 640
                  quality: 80
                  traceSVG: { color: "#6CB88D" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        tabletImage: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(
                  maxWidth: 1280
                  quality: 80
                  traceSVG: { color: "#6CB88D" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        desktopImage: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(
                  maxWidth: 1600
                  quality: 80
                  traceSVG: { color: "#6CB88D" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const { sizes, ...otherProps } = props;

      const mobile = data.mobileImage.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      const tablet = data.tabletImage.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      const desktop = data.desktopImage.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      const sources = [];
      if (mobile) {
        sources.push({
          ...mobile.node.childImageSharp.fluid,
        });
      }
      if (tablet) {
        sources.push({
          ...tablet.node.childImageSharp.fluid,
          media: media.medium,
        });
      }
      if (desktop) {
        sources.push({
          ...desktop.node.childImageSharp.fluid,
          media: media.large,
        });
      }
      if (!sources) {
        return null;
      }
      return <Img {...otherProps} fluid={sources} />;
    }}
  />
);

export default Image;
