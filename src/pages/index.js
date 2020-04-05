import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from 'components/SEO/SEO';
import PageHeader from 'components/PageHeader';
import FullWidthBox from 'components/FullWidthBox';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
import ExternalLink from 'components/ExternalLink';
import Filter from 'components/Filter';
// import BranchList from 'components/BranchList';
import { css } from '@emotion/core';
import { scrollToAnchor } from 'utils/helpers';
import { orderBy, uniqBy } from 'lodash';
import loadable from '@loadable/component';
import { media } from 'utils/media';
import * as JsSearch from 'js-search';

// import 'intersection-observer';
import VisibilitySensor from 'react-visibility-sensor';
// import CompanyList from 'components/CompanyList';
import CountUp from 'react-countup';

const CompanyList = loadable(() => import('components/CompanyList'));
const SocialShare = loadable(() => import('components/SocialShare'));

const removeSpecialChars = (str) => {
  return str
    .replace(/ä/g, 'ae')
    .replace(/ü/g, 'ue')
    .replace(/ö/g, 'oe')
    .replace(/ß/g, 'ss');
};

const Index = ({ data: { companies } }) => {
  const tempCompanies = companies.edges.map((compan) => {
    compan.node.Name_FirmaSearch = removeSpecialChars(compan.node.Name_Firma);
    compan.node.PLZ__OrtSearch = removeSpecialChars(compan.node.PLZ__Ort);
    compan.node.BranchSearch = removeSpecialChars(compan.node.Branch);
    compan.node.BeschreibungSearch = removeSpecialChars(
      compan.node.Beschreibung,
    );
    compan.node.FilterName =
      compan.node.Name_Firma.charAt(0).toUpperCase() +
      compan.node.Name_Firma.slice(1);
    return compan.node;
  });

  const [companiesToDisplay, setCompaniesToDisplay] = React.useState(
    orderBy(tempCompanies, 'FilterName'),
  );
  const [searchObject, setSearch] = React.useState();
  const [results, setResults] = React.useState();

  const searchData = (e) => {
    // console.log(searchObject.search);
    const queryResult = searchObject.search.search(
      removeSpecialChars(e.target.value),
    );
    console.log(queryResult);
    setResults({ searchQuery: e.target.value, searchResults: queryResult });
  };

  React.useEffect(() => {
    const branches = companiesToDisplay.map((com) => {
      let cate = com.Branch.toLowerCase().replace(/\//g, '');
      cate = cate.replace(/ä/g, 'ae');
      cate = cate.replace(/ü/g, 'ue');
      cate = cate.replace(/ö/g, 'oe');
      cate = cate.replace(/ß/g, 'ss');
      cate = cate.replace(/\,/g, '');
      cate = cate.replace(/\-/g, '');
      cate = cate.replace(/\s+/g, '-');

      return {
        urlPath: cate,
        category: com.Branch,
      };
    });
    const branchesToDisplay = uniqBy(branches, 'urlPath');

    const rebuildIndex = () => {
      const dataToSearch = new JsSearch.Search('Name_Firma');
      dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
      // dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
      // dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy();
      dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
      dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex('Name_Firma');
      dataToSearch.addIndex('category');
      dataToSearch.addIndex('Name_FirmaSearch');
      dataToSearch.addIndex('BranchSearch');
      dataToSearch.addIndex('BeschreibungSearch');
      dataToSearch.addIndex('PLZ__OrtSearch');
      // dataToSearch.addIndex('Name_Firma');
      // dataToSearch.addIndex('Beschreibung');
      // dataToSearch.addIndex('Branch');
      // dataToSearch.addIndex('Ansprechpartner');
      // dataToSearch.addIndex('PLZ__Ort');
      // dataToSearch.addIndex('Strasse__Hausnummer');
      // dataToSearch.addIndex('Lieferung___Bezahlung');
      // dataToSearch.addIndex('Webshop_Link');
      dataToSearch.addDocuments(companiesToDisplay, branchesToDisplay);
      dataToSearch.addDocuments(branchesToDisplay);
      setSearch({ search: dataToSearch, isLoading: false });
    };

    rebuildIndex();
  }, [companiesToDisplay]);

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
            <h1
              css={css`
                text-align: center;
              `}
            >
              Tante Hilde
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
              <div
                css={css`
                  width: 100%;
                  @media ${media.small} {
                    width: 582px;
                  }
                  padding: 30px;
                  margin-bottom: 30px;
                  position: relative;
                `}
              >
                <input
                  placeholder="Suchen nach Name oder Beschreibung"
                  css={css`
                    background: #fff;
                    display: flex;
                    border: 1px solid #dfe1e5;
                    box-shadow: none;
                    border-radius: 24px;
                    border-bottom-left-radius: ${results &&
                    results.searchResults.length
                      ? '0'
                      : '24px'};
                    border-bottom-right-radius: ${results &&
                    results.searchResults.length
                      ? '0'
                      : '24px'};
                    z-index: 3;
                    height: 44px;
                    margin: 0 auto;
                    width: 100%;
                    padding: 0 30px;
                    font-size: 16px;

                    :hover {
                      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
                      border-color: rgba(223, 225, 229, 0);
                    }
                  `}
                  autoComplete="off"
                  name="suche"
                  type="text"
                  onChange={searchData}
                />
                <svg
                  aria-label="Search"
                  viewBox="0 0 24 24"
                  css={css`
                    position: absolute;
                    right: 38px;
                    top: 41px;
                    display: inline-block;
                    -webkit-flex: 0 0 auto;
                    -ms-flex: 0 0 auto;
                    flex: 0 0 auto;
                    width: 24px;
                    height: 24px;
                    fill: #555;
                    stroke: #555;
                  `}
                >
                  <path
                    fill="none"
                    stroke="#555"
                    strokeWidth="3"
                    d="M15,15 L22,22 L15,15 Z M9.5,17 C13.6421356,17 17,13.6421356 17,9.5 C17,5.35786438 13.6421356,2 9.5,2 C5.35786438,2 2,5.35786438 2,9.5 C2,13.6421356 5.35786438,17 9.5,17 Z"
                  />
                </svg>
                {results && results.searchResults.length > 0 && (
                  <ul
                    css={css`
                      padding: 0;
                      margin: 0;
                      background: #fff;
                      display: flex;
                      flex-direction: column;
                      list-style-type: none;
                      margin: 0;
                      padding: 0 0 20px 0;
                      box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2),
                        0 0 0 1px rgba(0, 0, 0, 0.08);
                      border: 0;
                      border-radius: 0 0 24px 24px;
                      box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
                      overflow: hidden;
                      text-align: left;
                      // align-items: start;
                    `}
                  >
                    {orderBy(results.searchResults, 'category').map(
                      (searchItem, index) => {
                        return (
                          <li
                            className="animated fadeIn"
                            css={css`
                              list-style: none;
                              // margin-top: 25px;
                              // border-bottom: 1px solid #73b471;
                              padding: 5px 20px;
                              :hover {
                                bacground: gray;
                              }
                            `}
                            key={index}
                          >
                            <div
                              css={css`
                                max-width: 100%;
                              `}
                            >
                              {searchItem.Name_Firma && (
                                <Link
                                  to={`/unternehmen/${searchItem.fields.pageUrl}/`}
                                >
                                  {searchItem.Name_Firma}
                                </Link>
                              )}
                              {searchItem.category && (
                                <Link to={`/branche/${searchItem.urlPath}/`}>
                                  Kategorie: {searchItem.category}
                                </Link>
                              )}
                            </div>
                          </li>
                        );
                      },
                    )}
                  </ul>
                )}
              </div>
              <Link to="/unternehmen/">
                <h2
                  css={css`
                    text-align: center;
                    max-width: 100% !important;
                  `}
                  className="small"
                >
                  Alle Lieblingsläden
                </h2>
              </Link>
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
                        <CountUp duration={4} end={tempCompanies.length} />
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
                  Wir sind schon {tempCompanies.length} Unternehmen aus dem
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
            {/* <Filter
              id="searchMobile"
              companies={tempCompanies}
              onchangecompanies={setCompaniesToDisplay}
            /> */}
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
          <FullWidthBox>
            <div
              css={css`
                background: #73b471;
                font-size: 1rem;
                padding: 20px;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                text-align: center;
                a {
                  color: #fff;
                  :hover {
                    color: #555;
                  }
                }
              `}
            >
              <Link to="/unternehmen/">
                Hier geht's zu deinen Lieblingsläden
              </Link>
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
          {/* <FullWidthBox
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
          </FullWidthBox> */}
          {/* <FullWidthBox> */}
          {/* <div
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
          </FullWidthBox> */}
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

export default Index;
