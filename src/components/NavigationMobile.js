import React, { useState } from 'react';
import { css } from '@emotion/core';
import { media } from 'utils/media';
import { useLocalContext } from 'components/LocalContext';
import GatsbyLink from 'components/GatsbyLink';
import ExternalLink from 'components/ExternalLink';
import StyledBox from 'components/StyledBox';
import { colors } from 'utils/theme';
import { translateUrl } from 'utils/helpers';

const MobileNavigation = ({ items, location }) => {
  const { locale } = useLocalContext();
  const [showLayer, setShowLayer] = useState(false);
  const currentUrlParts = location.slice(1, -1).split('/');

  const onToggle = () => {
    setShowLayer(!showLayer);
  };
  const MobileNavItem = ({ menuItem }) => {
    const [isMenuItemOpen, toggleMenuItem] = useState(false);
    const linkObject = translateUrl(menuItem.name, locale);
    const lastIndex = linkObject.link.split('/').length - 1;
    const hastSubmenu = menuItem.submenu && menuItem.submenu.length > 0;

    return (
      <li
        css={css`
          opacity: 1;
          transition: all 0.3s cubic-bezier(0, 0.995, 0.99, 1) 0.3s;
        `}
      >
        {hastSubmenu && !isMenuItemOpen ? (
          <div
            className={
              currentUrlParts.includes(linkObject.link.split('/')[lastIndex])
                ? 'current-item'
                : ''
            }
            onClick={() => toggleMenuItem(!isMenuItemOpen)}
            onKeyDown={() => {}}
            css={css`
              color: white;
              display: block;
              text-align: center;
              text-transform: uppercase;
              letter-spacing: 5px;
              font-size: 1.25rem;
              text-decoration: none;
              padding: 1rem;

              &:hover,
              &:focus {
                outline: 0;
                background-color: rgba(0, 0, 0, 0.2);
              }
            `}
          >
            {linkObject.title}
          </div>
        ) : (
          <GatsbyLink
            data-typeaction="Click"
            data-typename={
              linkObject.title.charAt(0).toUpperCase() +
              linkObject.title.slice(1)
            }
            data-typecat="Nav-Punkt"
            onClick={onToggle}
            to={menuItem.name}
            locale={locale}
            activeClassName="current-item"
            className={
              currentUrlParts.includes(linkObject.link.split('/')[lastIndex])
                ? 'current-item'
                : ''
            }
            css={css`
              color: white;
              display: block;
              text-align: center;
              text-transform: uppercase;
              letter-spacing: 5px;
              font-size: 1.25rem;
              text-decoration: none;
              padding: 1rem;
              font-weight: 400;
              &:hover,
              &:focus {
                outline: 0;
                background-color: rgba(0, 0, 0, 0.2);
              }
            `}
          >
            {linkObject.title}
          </GatsbyLink>
        )}
        {hastSubmenu && (
          <div
            css={css`
              position: relative;
              ${isMenuItemOpen ? 'display:flex;' : 'display:none;'}
            `}
            className={`${isMenuItemOpen ? 'animated fadeIn faster' : ''}`}
          >
            <ul
              css={css`
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                position: relative;
                z-index: 1;
                margin-left: 0;
                padding-left: 0;
                width: 100%;
                ul {
                  width: 100%;
                  li {
                    padding: 10px 0;
                  }
                  a {
                    font-size: 1rem;
                    padding: 0.1rem;
                    color: ${colors.brand};
                  }
                }
                .current-item {
                  font-weight: 800;
                }
              `}
            >
              {menuItem.submenu.map((subItem, index) => (
                <MobileNavItem key={index} menuItem={subItem} />
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  };
  return (
    <>
      {showLayer && (
        <div
          className={`animated fast ${showLayer ? 'fadeIn' : 'fadeOut'}`}
          style={{
            margin: '0',
            height: '100%',
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 16,
          }}
        >
          <StyledBox
            className="align-c justify-c"
            css={css`
              width: 100%;
              height: 100%;
            `}
            background="#6CB88D"
          >
            <ul
              css={css`
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                position: relative;
                z-index: 1;
                margin-left: 0;
                padding-left: 0;
                ul {
                  li {
                    padding: 10px 0;
                  }
                  a {
                    font-size: 1rem;
                    padding: 0.1rem;
                    color: ${colors.brand};
                  }
                }
                .current-item {
                  font-weight: 800;
                }
              `}
              aria-label="mobile navigation"
            >
              {items.map((menuItem, index) => (
                <MobileNavItem key={index} menuItem={menuItem} />
              ))}
            </ul>
            <ExternalLink
              css={css`
                animation-duration: 0.5s;
                animation-iteration-count: 5;
                bottom: 50px;
                background: #6cb88d;
                position: fixed;
                z-index: 2;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                width: 70px;
                height: 70px;
                text-align: center;
                border-radius: 50%;
                padding: 11px;
                cursor: pointer;
                color: white;
                letter-spacing: 2px;
                font-size: 0.9rem;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 800;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                  0 6px 20px 0 rgba(0, 0, 0, 0.19);
                background: #c8ebd7;
              `}
              onClick={() => setShowLayer(false)}
            >
              <svg
                css={css`
                  display: inline-block;
                  -webkit-flex: 0 0 auto;
                  -ms-flex: 0 0 auto;
                  flex: 0 0 auto;
                  width: 24px;
                  height: 24px;
                  fill: #555555;
                  stroke: #555555;
                `}
                aria-label="Close"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M3,3 L21,21 M3,21 L21,3"
                />
              </svg>
            </ExternalLink>
          </StyledBox>
        </div>
      )}
      <nav
        css={css`
          @media ${media.small} {
            display: none;
          }
        `}
      >
        <ExternalLink
          css={css`
            animation-duration: 0.5s;
            animation-iteration-count: 5;
            bottom: 50px;
            background: #6cb88d;
            position: fixed;
            z-index: 2;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            width: 70px;
            height: 70px;
            text-align: center;
            border-radius: 50%;
            padding: 11px;
            cursor: pointer;
            color: white;
            letter-spacing: 2px;
            font-size: 0.9rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 800;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          `}
          className="animated pulse"
          onClick={onToggle}
        >
          <span>MENU</span>
        </ExternalLink>
      </nav>
    </>
  );
};

export default MobileNavigation;
