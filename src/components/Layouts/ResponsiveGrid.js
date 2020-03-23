import React from 'react';
import { css } from '@emotion/core';
const ResponsiveGrid = (props) => {
  return (
    <div
      css={css`
        display: grid;
        box-sizing: border-box;
        grid-template-columns: ${props.templatecolumns
          ? props.templatecolumns
          : `50% 50%`};
        grid-template-rows: auto;

        width: 100%;
        height: 100%;
        display: -ms-grid;
        -ms-grid-columns: 50% 50%;
        -ms-grid-rows: auto;
        grid-template-rows: auto;
        & > *:nth-of-type(odd) {
          -ms-grid-row: 1;
          -ms-grid-column: 1;
        }
        & > *:nth-of-type(even) {
          -ms-grid-row: 1;
          -ms-grid-column: 2;
        }
        @media only screen and (max-width: 640px) {
          grid-template-columns: 100%;
          grid-template-rows: auto auto;
        }
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default ResponsiveGrid;
