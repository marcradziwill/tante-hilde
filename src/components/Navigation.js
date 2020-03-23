import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import { css } from '@emotion/core';
import LanguageSwitcher from 'components/LanguageSwitcher';
import GatsbyLink from 'components/GatsbyLink';
import { useLocalContext } from 'components/LocalContext';
import SocialTeaser from 'components/SocialTeaser';
import { colors } from 'utils/theme';
import { media } from 'utils/media';
import { translateUrl } from 'utils/helpers';

const Navigation = ({ items, locationEntry }) => {
  const { locale } = useLocalContext();
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { in: "marc_grey.png" }) {
        childImageSharp {
          fixed(width: 36, quality: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const NavItem = ({ menuItem }) => {
    const linkObject = translateUrl(menuItem.name, locale);
    return (
      <li
        css={css`
          float: left;
          position: relative;
          text-decoration: none;
          display: block;
          margin: 0;
          transition-duration: 0.5s;
          &:hover {
            cursor: pointer;
          }
        `}
      >
        <GatsbyLink
          css={css`
            border-bottom: 2px solid transparent;
            display: block;
            color: ${colors.white};
            letter-spacing: 2px;
            text-transform: uppercase;
            font-size: 0.8rem;
            position: relative;
            text-decoration: none;
            padding: 1rem 0.6rem;
            top: 0;
            z-index: 1;
            :hover {
              font-weight: 700;
              color: ${colors.white};
              text-decoration: none;
            }
            &.current-item {
              font-weight: 800;
            }
          `}
          locale={locale}
          to={menuItem.name}
          data-typeaction="Click"
          data-typename={
            linkObject.title.charAt(0).toUpperCase() + linkObject.title.slice(1)
          }
          data-typecat="Nav-Punkt"
        >
          {linkObject.title}
        </GatsbyLink>
        {menuItem.submenu && menuItem.submenu.length > 0 && (
          <ul
            css={css`
              list-style: none;
              margin: 0;
              margin-left: 16px;
              padding-left: 0;
              li {
                :hover > ul {
                  visibility: visible;
                  opacity: 1;
                  display: block;
                  background: #6cb88d;
                }
                ul {
                  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
                  width: 350px;
                  visibility: hidden;
                  opacity: 0;
                  position: absolute;
                  transition: all 0.5s ease;
                  margin-left: 0px;
                  left: 0;
                  display: none;
                  &:hover {
                    visibility: visible;
                    opacity: 1;
                    display: block;
                  }
                  li {
                    &:not(:last-child) {
                      border-bottom: 1px solid #c8ebd7;
                    }
                    clear: both;
                    width: 100%;
                    :hover {
                      background: #6cb88d;
                    }
                  }
                }
              }
            `}
          >
            {menuItem.submenu.map((subItem, index) => (
              <NavItem key={index} menuItem={subItem} />
            ))}
          </ul>
        )}
      </li>
    );
  };
  return (
    <div
      css={css`
        position: fixed;
        min-height: 3.75rem;
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
          background-color: #6cb88d;
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
          min-height: 3.75rem;
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
        <GatsbyLink
          css={css`
            align-items: center;
            display: flex;
            flex-shrink: 0;
            text-decoration: none;
          `}
          to="home"
          locale={locale}
          aria-label="Marc Radziwill, Back to homepage"
          data-typeaction="Click"
          data-typename="Nav Icon Hut"
          data-typecat="Nav-Punkt"
        >
          <Img
            alt="Marc"
            style={{ width: '2rem' }}
            fixed={[data.logo.childImageSharp.fixed]}
            styles={{ height: '1.5rem', margin: 0 }}
          />
        </GatsbyLink>

        <nav
          aria-label="Primary Navigation"
          css={css`
            visibility: hidden;
            opacity: 0;
            display: none;
            @media ${media.small} {
              visibility: visible;
              opacity: 1;
              display: block;
            }
          `}
        >
          <ul
            css={css`
              list-style: none;
              margin: 0;
              margin-left: 16px;
              padding-left: 0;
              li {
                :hover > ul {
                  visibility: visible;
                  opacity: 1;
                  display: block;
                  background: #6cb88d;
                }
                ul {
                  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
                  width: 350px;
                  visibility: hidden;
                  opacity: 0;
                  position: absolute;
                  transition: all 0.5s ease;
                  margin-left: 0px;
                  left: 0;
                  display: none;
                  &:hover {
                    visibility: visible;
                    opacity: 1;
                    display: block;
                  }
                  li {
                    &:not(:last-child) {
                      border-bottom: 1px solid #c8ebd7;
                    }
                    clear: both;
                    width: 100%;
                    :hover {
                      background: #6cb88d;
                    }
                  }
                }
              }
            `}
          >
            {items.map((menuItem, index) => (
              <NavItem key={index} menuItem={menuItem} />
            ))}
          </ul>
        </nav>

        <div
          css={{
            alignSelf: `flex-end`,
            display: `flex`,
            marginLeft: `auto`,
            minHeight: '3.75rem',
          }}
        >
          <SocialTeaser color={colors['green-5']} parent="Header" />
          <LanguageSwitcher location={locationEntry} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
