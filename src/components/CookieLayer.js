import React from 'react';
import { Link } from 'gatsby';
import StyledButton from 'components/StyledButton';
import { css } from '@emotion/core';
import {
  enableCookies,
  isCookieGaCookie,
  toggleAnalyticsCookies,
} from 'utils/ga';
import StyledBox from 'components/StyledBox';

const CookieLayer = () => {
  const [open, setModal] = React.useState(false);
  const [settingsOpen, setSettings] = React.useState(false);
  const [statistics, setStatistics] = React.useState(isCookieGaCookie());

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
              <>
                <h3>Cookie Nutzung</h3>
                <span
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Hiermit bestätige ich, dass ich bei weitere Nutzung der
                  Webseite den Cookie-Richtlinien zustimme.
                </span>
                <span
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Du kannst in der{' '}
                  <Link to="/datenschutzerklaerung/">
                    Datenschutzbestimmung
                  </Link>{' '}
                  mehr darüber lesen.
                </span>
              </>

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
                >
                  <span className="allow-track">Cookies für Gremlin</span>
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
                    <span>Speichern</span>
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
                  <span>Einstellungen</span>
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
                    <summary>Technisch erforderlich</summary>
                    <table>
                      <thead>
                        <tr>
                          <th />
                          <th>Name</th>
                          <th>Was wird gespeichert?</th>
                          <th>Wer speichert die Daten?</th>
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
                            Speichert die Information, ob der Benutzer
                            statistischen Analysen zustimmt oder sie ablehnt
                          </td>
                          <td>
                            Datenempfänger ist der jeweils für die Webseite
                            Verantwortliche.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </details>
                  <details>
                    <summary>Statistik</summary>
                    <table>
                      <thead>
                        <tr>
                          <th />
                          <th>Name</th>
                          <th>Was wird gespeichert?</th>
                          <th>Wer speichert die Daten?</th>
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
                            Browser-Informationen, Datum und Uhrzeit des
                            Besuchs, Referrer URL, Geräteinformationen,
                            Anonymisierte IP-Adresse, Nutzungsdaten, Klickpfad.
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
