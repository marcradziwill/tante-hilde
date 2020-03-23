/* eslint-disable complexity */
/* eslint-disable no-undef */
import React from 'react';
import StyledButton from 'components/StyledButton';
import GatsbyLink from 'components/GatsbyLink';
import { css } from '@emotion/core';
import {
  enableCookies,
  isCookieGaCookie,
  toggleAnalyticsCookies,
} from 'utils/ga';
import { useLocalContext } from 'components/LocalContext';
import StyledBox from 'components/StyledBox';

const CookieLayer = () => {
  const [open, setModal] = React.useState(false);
  const [settingsOpen, setSettings] = React.useState(false);
  const [statistics, setStatistics] = React.useState(isCookieGaCookie());
  const { locale } = useLocalContext();

  if (!open) {
    setTimeout(() => {
      setModal(!isCookieGaCookie());
    }, 2000);
  }

  const handleChange = () => {
    setStatistics(!statistics);
    toggleAnalyticsCookies(!statistics);
  };

  const enableAllCookies = () => {
    enableCookies();
  };

  const saveSettingsEnbleAllCookies = () => {
    enableAllCookies();
    setModal(false);
  };

  return (
    <StyledBox>
      {open && (
        <div
          css={css`
            position: fixed;
            cursor: pointer;
            height: auto;
            width: 100%;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9;
            @media only screen and (max-width: 640px) {
              height: auto;
              width: 100%;
              font-size: 14px;
            }
          `}
        >
          <StyledBox
            className="align-c justify-c"
            pad="medium"
            style={{
              height: '100%',
              background: '#EEFAF3',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <StyledBox width="100%" className="align-c justify-c">
              {locale === 'en' ? (
                <>
                  <h3>
                    Hello I am Gremlin!!! {` `}
                    <svg
                      css={css`
                        display: inline-block;
                        -webkit-flex: 0 0 auto;
                        -ms-flex: 0 0 auto;
                        flex: 0 0 auto;
                        width: 24px;
                        height: 24px;
                        fill: #555;
                        stroke: #555;
                      `}
                      aria-label="Gremlin"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        // stroke="#000"
                        strokeWidth="2"
                        d="M7,14 C7.55228475,14 8,13.5522847 8,13 C8,12.4477153 7.55228475,12 7,12 C6.44771525,12 6,12.4477153 6,13 C6,13.5522847 6.44771525,14 7,14 Z M17,14 C17.5522847,14 18,13.5522847 18,13 C18,12.4477153 17.5522847,12 17,12 C16.4477153,12 16,12.4477153 16,13 C16,13.5522847 16.4477153,14 17,14 Z M12,16 C12.5,16 13,15.6790227 13,15 C13,14.8871314 11,14.9246156 11,15 C11,15.6790227 11.5,16 12,16 Z M3,24 C3,24 3.00341148,16 3,12 C3.00341148,8 2.55309359,4 12,4 C21.4469064,4 20.9965885,8 21,12 C20.9965885,16 21,24 21,24 M20.0682179,7 C23.3272228,7 23.6478055,3.42041241 22.1136966,1.88630344 C20.5795876,0.352194472 17,0.672777193 17,3.93178206 M7,19 C7,18.7966267 9.50000016,20.1517845 12,20 C14.4999998,20.1517846 17,18.5013715 17,19 C17,19.8021982 15.5,21 12,21 C8.5,21 7,19.5069424 7,19 Z M3.94464295,7 C0.604407067,7 0.38005973,3.42041241 1.90773825,1.88630344 C3.43541678,0.352194472 7,0.672777193 7,3.93178206"
                      />
                    </svg>
                  </h3>
                  <span
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    I love cookies! They help me to offer you the best possible
                    service.
                  </span>
                  <span
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    You can read more about it in the{' '}
                    <GatsbyLink to="privacy" locale={locale}>
                      privacy policy
                    </GatsbyLink>
                  </span>
                  <span
                    style={{
                      marginTop: '20px',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    Allow me to use them.
                  </span>
                </>
              ) : (
                <>
                  <h3>
                    Hallo ich bin Gremlin!!! {` `}
                    <svg
                      css={css`
                        display: inline-block;
                        -webkit-flex: 0 0 auto;
                        -ms-flex: 0 0 auto;
                        flex: 0 0 auto;
                        width: 24px;
                        height: 24px;
                        fill: #555;
                        stroke: #555;
                      `}
                      aria-label="Gremlin"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        // stroke="#000"
                        strokeWidth="2"
                        d="M7,14 C7.55228475,14 8,13.5522847 8,13 C8,12.4477153 7.55228475,12 7,12 C6.44771525,12 6,12.4477153 6,13 C6,13.5522847 6.44771525,14 7,14 Z M17,14 C17.5522847,14 18,13.5522847 18,13 C18,12.4477153 17.5522847,12 17,12 C16.4477153,12 16,12.4477153 16,13 C16,13.5522847 16.4477153,14 17,14 Z M12,16 C12.5,16 13,15.6790227 13,15 C13,14.8871314 11,14.9246156 11,15 C11,15.6790227 11.5,16 12,16 Z M3,24 C3,24 3.00341148,16 3,12 C3.00341148,8 2.55309359,4 12,4 C21.4469064,4 20.9965885,8 21,12 C20.9965885,16 21,24 21,24 M20.0682179,7 C23.3272228,7 23.6478055,3.42041241 22.1136966,1.88630344 C20.5795876,0.352194472 17,0.672777193 17,3.93178206 M7,19 C7,18.7966267 9.50000016,20.1517845 12,20 C14.4999998,20.1517846 17,18.5013715 17,19 C17,19.8021982 15.5,21 12,21 C8.5,21 7,19.5069424 7,19 Z M3.94464295,7 C0.604407067,7 0.38005973,3.42041241 1.90773825,1.88630344 C3.43541678,0.352194472 7,0.672777193 7,3.93178206"
                      />
                    </svg>
                  </h3>
                  <span
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    Ich esse für mein Leben gerne Cookies! Sie helfen mir dir
                    als Webseitenbesucher den bestmöglichen Service zu bieten.
                  </span>
                  <span
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    Du kannst in der{' '}
                    <GatsbyLink to="privacy" locale={locale}>
                      Datenschutzbestimmung
                    </GatsbyLink>{' '}
                    mehr darüber lesen.
                  </span>
                  <span
                    style={{
                      marginTop: '20px',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    Erlaubst du mir, dass ich sie nutzen darf?
                  </span>
                </>
              )}

              <StyledBox
                className="justify-e align-c"
                pad={{ top: '20px', bottom: '10px' }}
                css={css`
                  -webkit-flex-direction: column;
                  -ms-flex-direction: column;
                  flex-direction: column;
                  @media only screen and (min-width: 640px) {
                    -webkit-flex-direction: row;
                    -ms-flex-direction: row;
                    flex-direction: row;
                  }
                `}
              >
                <StyledButton
                  className="allow-track"
                  onClick={saveSettingsEnbleAllCookies}
                  color="green-4"
                >
                  <span className="allow-track">
                    {locale === 'en'
                      ? `Cookies for Gremlin`
                      : `Cookies für Gremlin`}
                  </span>
                </StyledButton>
                {settingsOpen && (
                  <StyledButton
                    css={css`
                      margin-top: 20px !important;
                      margin-left: 0;
                      @media only screen and (min-width: 640px) {
                        margin-left: 20px !important;
                        margin-top: 0px !important;
                      }
                    `}
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    <span>{locale === 'en' ? `Save` : `Speichern`}</span>
                  </StyledButton>
                )}
                <StyledButton
                  css={css`
                    margin-top: 20px !important;
                    margin-left: 0;
                    @media only screen and (min-width: 640px) {
                      margin-left: 20px !important;
                      margin-top: 0px !important;
                    }
                  `}
                  onClick={() => {
                    setSettings(!settingsOpen);
                  }}
                  className="invert"
                >
                  <span>{locale === 'en' ? `settings` : `Einstellungen`}</span>
                </StyledButton>
              </StyledBox>
              {settingsOpen && (
                <StyledBox
                  css={css`
                    width: 100%;
                    margin-top: 40px;
                    table {
                      font-size: 11px;
                    }
                    th,
                    td {
                      padding: 8px;
                    }
                    summary {
                      padding: 10px;
                    }
                  `}
                >
                  <details>
                    <summary>
                      {locale === 'en'
                        ? `Technically required`
                        : `Technisch erforderlich`}
                    </summary>
                    <table>
                      <thead>
                        <tr>
                          <th />
                          <th>Name</th>
                          <th>
                            {' '}
                            {locale === 'en'
                              ? `What is stored?`
                              : `Was wird gespeichert?`}
                          </th>
                          <th>
                            {locale === 'en'
                              ? `Who stores the data?`
                              : `Wer speichert die Daten?`}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label className="switch">
                              <input checked disabled type="checkbox" />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td>mr_ga</td>
                          <td>
                            {locale === 'en'
                              ? `Stores the information as to whether the user agrees to statistical analyzes or rejects them`
                              : `Speichert die Information, ob der Benutzer statistischen Analysen zustimmt oder sie ablehnt`}
                          </td>
                          <td>
                            {locale === 'en'
                              ? `The data recipient is the person responsible for the website.`
                              : `Datenempfänger ist der jeweils für die Webseite
                          Verantwortliche.`}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </details>
                  <details>
                    <summary>
                      {locale === 'en' ? `Statistics` : `Statistik`}
                    </summary>
                    <table>
                      <thead>
                        <tr>
                          <th />
                          <th>Name</th>
                          <th>
                            {' '}
                            {locale === 'en'
                              ? `What is stored?`
                              : `Was wird gespeichert?`}
                          </th>
                          <th>
                            {locale === 'en'
                              ? `Who stores the data?`
                              : `Wer speichert die Daten?`}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label className="switch">
                              <input
                                checked={statistics}
                                onChange={handleChange}
                                type="checkbox"
                              />
                              <span className="slider round" />
                            </label>
                          </td>

                          <td>_ga, _gid</td>
                          <td>
                            {locale === 'en'
                              ? `This list contains all (personal) data collected by or through the use of this service.

                          Browser information,
                          Date and time of the visit,
                          Referrer URL,
                          device information,
                          Anonymized IP address,
                          usage data,
                          clickstream.`
                              : `Diese Liste enthält alle (persönlichen) Daten, die von oder durch die Nutzung dieses Dienstes gesammelt werden.

                          Browser-Informationen,
                          Datum und Uhrzeit des Besuchs,
                          Referrer URL,
                          Geräteinformationen,
                          Anonymisierte IP-Adresse,
                          Nutzungsdaten,
                          Klickpfad.`}
                          </td>
                          <td>Alphabet Inc.</td>
                        </tr>
                      </tbody>
                    </table>
                  </details>
                </StyledBox>
              )}
            </StyledBox>
          </StyledBox>
        </div>
      )}
    </StyledBox>
  );
};
export default CookieLayer;
