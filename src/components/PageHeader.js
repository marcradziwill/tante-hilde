import React from 'react';
import { css } from '@emotion/core';
// import Image from 'components/Image';
// import { media } from 'utils/media';

const PageHeader = (props) => {
  const { children, align, ...otherProps } = props;
  return (
    <header
      css={css`
        height: ${otherProps.vheight ? otherProps.vheight : '100vh'};
      `}
      {...otherProps}
    >
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
