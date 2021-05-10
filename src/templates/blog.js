// import React from 'react';
// import { graphql, StaticQuery } from 'gatsby';
// import Blog from 'components/blog/Blog';

// function CodingBlog(props) {
//   return <Blog {...props} />;
// }

// export default function CodingBlogWithData(props) {
//   return (
//     <StaticQuery
//       query={graphql`
//         query {
//           mobileImage: file(
//             relativePath: { in: "Header-Tantehilde-Laden-Allgaeu.png" }
//           ) {
//             childImageSharp {
//               fluid(
//                 maxWidth: 640
//                 quality: 80
//                 traceSVG: { color: "#73B471" }
//               ) {
//                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
//               }
//             }
//           }
//           tabletImage: file(
//             relativePath: { in: "Header-Tantehilde-Laden-Allgaeu.png" }
//           ) {
//             childImageSharp {
//               fluid(
//                 maxWidth: 1280
//                 quality: 80
//                 traceSVG: { color: "#73B471" }
//               ) {
//                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
//               }
//             }
//           }
//           desktopImage: file(
//             relativePath: { in: "Header-Tantehilde-Laden-Allgaeu.png" }
//           ) {
//             childImageSharp {
//               fluid(
//                 maxWidth: 1600
//                 quality: 80
//                 traceSVG: { color: "#73B471" }
//               ) {
//                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
//               }
//             }
//           }
//           allWordpressPost(
//             filter: { status: { eq: "publish" } }
//             sort: { fields: date, order: ASC }
//           ) {
//             nodes {
//               id
//               title
//               date
//               content
//               slug
//               excerpt
//               categories {
//                 name
//               }
//               featured_media {
//                 alt_text
//                 source_url
//                 title
//               }
//             }
//           }
//         }
//       `}
//       render={(data) => <CodingBlog data={data} {...props} />}
//     />
//   );
// }
