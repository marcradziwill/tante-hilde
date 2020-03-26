import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from 'components/SEO/SEO';
import PageHeader from 'components/PageHeader';
import FullWidthBox from 'components/FullWidthBox';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
import Image from 'components/Image';
import ExternalLink from 'components/ExternalLink';
import { css } from '@emotion/core';
import { scrollToAnchor } from 'utils/helpers';
import { find } from 'lodash';

const Index = ({ data: { companies } }) => {
  // const [filterCategory, setFilterCategory] = React.useState();
  const [companiesToDisplay, setCompaniesToDisplay] = React.useState(
    companies.edges,
  );

  const changeCategory = (event) => {
    event.preventDefault();
    const val = event.target.value;
    if (val === 'alle') {
      setCompaniesToDisplay(companies.edges);
    } else {
      const companyToFilter = companies.edges.filter((com) => {
        return com.node.Branch === val;
      });

      setCompaniesToDisplay(companyToFilter);
    }
  };
  const onSearchInput = (event) => {
    event.preventDefault();
    const val = event.target.value;
    const companyToFilter = companies.edges.filter((com) => {
      return com.node.Name_Firma.includes(val);
    });
    setCompaniesToDisplay(companyToFilter);
  };

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
                ein.
              </p>
            </div>
          </FullWidthBox>
          <FullWidthBox>
            <div
              css={css`
                // display: flex;
                // justify-content: center;
                // text-align: center;
                // align-items: center;
                // flex-direction: column;
              `}
            >
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
            </div>
          </FullWidthBox>
          <FullWidthBox>
            <ResponsiveGrid>
              <div id="search">
                {/* <Input  placeholder="Suchen" /> */}
                <input
                  placeholder="Suchen"
                  css={css`
                    box-sizing: border-box;
                    font-size: inherit;
                    font-family: inherit;
                    border: none;
                    -webkit-appearance: none;
                    padding: 9px;
                    outline: none;
                    background: transparent;
                    color: inherit;
                    font-weight: 600;
                    margin: 0;
                    border: 1px solid rgba(0, 0, 0, 0.33);
                    border-radius: 4px;
                    width: 100%;
                    // border: none;
                  `}
                  autoComplete="off"
                  name="suche"
                  type="text"
                  onChange={onSearchInput}
                />
              </div>
              <div
                css={css`
                  width: 100%;
                  border: 1px solid #ccc;
                  border-radius: 3px;
                  overflow: hidden;
                  select {
                    width: 100%;
                    padding: 5px 8px;
                    border: none;
                    box-shadow: none;
                    background: transparent;
                    background-image: none;
                    -webkit-appearance: none;
                  }

                  select:focus {
                    outline: none;
                  }
                `}
              >
                <select onChange={changeCategory}>
                  <option value="alle">Alle Branchen</option>
                  <option value="Autos, Motorräder / Zubehör">
                    Autos, Motorräder / Zubehör
                  </option>
                  <option value="Banken / Versicherungen">
                    Banken / Versicherungen
                  </option>
                  <option value="Bauen / Wohnen">Bauen / Wohnen</option>
                  <option value="Bekleidung / Accessoir">
                    Bekleidung / Accessoires
                  </option>
                  <option value="Betten / Heimtextilien">
                    Betten / Heimtextilien
                  </option>
                  <option value="Bücher / Schreibwaren">
                    Bücher / Schreibwaren
                  </option>
                  <option value=">Büro / Computer">Büro / Computer</option>
                  <option value="Dekoration / Geschenk">
                    Dekoration / Geschenke
                  </option>
                  <option value="Energie">Energie</option>
                  <option value="Fahrräder / Zubehö">
                    Fahrräder / Zubehör
                  </option>
                  <option value="Ferien / Reise">Ferien / Reisen</option>
                  <option value="Freizeit / Hobby">Freizeit / Hobby</option>
                  <option value="Garten / Pflanzen">Garten / Pflanzen</option>
                  <option value="Gastronomie">Gastronomie</option>
                  <option value="Gesundheit / Kosmetik">
                    Gesundheit / Kosmetik
                  </option>
                  <option value="Handwerk">Handwerk</option>
                  <option value="Haushaltsgeräte/-waren">
                    Haushaltsgeräte/-waren
                  </option>
                  <option value="Heimwerker-Artikel">Heimwerker-Artikel</option>
                  <option value="Kinder / Spielwaren">
                    Kinder / Spielwaren
                  </option>
                  <option value="Kunst / Antiquitäten">
                    Kunst / Antiquitäten
                  </option>
                  <option value="Lebensmittel">Lebensmittel</option>
                  <option value="Möbel / Einrichtungen">
                    Möbel / Einrichtungen
                  </option>
                  <option value="Kreative Dienste">Kreative Dienste</option>
                  <option value="Schmuck /Opti">Schmuck /Optik</option>
                  <option value="Schuhe">Schuhe</option>
                  <option value="Sicherheit">Sicherheit</option>
                  <option value="Sport">Sport</option>
                  <option value="Unterhaltungs-Elektronik">
                    Unterhaltungs-Elektronik
                  </option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
              </div>
            </ResponsiveGrid>
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
                Allgäuer Unternehmen
              </h2>
            </div>
            <ResponsiveGrid
              templatecolumns="33% 33% 33%"
              css={css`
                grid-gutter: 5px;
              `}
            >
              {companiesToDisplay.map((company, index) => {
                // console.log(company.node);
                return (
                  <Link
                    to={`/unternehmen/${company.node.fields.pageUrl}/`}
                    key={index}
                  >
                    <div
                      css={css`
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        margin-top: 50px;
                      `}
                    >
                      <img
                        css={css`
                          width: 150px;
                          height: 150px;
                          border-radius: 50%;
                          // display: flex;
                        `}
                        alt="2"
                        src={`${company.node.Logo_Link}`}
                      />
                      <div
                        css={css`
                          display: flex;
                          text-aling: center;
                          flex-direction: column;
                          justify-content: center;
                          align-items: center;
                        `}
                      >
                        <h5>{company.node.Name_Firma}</h5>
                        <h5>{company.node.Webseite}</h5>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </ResponsiveGrid>
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
