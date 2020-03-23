import React from 'react';
import { colors, themeHeights, themeWidths } from 'utils/theme';
import { css } from '@emotion/core';

// eslint-disable-next-line complexity
const CustomBox = (props) => {
  const { pad, ...otherProps } = props;

  let padIsObject = false;
  if (typeof props.pad === 'object') {
    padIsObject = true;
  }

  const getPadding = (padItem) => {
    let padding = '';
    switch (padItem) {
      case 'large': {
        padding = 'padding: 40px';
        break;
      }
      case 'medium': {
        padding = 'padding: 20px';
        break;
      }
      case 'small': {
        padding = 'padding: 10px';
        break;
      }
      default: {
        padding = '';
        break;
      }
    }
    return padding;
  };

  return (
    <div
      css={css`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    box-sizing: border-box;
    outline: none;
    max-width: 100%;
    min-width: 0;
    min-height: 0;
    ${
      props.direction === 'row'
        ? `-webkit-flex-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;`
        : `    -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;`
    }
    ${
      props.height
        ? `height: ${
            themeHeights[props.height]
              ? themeHeights[props.height]
              : props.height
          };`
        : ''
    }
    ${
      props.width
        ? `width: ${
            themeWidths[props.width] ? themeHeights[props.width] : props.width
          };`
        : ''
    }
    ${
      props.background
        ? `background: ${
            colors[props.background]
              ? colors[props.background]
              : props.background
          };`
        : ''
    }
    ${props.pad && !padIsObject ? `${getPadding(props.pad)}` : ''}
    ${padIsObject && props.pad.top ? `padding-top: ${props.pad.top};` : ''}
    ${
      padIsObject && props.pad.bottom
        ? `padding-bottom: ${props.pad.bottom};`
        : ''
    }
    ${padIsObject && props.pad.left ? `padding-left: ${props.pad.left};` : ''}
    ${
      padIsObject && props.pad.right ? `padding-right: ${props.pad.right};` : ''
    }
  `}
      {...otherProps}
    >
      {props.children}
    </div>
  );
};
export default CustomBox;
