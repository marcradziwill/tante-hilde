import React from 'react';
import { css } from '@emotion/core';
const StyledButton = (props) => {
  return (
    <button
      type="button"
      onMouseEnter={(event) => {
        event.currentTarget.classList.add('animated', 'pulse');
      }}
      onMouseLeave={(event) => {
        event.currentTarget.classList.remove('animated', 'pulse');
      }}
      css={css`
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      `}
      {...props}
    >
      {props.children}
    </button>
  );
};
export default StyledButton;
