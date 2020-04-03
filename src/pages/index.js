import React from 'react';
import { graphql } from 'gatsby';
import SEO from 'components/SEO/SEO';
import PageHeader from 'components/PageHeader';
import FullWidthBox from 'components/FullWidthBox';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
import ExternalLink from 'components/ExternalLink';
import Filter from 'components/Filter';
import BranchList from 'components/BranchList';
import { css } from '@emotion/core';
import { scrollToAnchor } from 'utils/helpers';
import { orderBy } from 'lodash';
import loadable from '@loadable/component';
import { media } from 'utils/media';

// import 'intersection-observer';
import VisibilitySensor from 'react-visibility-sensor';
// import CompanyList from 'components/CompanyList';
import CountUp from 'react-countup';
const CompanyList = loadable(() => import('components/CompanyList'));
const SocialShare = loadable(() => import('components/SocialShare'));
const Index = ({ data: { companies } }) => {
  companies.edges.map((compan) => {
    compan.node.FilterName =
      compan.node.Name_Firma.charAt(0).toUpperCase() +
      compan.node.Name_Firma.slice(1);
    return compan;
  });

  const [companiesToDisplay, setCompaniesToDisplay] = React.useState(
    orderBy(companies.edges, 'node.FilterName'),
  );

  return (
    <>
      <SEO
        title="Tante Hilde"
        description="Dein virtueller Marktplatz im Allgäu!"
        image="/Header-Tantehilde-Laden-Allgaeu.png"
        // pathname={location.pathname}
        headerImage="/Header-Tantehilde-Laden-Allgaeu.png"
        follow="index, follow"
      />
      <div>
        <article>
          <PageHeader
            // title={page.htmlTitle}
            image={{
              src: 'Header-Tantehilde-Laden-Allgaeu.png',
              alt: 'Tante Hilde Laden - Dein virtueller Marktplatz im Allgäu!',
              title: 'Tante Hilde Laden Allgaeu',
            }}
            vheight="60vh"
          />
          <FullWidthBox>
            <div
              css={css`
                display: flex;
                justify-content: center;
                text-align: center;
                align-items: center;
                flex-direction: column;
              `}
            >
              <ExternalLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSeBpMd-oqTT1zkLcG-CnsvoJPNscd5g3ooyWQUwPAmfaDUCdw/viewform?usp=sf_link"
                target="_blank"
              >
                <h1>Tante Hilde</h1>
                <h2
                  css={css`
                    max-width: 100% !important;
                  `}
                  className="small"
                >
                  Dein virtueller Marktplatz im Allgäu!
                </h2>
                <h3
                  css={css`
                    max-width: 100% !important;
                  `}
                  className="small"
                >
                  Kostenlos - im Solidaritätsgedanken
                </h3>
                <h3
                  css={css`
                    max-width: 100% !important;
                  `}
                  className="small"
                >
                  Bei uns findest du aktuell schon {companies.edges.length}{' '}
                  Lieblingsläden
                </h3>
                {/* <div css={css`display: flex width: 30%`}>
                  <img src="/tantehilde-gruen.png" alt="" />
                </div> */}
              </ExternalLink>
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
          </FullWidthBox>
          <FullWidthBox>
            <div
              css={css`
                background: #73b471;
                font-size: 1rem;
                padding: 20px;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
              `}
            >
              <ResponsiveGrid>
                <VisibilitySensor
                  css={css`
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 4rem;
                  `}
                >
                  {({ isVisible }) => (
                    <div
                      css={css`
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 4rem;
                      `}
                    >
                      {isVisible ? (
                        <CountUp duration={5} end={companies.edges.length} />
                      ) : (
                        '0'
                      )}
                    </div>
                  )}
                </VisibilitySensor>

                <p
                  css={css`
                    font-size: 1rem;
                    max-width: 100%;
                    text-align: left;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 0;
                    margin-bottom: 0;
                  `}
                >
                  Wir sind schon {companies.edges.length} Unternehmen aus dem
                  Allgäu. Teilt fleißig unsere Seite und helft unseren
                  Lieblingsläden.
                </p>
              </ResponsiveGrid>
            </div>
            <SocialShare
              css={css`
                padding-top: 20px;
                background: #a3d2a1;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                h6 {
                  font-size: 1.5rem;
                }
              `}
            />
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
              companies={companies.edges}
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
            <div>
              <h2>Tante Hilde - Dein virtueller Marktplatz im Allgäu!</h2>

              <p>
                Wir helfen den Suchenden, indem wir alle Online- und
                Lieferangebote im Allgäu bündeln und übersichtlich darstellen.
              </p>
              <p>
                Wir unterstützen die kleinen Läden und Dienstleister im Allgäu,
                die wir lieb gewonnen haben und in Zeiten wie diesen schmerzlich
                vermissen.
              </p>
              <h2>Für unsere Lieblingsläden:</h2>
              <p>
                Wir geben euch den nötigen Rückenwind, um die teilweise neuen
                Online-bzw. Lieferangebote bekannter zu machen und so mehr
                Kunden zu erreichen.
              </p>
              <p>
                Melde dich jetzt kostenlos an und trage deine Daten in{' '}
                <ExternalLink
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeBpMd-oqTT1zkLcG-CnsvoJPNscd5g3ooyWQUwPAmfaDUCdw/viewform?usp=sf_link"
                  target="_blank"
                >
                  unserem Formular
                </ExternalLink>{' '}
                ein.
              </p>
              <h2>Für die AllgäuerInnen:</h2>
              <p>
                Wir sind die Schnittstelle zwischen deinem Bedürfnis nach
                Produkten oder Dienstleistungen aus dem Allgäu und den
                regionalen Anbietern.
              </p>
              <p>
                Nutze unsere{' '}
                <ExternalLink
                  onClick={() => {
                    scrollToAnchor('search');
                  }}
                >
                  Suchfunktion
                </ExternalLink>{' '}
                und finde deinen Lieblingsladen!
              </p>
              <h2>Für Alle:</h2>
              <p>
                Wir können zwar kein persönliches Gespräch mit dem netten
                Verkäufer oder das Lächeln deiner Lieblingsbedienung ersetzen -
                aber wir können vielleicht dafür sorgen, dass es deinen
                Lieblingsladen auch noch in ein paar Wochen oder Monaten gibt.
              </p>
              <p>
                <strong>
                  Lokal. Loyal. Bleib zuhause - auch bei deiner
                  Online-Bestellung!
                </strong>
              </p>
              <p>
                Eure Einträge werden nach 24 Stunden spätestens online gestellt.
              </p>
              <p>
                Melde dich jetzt kostenlos an und trage deine Daten in{' '}
                <ExternalLink
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeBpMd-oqTT1zkLcG-CnsvoJPNscd5g3ooyWQUwPAmfaDUCdw/viewform?usp=sf_link"
                  target="_blank"
                >
                  unserem Formular
                </ExternalLink>{' '}
                ein.
              </p>
              <p>
                <ExternalLink
                  css={css`
                    display: flex;
                    align-items: start;
                    justify-content: start;
                    margin-top: 10px;
                    color: #73b471;
                  `}
                  target="_blank"
                  href="mailto:tantehildeallgaeu@gmail.com"
                >
                  Bei Fragen, Problemen oder Änderungen eurer Daten, meldet euch
                  gerne bei Tante Hilde per Email.
                </ExternalLink>
              </p>
            </div>
          </FullWidthBox>
          {/* <FullWidthBox>
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
                Branchen
              </h2>
            </div>
            <BranchList companies={companies.edges} />
          </FullWidthBox> */}
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
              companies={companies.edges}
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
  query Index {
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

    companies: allCompaniesCsv {
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

export default Index;
