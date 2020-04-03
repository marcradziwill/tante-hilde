import { graphql } from 'gatsby';

export const bannerImage = graphql`
  fragment bannerImage260 on File {
    childImageSharp {
      fluid(maxWidth: 260, quality: 50, traceSVG: { color: "#6CB88D" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment bannerImage640 on File {
    childImageSharp {
      fluid(maxWidth: 640, traceSVG: { color: "#6CB88D" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment bannerImage720 on File {
    childImageSharp {
      fluid(
        maxWidth: 720
        maxHeight: 500
        quality: 75
        traceSVG: { color: "#6CB88D" }
      ) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment bannerImageSeo1200 on File {
    childImageSharp {
      fixed(width: 1200, quality: 90, traceSVG: { color: "#6CB88D" }) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  # fragment fluidImage473 on File {
  #   childImageSharp {
  #     fluid(maxWidth: 473, quality: 90, traceSVG: { color: "#6CB88D" }) {
  #       ...GatsbyImageSharpFluid_withWebp_tracedSVG
  #     }
  #   }
  # }
  fragment fluidImage640 on File {
    childImageSharp {
      fluid(maxWidth: 640, quality: 90, traceSVG: { color: "#6CB88D" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment fluidImage1280 on File {
    childImageSharp {
      fluid(maxWidth: 1280, quality: 90, traceSVG: { color: "#6CB88D" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment fluidImage1600 on File {
    childImageSharp {
      fluid(maxWidth: 1600, quality: 90, traceSVG: { color: "#6CB88D" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;
