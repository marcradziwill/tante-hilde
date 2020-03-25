import React from 'react';
import { css } from '@emotion/core';
import Image from 'components/Image';
import { media } from 'utils/media';

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
        <Image
          style={{ height: '100%' }}
          alt={otherProps.image.alt}
          title={otherProps.image.title}
          filename={otherProps.image.src}
        />
        <div
          css={css`
            position: absolute;
            top: 30%;
            ${align ? align : 'left: 10%;'}
            // ${align ? '' : 'transform: translate(-20%, -60%);'}
            width:  80%;
            @media ${media.small} {
              width: ${props.widthhero ? props.widthhero : '50%'};
            }
        `}
        >
          {children}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
