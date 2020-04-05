import React from 'react';
import { Link } from 'gatsby';
import loadable from '@loadable/component';
import { css } from '@emotion/core';
import SocialTeaser from 'components/SocialTeaser';
import { media } from 'utils/media';
const NavigationMobile = loadable(() => import('components/NavigationMobile'));
const Navigation = loadable(() => import('components/Navigation'));

const isMobileDevice = () => {
  try {
    return (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    );
    // eslint-disable-next-line no-empty
  } catch (e) {}
};

const items = [
  {
    title: 'Start',
    link: '/',
  },
  {
    title: 'Schaufenster',
    link: '/schaufenster/',
  },
  {
    title: 'Unternehmen',
    link: '/unternehmen/',
  },
  {
    title: 'Über uns',
    link: '/ueber-uns/',
  },
  {
    title: 'Anmelden',
    extern: true,
    link:
      'https://docs.google.com/forms/d/e/1FAIpQLSeBpMd-oqTT1zkLcG-CnsvoJPNscd5g3ooyWQUwPAmfaDUCdw/viewform?usp=sf_link',
  },
];
const NavigationHeader = ({ location, locationEntry }) => {
  // const data = useStaticQuery(graphql`
  //   query MenuQuery {
  //     allSitePage {
  //       nodes {
  //         path
  //       }
  //     }
  //   }
  // `);
  // console.log(data.allSitePage.nodes);

  return (
    <div
      css={css`
        position: fixed;
        min-height: 3.75rem;
        border-bottom: 1px solid #555;
        left: 0;
        right: 0;
        z-index: 5;
        @media ${media.small} {
          position: fixed;
        }
      `}
    >
      <div
        css={css`
          background-color: #ffffff;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          margin: 0 auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          display: flex;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          width: 100%;
          height: 100%;
          // min-height: 2rem;
          position: relative;
          &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1;
            z-index: -1;
          }
        `}
      >
        <Link
          css={css`
            align-items: center;
            display: flex;
            flex-shrink: 0;
            text-decoration: none;
            width: 60px;
            height: 60px;
            margin-top: 22px;
          `}
          to="/"
          aria-label="Zurück zur Startseite"
          data-typeaction="Click"
          data-typename="Nav Icon Logo"
          data-typecat="Nav-Punkt"
        >
          <img src="/tantehilde-black.png" alt="Tante Hilde Logo" />
        </Link>
        {isMobileDevice() ? (
          <NavigationMobile items={items} location={location} />
        ) : (
          <Navigation
            items={items}
            location={location}
            locationEntry={locationEntry}
          />
        )}
        <div
          css={css`
            align-self: flex-end;
            display: flex;
            margin-left: auto;
            min-height: 3.75rem;
            margin-right: 30px;
            @media ${media.medium} {
              margin-right: 0;
            }
          `}
        >
          <SocialTeaser />
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
