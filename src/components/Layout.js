import React from 'react';
import { css } from '@emotion/core';
import NavigationHeader from 'components/NavigationHeader';
import StyledBox from 'components/StyledBox';
import loadable from '@loadable/component';
const Footer = loadable(() => import('components/Footer'));

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
          margin-top: 5rem;
        `}
      >
        <main>{children}</main>
      </StyledBox>
      <StyledBox
        css={css`
          grid-area: footer;
          margin-top: 100px;
        `}
      >
        <Footer />
      </StyledBox>
    </div>
  );
};
export default Layout;
