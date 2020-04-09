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
          allWordpressPost(
            filter: { status: { eq: "publish" } }
            sort: { fields: date, order: ASC }
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
      `}
      render={(data) => <CodingBlog data={data} {...props} />}
    />
  );
}
