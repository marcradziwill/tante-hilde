import React from 'react';
import StyledBox from 'components/StyledBox';
import { css } from '@emotion/core';

const FullWidthBox = React.forwardRef((props, ref) => {
  const { children, ...otherProps } = props;
  const sectionpadding = otherProps.sectionpadding;

  let padding = '20px';
  if (sectionpadding !== undefined) {
    padding = sectionpadding;
  }
  return (
    <StyledBox
      ref={ref}
      {...otherProps}
      pad={otherProps.pad || { top: '80px', bottom: '80px' }}
    >
      <section
        css={css`
          max-width: ${props.sectionwidth ? props.sectionwidth : '54rem'};
          margin: 0 auto;
          padding: 0 ${padding};
          width: 100%;
          @media only screen and (min-width: 640px) {
            padding: 0 45px;
          }
        `}
      >
        {children}
      </section>
    </StyledBox>
  );
});
FullWidthBox.displayName = 'FullWidthBox';
export default FullWidthBox;
