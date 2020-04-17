// import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image/withIEPolyfill';
// import { media } from '../utils/media';

// const Image = (props) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         mobileImage: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 fluid(
//                   maxWidth: 640
//                   quality: 80
//                   traceSVG: { color: "#73B471" }
//                 ) {
//                   ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                 }
//               }
//             }
//           }
//         }
//         tabletImage: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 fluid(
//                   maxWidth: 1280
//                   quality: 80
//                   traceSVG: { color: "#73B471" }
//                 ) {
//                   ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                 }
//               }
//             }
//           }
//         }
//         desktopImage: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 fluid(
//                   maxWidth: 1600
//                   quality: 80
//                   traceSVG: { color: "#73B471" }
//                 ) {
//                   ...GatsbyImageSharpFluid_withWebp
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => {
//       const { sizes, ...otherProps } = props;

//       const mobile = data.mobileImage.edges.find((n) => {
//         return n.node.relativePath.includes(props.filename);
//       });
//       const tablet = data.tabletImage.edges.find((n) => {
//         return n.node.relativePath.includes(props.filename);
//       });
//       const desktop = data.desktopImage.edges.find((n) => {
//         return n.node.relativePath.includes(props.filename);
//       });
//       const sources = [];
//       if (mobile) {
//         sources.push({
//           ...mobile.node.childImageSharp.fluid,
//         });
//       }
//       if (tablet) {
//         sources.push({
//           ...tablet.node.childImageSharp.fluid,
//           media: media.medium,
//         });
//       }
//       if (desktop) {
//         sources.push({
//           ...desktop.node.childImageSharp.fluid,
//           media: media.large,
//         });
//       }
//       if (!sources) {
//         return null;
//       }
//       return <Img {...otherProps} fluid={sources} />;
//     }}
//   />
// );

// export default Image;
