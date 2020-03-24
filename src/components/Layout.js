import React from 'react';
import { css } from '@emotion/core';
import NavigationHeader from 'components/NavigationHeader';
import StyledBox from 'components/StyledBox';
// const Footer = loadable(() => import('components/Footer'))

const Layout = ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        box-sizing: border-box;
        grid-template-areas:
          'header header'
          'main main'
          'footer footer';
        grid-template-columns: 1fr;
        grid-gap: 0px 0px;
        grid-template-rows: auto auto auto;
      `}
    >
      <StyledBox
        css={css`
          grid-area: header;
        `}
      >
        <header>
          <NavigationHeader />
        </header>
      </StyledBox>
      <StyledBox
        css={css`
          grid-area: main;
        `}
      >
        <main>{children}</main>
      </StyledBox>
      <StyledBox
        css={css`
          grid-area: footer;
        `}
      >
        {/* <Footer location={location.href} /> */}
      </StyledBox>
    </div>
  );
};
export default Layout;
