/* eslint-disable complexity */
import React from 'react';
import { css } from '@emotion/core';
import FullWidthBox from 'components/FullWidthBox';
import SEO from 'components/SEO/SEO';
import ExternalLink from 'components/ExternalLink';
import Filter from 'components/Filter';
import CompanyList from 'components/CompanyList';
import { orderBy } from 'lodash';

function Company({ pageContext: { companies } }) {
  const tempCompanies = companies.companies.map((compan) => {
    compan.node.FilterName =
      compan.node.Name_Firma.charAt(0).toUpperCase() +
      compan.node.Name_Firma.slice(1);
    return compan.node;
  });

  const [companiesToDisplay, setCompaniesToDisplay] = React.useState(
    // companies.edges,
    orderBy(tempCompanies, 'FilterName'),
  );
  return (
    <>
      <SEO
        title="Tante Hilde"
        description="Dein virtueller Marktplatz im Allgäu!"
        image="/Header-Tantehilde-Laden-Allgaeu.png"
        headerImage="/Header-Tantehilde-Laden-Allgaeu.png"
        follow="index, follow"
      />
      <FullWidthBox>
        <div
          css={css`
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
          `}
        >
          <h2>Branche: {companies.category}</h2>
        </div>
      </FullWidthBox>
      <FullWidthBox>
        <Filter
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
            {companiesToDisplay.length} Allgäuer Unternehmen und Dienstleister
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
          dieser Seite ist quelloffen und darf gerne für deine Region verwendet
          werden. Für Texte und Bilder gilt folgende Lizenz:
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
    </>
  );
}
export default Company;
