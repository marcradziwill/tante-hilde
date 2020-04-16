import { graphql } from 'gatsby';

export const imageCompany = graphql`
  fragment imageCompany on File {
    childImageSharp {
      fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
  }
`;
