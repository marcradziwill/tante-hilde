import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Blog from 'components/blog/Blog';

function CodingBlog(props) {
  return <Blog {...props} />;
}

export default function CodingBlogWithData(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
              frontmatter: { published: { ne: false }, unlisted: { ne: true } }
              fileAbsolutePath: { regex: "//content/blog//" }
            }
          ) {
            edges {
              node {
                excerpt(pruneLength: 300)
                id
                fields {
                  title
                  slug
                  date
                  categories
                }
                parent {
                  ... on File {
                    sourceInstanceName
                  }
                }
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  banner {
                    childImageSharp {
                      fluid(
                        maxWidth: 640
                        # maxHeight: 400
                        traceSVG: { color: "#6CB88D" }
                      ) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                  slug
                  keywords
                  categories
                }
                timeToRead
              }
            }
          }
        }
      `}
      render={(data) => <CodingBlog data={data} {...props} />}
    />
  );
}
