import React from 'react';
import { css } from '@emotion/core';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
import { orderBy, uniq } from 'lodash';

const Filter = (props) => {
  const { onchangecompanies, companies, ...otherProps } = props;
  companies.map((compan) => {
    compan.node.FilterName =
      compan.node.Name_Firma.charAt(0).toUpperCase() +
      compan.node.Name_Firma.slice(1);
    return compan;
  });

  const changeCategory = (event) => {
    event.preventDefault();
    const val = event.target.value;
    if (val === 'alle') {
      props.onchangecompanies(companies);
    } else {
      const companyToFilter = companies.filter((com) => {
        return com.node.Branch.includes(val) || val.includes(com.node.Branch);
      });
      onchangecompanies(orderBy(companyToFilter, 'node.FilterName'));
    }
  };
  const onSearchInput = (event) => {
    event.preventDefault();
    const val = event.target.value;
    const companyToFilter = companies.filter((com) => {
      return (
        com.node.Name_Firma.toLowerCase().includes(val.toLowerCase()) ||
        com.node.Beschreibung.toLowerCase().includes(val.toLowerCase())
      );
    });
    onchangecompanies(orderBy(companyToFilter, 'node.FilterName'));
  };
  const changePlace = (event) => {
    event.preventDefault();
    const val = event.target.value;
    if (val === 'alle') {
      onchangecompanies(orderBy(companies, 'node.FilterName'));
    } else {
      const companyToFilter = companies.filter((com) => {
        return com.node.PLZ__Ort.includes(val);
      });

      onchangecompanies(orderBy(companyToFilter, 'node.FilterName'));
    }
  };
  let places = [];
  companies.map((compan) => {
    compan.node.PLZ__Ort = compan.node.PLZ__Ort.replace(/\(Allgäu\)/g, '');
    compan.node.PlaceFilter = compan.node.PLZ__Ort.replace(
      /[&\/\\#,+()$!~®%.'":*?<>{}]/g,
      '',
    );
    compan.node.PlaceFilter = compan.node.PlaceFilter.replace(
      /([0-9]+)(.)/g,
      '$2',
    );

    places.push(compan.node.PlaceFilter.trim());
    return compan;
  });
  places = orderBy(places);

  return (
    <div {...otherProps}>
      <ResponsiveGrid
        templatecolumns="100%"
        css={css`
          margin-bottom: 20px;
        `}
      >
        <div id="search">
          <input
            placeholder="Suchen nach Name oder Beschreibung"
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
      </ResponsiveGrid>
      <ResponsiveGrid>
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
          <select onChange={changePlace}>
            <option value="alle">Alle Orte</option>
            {uniq(places).map((place, idx) => {
              return (
                <option key={idx} value={place}>
                  {place}
                </option>
              );
            })}
          </select>
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
            <option value="Bücher / Schreibwaren">Bücher / Schreibwaren</option>
            <option value=">Büro / Computer">Büro / Computer</option>
            <option value="Dekoration / Geschenk">
              Dekoration / Geschenke
            </option>
            <option value="Energie">Energie</option>
            <option value="Fahrräder / Zubehö">Fahrräder / Zubehör</option>
            <option value="Ferien / Reise">Ferien / Reisen</option>
            <option value="Freizeit / Hobby">Freizeit / Hobby</option>
            <option value="Garten / Pflanzen">Garten / Pflanzen</option>
            <option value="Gastronomie">Gastronomie</option>
            <option value="Gesundheit / Kosmetik">Gesundheit / Kosmetik</option>
            <option value="Handwerk">Handwerk</option>
            <option value="Haushaltsgeräte/-waren">
              Haushaltsgeräte/-waren
            </option>
            <option value="Heimwerker-Artikel">Heimwerker-Artikel</option>
            <option value="Kinder / Spielwaren">Kinder / Spielwaren</option>
            <option value="Kunst / Antiquitäten">Kunst / Antiquitäten</option>
            <option value="Lebensmittel">Lebensmittel</option>
            <option value="Möbel / Einrichtungen">Möbel / Einrichtungen</option>
            <option value="Kreative Dienste">Kreative Dienste</option>
            <option value="Schmuck /Opti">Schmuck /Optik</option>
            <option value="Schuhe">Schuhe</option>
            <option value="Zeitschrift / Medien">Zeitschrift / Medien</option>
            <option value="Sicherheit">Sicherheit</option>
            <option value="Sport">Sport</option>
            <option value="Unterhaltungs-Elektronik">
              Unterhaltungs-Elektronik
            </option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>
      </ResponsiveGrid>
    </div>
  );
};

export default Filter;
