import React from 'react';
import loadable from '@loadable/component';
import Img from 'gatsby-image/withIEPolyfill';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { orderBy } from 'lodash';
import SEO from 'components/SEO/SEO';
import PageHeader from 'components/PageHeader';
import FullWidthBox from 'components/FullWidthBox';
import ExternalLink from 'components/ExternalLink';
import Filter from 'components/Filter';
import { media } from 'utils/media';
import { find } from 'lodash';

const CompanyList = loadable(() => import('components/CompanyList'));
const SocialShare = loadable(() => import('components/SocialShare'));

const Unternehmen = ({
  data: { companies, mobileImage, tabletImage, desktopImage, images },
}) => {
  const tempCompanies = companies.edges.map((compan) => {
    compan.node.image = find(images.edges, (image) => {
      return compan.node.Logo_Link.includes(image.node.relativePath);
    });
    compan.node.FilterName =
      compan.node.Name_Firma.charAt(0).toUpperCase() +
      compan.node.Name_Firma.slice(1);
    return compan.node;
  });
  const sources = [
    { ...mobileImage.childImageSharp.fluid, media: '640' },
    { ...tabletImage.childImageSharp.fluid, media: '1280' },
    { ...desktopImage.childImageSharp.fluid, media: '1600' },
  ];

  const [companiesToDisplay, setCompaniesToDisplay] = React.useState(
    orderBy(tempCompanies, 'FilterName'),
  );

  return (
    <>
      <SEO
        title="Tante Hilde Unternehmen im Allgäu"
        description="Dein virtueller Marktplatz für Unternehmen und Dienstleister im Allgäu!"
        image="/Header-Tantehilde-Laden-Allgaeu.png"
        // pathname={location.pathname}
        headerImage="/Header-Tantehilde-Laden-Allgaeu.png"
        follow="index, follow"
      />
      <div>
        <article>
          <PageHeader vheight="60vh">
            <Img
              css={css`
                height: 100%;
              `}
              fluid={sources}
              title="Tante Hilde Laden Allgaeu"
              alt="Tante Hilde Laden - Dein virtueller Marktplatz im Allgäu!"
            />
          </PageHeader>
          <FullWidthBox>
            <h1
              css={css`
                text-align: center;
              `}
            >
              Die Lieblingsläden
            </h1>
            <h2
              css={css`
                text-align: center;
                max-width: 100% !important;
              `}
              className="small"
            >
              Dein virtueller Marktplatz im Allgäu!
            </h2>
            <div
              css={css`
                display: flex;
                justify-content: center;
                text-align: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
              `}
            >
              <p>
                Melde dich jetzt kostenlos an und trage deine Daten in{' '}
                <ExternalLink
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeBpMd-oqTT1zkLcG-CnsvoJPNscd5g3ooyWQUwPAmfaDUCdw/viewform?usp=sf_link"
                  target="_blank"
                >
                  unserem Formular
                </ExternalLink>{' '}
                ein, wenn du auch einen Lieblingsladen hast.
              </p>
            </div>
            <SocialShare />
          </FullWidthBox>
          <FullWidthBox
            pad="20px"
            css={css`
              display: flex;
              @media ${media.small} {
                display: none;
              }
            `}
          >
            <Filter
              id="searchMobile"
              companies={tempCompanies}
              onchangecompanies={setCompaniesToDisplay}
            />
          </FullWidthBox>
          <FullWidthBox
            css={css`
              display: none;
              @media ${media.small} {
                display: flex;
              }
            `}
          >
            <Filter
              id="searchDesktop"
              companies={tempCompanies}
              onchangecompanies={setCompaniesToDisplay}
            />
          </FullWidthBox>
          <FullWidthBox>
            <div
              css={css`
                text-align: center;
                width: 100%;
              `}
            >
              <h2
                css={css`
                  max-width: 100%;
                `}
              >
                {companiesToDisplay.length} Allgäuer Unternehmen und
                Dienstleister
              </h2>
            </div>
            <CompanyList companies={companiesToDisplay} />
          </FullWidthBox>
          <FullWidthBox
            css={css`
              display: flex;
              justify-content: center;
              text-align: center;
              align-items: center;
              text-align: center;
            `}
          >
            <p>
              Der{' '}
              <ExternalLink
                target="_blank"
                href="https://github.com/marcradziwill/tante-hilde"
              >
                Programmiercode
              </ExternalLink>{' '}
              dieser Seite ist quelloffen und darf gerne für deine Region
              verwendet werden. Für Texte und Bilder gilt folgende Lizenz:
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe
                unter gleichen Bedingungen 4.0 International Lizenz
              </a>
              .
            </p>
            <p>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                <img
                  alt="Creative Commons Lizenzvertrag"
                  src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
                />
              </a>
            </p>
          </FullWidthBox>
        </article>
      </div>
    </>
  );
};

export const query = graphql`
  query Unternehmen {
    site: site {
      siteMetadata {
        organization {
          email
          name
          address {
            streetNumber
            zipCity
          }
        }
      }
    }
    mobileImage: file(
      relativePath: { in: "Header-Tantehilde-Laden-Allgaeu.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 640, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    tabletImage: file(
      relativePath: { in: "Header-Tantehilde-Laden-Allgaeu.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    desktopImage: file(
      relativePath: { in: "Header-Tantehilde-Laden-Allgaeu.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    images: allFile {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
    companies: allCompaniesCsv(filter: { Publizieren: { ne: "FALSE" } }) {
      edges {
        node {
          fields {
            pageUrl
          }
          Beschreibung
          Email
          Facebook_Link
          Instagram_Link
          Lieferung___Bezahlung
          PLZ__Ort
          Rechtliches
          Strasse__Hausnummer
          Telefon
          Webseite
          Webshop_Link
          Zeitstempel
          PDF_Link
          Name_Firma
          Logo_Link
          Branch
          Fax
          Ansprechpartner
          Bestellung__ber_
          Video_Link
        }
      }
    }
  }
`;

export default Unternehmen;
