import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import FullWidthBox from 'components/FullWidthBox';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
import CookieLayer from 'components/CookieLayer';
import StyledBox from 'components/StyledBox';
import { media } from 'utils/media';

const Footer = () => {
  return (
    <footer
      css={css`
        // position: absolute;
        @media ${media.small} {
          position: fixed;
        }
        bottom: 0;
        width: 100%;
        a {
          color: unset;
        }
        ul {
          list-style: none;
        }
      `}
    >
      <StyledBox
        style={{ color: '#ffffff' }}
        background="brand"
        pad={{
          left: 'large',
          right: 'large',
          top: 'none',
          bottom: 'none',
        }}
      >
        <FullWidthBox pad="none">
          <ResponsiveGrid templatecolumns="33% 33% 33%">
            <StyledBox
              css={css`
                margin: 0;
                padding: 0;
                list-style: none;
                li {
                  display: block;
                  font-weight: 400;
                }
                margin-top: 20px;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                @media only screen and (min-width: 640px) {
                  margin-top: 0;
                  -webkit-align-items: flex-start;
                  -webkit-box-align: flex-start;
                  -ms-flex-align: flex-start;
                  align-items: flex-start;
                }
              `}
            >
              <span className="text medium" style={{ fontWeight: 'bold' }}>
                &#169; Tante Hilde {new Date().getFullYear()}
              </span>
            </StyledBox>
            <StyledBox className="align-c justify-c">
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                made with
                <svg
                  css={css`
                    margin: 0 5px;
                    display: inline-block;
                    -webkit-flex: 0 0 auto;
                    -ms-flex: 0 0 auto;
                    -webkit-flex: 0 0 auto;
                    -ms-flex: 0 0 auto;
                    flex: 0 0 auto;
                    width: 12px;
                    height: 12px;
                    fill: #6cb88d;
                    stroke: #6cb88d;
                  `}
                  aria-label="Favorite"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    d="M1,8.4 C1,4 4.5,3 6.5,3 C9,3 11,5 12,6.5 C13,5 15,3 17.5,3 C19.5,3 23,4 23,8.4 C23,15 12,21 12,21 C12,21 1,15 1,8.4 Z"
                  />
                </svg>
                from Kempten (Allg&auml;u)
              </div>
            </StyledBox>
            <StyledBox
              css={css`
                margin: 0;
                padding: 0;
                list-style: none;
                li {
                  display: block;
                  font-weight: 400;
                }
                margin-top: 20px;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                @media only screen and (min-width: 640px) {
                  margin-top: 0;
                  -webkit-align-items: flex-end;
                  -webkit-box-align: flex-end;
                  -ms-flex-align: flex-end;
                  align-items: flex-end;
                }
              `}
            >
              <ul
                css={css`
                  margin: 0;
                  padding: 0;
                  list-style: none;
                  li {
                    display: block;
                    font-weight: 400;
                  }
                `}
              >
                <li
                  style={{
                    display: 'inline-block',
                    marginLeft: '0',
                  }}
                >
                  <span className="text">
                    <Link to="/impressum/">Impressum</Link>
                  </span>
                </li>
                <li
                  style={{
                    display: 'inline-block',
                    marginLeft: '20px',
                  }}
                >
                  <span className="text">
                    <Link to="/datenschutzerklaerung/">
                      Datenschutzerklärung
                    </Link>
                  </span>
                </li>
              </ul>{' '}
            </StyledBox>
          </ResponsiveGrid>
        </FullWidthBox>
      </StyledBox>
      <CookieLayer />
    </footer>
  );
};
export default React.memo(Footer);
