import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import SEO from 'components/SEO/SEO';
import FullWidthBox from 'components/FullWidthBox';
import StyledBox from 'components/StyledBox';
import ExternalLink from 'components/ExternalLink';
import SocialIcons from 'components/SocialIcons';
import Image from 'components/Image';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
import { css } from '@emotion/core';

const AboutUs = (context) => {
  const peoples = [
    {
      name: 'Julia Leeflang',
      description:
        'Inhaberin Studio Leeflang - Agentur für öko-soziales Marketing in Kempten',
      image: {
        fixed: context.data.julia.childImageSharp.fixed,
        alt: 'Julia Leeflang von StudioLeeflang im Portrait',
        title: 'Julia Leeflang von StudioLeeflang',
      },
      links: {
        website: 'https://www.studio-leeflang.com/',
        instagram: 'https://www.instagram.com/studioleeflang/',
        facebook: 'https://www.facebook.com/studioleeflang/',
        email: 'mailto:julia@studio-leeflang.com',
      },
    },
    {
      name: 'Marc Radziwill',
      description:
        'marc radziwill. - Software Entwickler | Berater | Developer Advocate | Trainer für Entwickler',
      image: {
        fixed: context.data.marc.childImageSharp.fixed,
        alt:
          'Marc-Radziwill Portrait Consultant Developer Advocate im Portrait',
        title: 'Marc-Radziwill Portrait Consultant Developer Advocate',
      },
      links: {
        website: 'https://marcradziwill.com/',
        instagram: 'https://www.instagram.com/marcradziwill_webdeveloper/',
        facebook: 'https://www.facebook.com/marcradziwillwebdeveloper/',
        email: 'mailto:hallo@marcradziwill.com',
      },
    },
    {
      name: 'Daniela Schätzle',
      description: `Strategie || Positionierung || Sichtbarkeit
        Online Marketing`,
      image: {
        fixed: context.data.dani.childImageSharp.fixed,
        alt:
          'Daniela Schaetzle Strategie Positionierunug Sichtbarkeit OnlineMarketing in schwarz weiß',
        title:
          'Daniela Schaetzle Strategie Positionierunug Sichtbarkeit OnlineMarketing',
      },
      links: {
        email: 'mailto:dschaetzleom@gmail.com',
      },
    },
    {
      name: 'Du im Portrait',
      description: `Du bist kreativ und m&ouml;chtest uns unterst&uuml;tzen?
      Meld dich gerne!`,
      image: {
        fixed: context.data.dummy.childImageSharp.fixed,
        alt: 'Du im Portrait',
        title: 'Du könntest hier dein Bild sehen',
      },
      links: {
        website: 'https://tante-hilde.org/',
        instagram: 'https://www.instagram.com/tantehilde_allgaeu/',
        facebook: 'https://www.facebook.com/tantehildeallgaeu/',
      },
    },
  ];

  const supporter = [
    {
      name: 'Anke Isenberg de Abreu',
      description:
        'Isenhoffs Büro - Kreativagentur mit Herz, Berg & Verstand aus Kempten im Allgäu.',
      image: {
        fixed: context.data.anke.childImageSharp.fixed,
        alt: 'Anke Isenberg de Abreu von der Isenhoff GbR im Portrait',
        title: 'Anke Isenberg de Abreu von der Isenhoff GbR',
      },
      links: {
        website: 'https://www.isenhoff.de',
        instagram: 'https://www.instagram.com/isenhoffs_buero/',
        email: 'mailto:hi@isenhoff.de',
      },
    },
    {
      name: 'Philip Herzhoff',
      description:
        'Isenhoffs Büro - Kreativagentur mit Herz, Berg & Verstand aus Kempten im Allgäu.',
      image: {
        fixed: context.data.philip.childImageSharp.fixed,
        alt: 'Philip Herzhoff von der Isenhoff GbR im Portrait',
        title: 'Philip Herzhoff von der Isenhoff GbR',
      },
      links: {
        website: 'https://www.isenhoff.de',
        instagram: 'https://www.instagram.com/isenhoffs_buero/',
        email: 'mailto:hi@isenhoff.de',
      },
    },
    {
      name: 'Thomas Herzhoff',
      description: `Isenhoffs Büro - Kreativagentur mit Herz, Berg & Verstand aus Kempten im Allgäu.`,
      image: {
        fixed: context.data.tom.childImageSharp.fixed,
        alt: 'Thomas Herzhoff von der Isenhoff GbR im Portrait',
        title: 'Thomas Herzhoff von der Isenhoff GbR',
      },
      links: {
        website: 'https://www.isenhoff.de',
        instagram: 'https://www.instagram.com/isenhoffs_buero/',
        email: 'mailto:hi@isenhoff.de',
      },
    },
    {
      name: 'allgäu locals',
      description: `Wir zeigen euch tolle Orte, inspirierende Menschen und interessante Unternehmen.`,
      image: {
        fixed: context.data.locals.childImageSharp.fixed,
        alt: 'allgäu locals',
        title: 'allgäu locals',
      },
      links: {
        website: 'https://www.allgaeulocals.com/',
        instagram: 'https://www.instagram.com/allgaeulocals/',
        facebook: 'https://www.facebook.com/allgaeulocals',
      },
    },
    {
      name: 'Visit Allgäu',
      description: `Wir halten zusammen🙏 Lasst uns die Allgäuer Vielfalt und Kultur bewahren und unsere kleinen Läden unterstützen! #WirSindAllgäu`,
      image: {
        fixed: context.data.visit.childImageSharp.fixed,
        alt: 'allgäu locals',
        title: 'allgäu locals',
      },
      links: {
        instagram: 'https://www.instagram.com/visitallgaeu/',
        facebook: 'https://www.facebook.com/visitallgaeu/',
      },
    },
    {
      name: 'Patron Plasticfree Peaks',
      description: `Steht für die Vision einer Natur frei von Plastikmüll, für nachhaltige Produkte in Freizeit und Alltag.`,
      image: {
        fixed: context.data.patron.childImageSharp.fixed,
        alt: 'allgäu locals',
        title: 'allgäu locals',
      },
      links: {
        website: 'https://www.plasticfreepeaks.com/',
        instagram: 'https://www.instagram.com/plasticfreepeaks/',
        facebook:
          'https://www.facebook.com/Patron-Plasticfree-Peaks-325166758214124/',
      },
    },
  ];

  return (
    <>
      <SEO
        title="Tante Hilde - Über uns"
        description="Idee zur Plattform - Tante Hilde"
        image="/Header-Tantehilde-Laden-Allgaeu.png"
        headerImage="/Header-Tantehilde-Laden-Allgaeu.png"
        follow="index, follow"
      />
      <div>
        <article>
          <FullWidthBox>
            <div
              css={css`
                margin-top: 60px;
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
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                `}
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
                <div
                  css={css`
                    display: flex;
                    width: 30%;
                  `}
                >
                  <img src="/tantehilde-gruen.png" alt="" />
                </div>
              </ExternalLink>
              <p>
                Melde dich jetzt an und trage deine Daten in{' '}
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
            <h2>Idee zur Plattform</h2>
            <p>
              In Anlehnung an das Konzept der Tante Emma - Läden, die wie kein
              anderes Einkaufserlebnis für Loyalität und Persönlichkeit stehen,
              haben wir diese Plattform ins Leben gerufen. Als Dankeschön und
              Wertschätzung an alle Einzelhändler und Dienstleister im Allgäu,
              die unseren Alltag so sehr bereichern und für die wir jetzt gerne
              etwas tun wollen.
            </p>
            <h2>Und warum Hilde und nicht Emma?</h2>
            <p>
              Für unsere Plattform ist die historische Hildegard Namensgeberin,
              die als dritte Frau Karls des Großen von prägender Bedeutung für
              die Allgäu-Metropole ist. Sie stattete gemeinsam mit ihrem Mann
              das Kloster zu Kempten reich aus und wird als Stifterin in Kempten
              und im Allgäu wie eine Heilige verehrt. Hier möchten wir ganz klar
              einen regionalen Bezug schaffen und mit Tante Hilde die Allgäuer
              Geschäftstreibenden unterstützen.
            </p>
          </FullWidthBox>
          <FullWidthBox>
            <h2
              css={css`
                text-align: center;
                width: 100%;
                max-width: 100%;
                margin-bottom: 100px;
              `}
            >
              Wer sind wir
            </h2>
            <ResponsiveGrid
              templatecolumns="33% 33% 33%"
              css={css`
                grid-gutter: 5px;
                @media (max-width: 900px) {
                  grid-template-columns: 50% 50%;
                }
                @media (max-width: 600px) {
                  grid-template-columns: 100%;
                }
              `}
            >
              {peoples.map((people, idx) => {
                return (
                  <div
                    key={idx}
                    css={css`
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      flex-direction: column;
                      margin-bottom: 60px;
                    `}
                  >
                    <Img
                      css={css`
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        display: flex;
                      `}
                      fixed={people.image.fixed}
                      alt={people.image.alt}
                      title={people.image.title}
                    />
                    <div
                      css={css`
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        text-align: center;
                        padding: 15px;
                      `}
                    >
                      <h5
                        css={css`
                          margin-bottom: 5px;
                          margin-top: 10px;
                          margin-bottom: 10px;
                        `}
                      >
                        {people.name}
                      </h5>
                      <p
                        css={css`
                          margin-top: 10px;
                          margin-bottom: 10px;
                        `}
                      >
                        {people.description}
                      </p>
                    </div>
                    <SocialIcons links={people.links} />
                  </div>
                );
              })}
            </ResponsiveGrid>
          </FullWidthBox>
          <FullWidthBox>
            <h2
              css={css`
                text-align: center;
                width: 100%;
                max-width: 100%;
                margin-bottom: 100px;
              `}
            >
              Unsere Unterstützer
            </h2>
            <ResponsiveGrid
              templatecolumns="33% 33% 33%"
              css={css`
                grid-gutter: 5px;
                @media (max-width: 900px) {
                  grid-template-columns: 50% 50%;
                }
                @media (max-width: 600px) {
                  grid-template-columns: 100%;
                }
              `}
            >
              {supporter.map((people, idx) => {
                return (
                  <div
                    key={idx}
                    css={css`
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      flex-direction: column;
                      margin-bottom: 60px;
                    `}
                  >
                    <Img
                      css={css`
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        display: flex;
                      `}
                      fixed={people.image.fixed}
                      alt={people.image.alt}
                      title={people.image.title}
                    />
                    <div
                      css={css`
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        text-align: center;
                        padding: 15px;
                      `}
                    >
                      <h5
                        css={css`
                          margin-bottom: 5px;
                          margin-top: 10px;
                          margin-bottom: 10px;
                        `}
                      >
                        {people.name}
                      </h5>
                      <p
                        css={css`
                          margin-top: 10px;
                          margin-bottom: 10px;
                        `}
                      >
                        {people.description}
                      </p>
                    </div>
                    <SocialIcons links={people.links} />
                  </div>
                );
              })}
            </ResponsiveGrid>
          </FullWidthBox>
        </article>
      </div>
    </>
  );
};

export const query = graphql`
  query AboutUs {
    visit: file(relativePath: { in: "visit-allgaeu.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    patron: file(relativePath: { in: "Patron-Plasticfree-Peaks.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    locals: file(relativePath: { in: "allgaeu-locals.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    tom: file(
      relativePath: { in: "Thomas-Herzhoff-Portrait-Isenhoff-GbR.png" }
    ) {
      childImageSharp {
        fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    philip: file(
      relativePath: { in: "Phillip_Herzhoff_Portrait_Isenhoff-GbR.png" }
    ) {
      childImageSharp {
        fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    anke: file(
      relativePath: { in: "Anke-Isenberg-de-Abreu-Portrait-Isenhoff-GbR.png" }
    ) {
      childImageSharp {
        fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    dummy: file(relativePath: { in: "Dummybild.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    dani: file(
      relativePath: {
        in: "Daniela-Schaetzle-Strategie-Positionierunug-Sichtbarkeit-OnlineMarketing-SW.jpg"
      }
    ) {
      childImageSharp {
        fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    julia: file(
      relativePath: { in: "Julia-Leeflang-von-Studio-Leeflang.png" }
    ) {
      childImageSharp {
        fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    marc: file(
      relativePath: {
        in: "Marc-Radziwill-Portrait-Consultant-Developer-Advocate.png"
      }
    ) {
      childImageSharp {
        fixed(width: 150, quality: 80, traceSVG: { color: "#73B471" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default AboutUs;
