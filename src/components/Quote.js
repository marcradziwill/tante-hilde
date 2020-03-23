import React from 'react';
import { css } from '@emotion/core';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
import Image from './Image';
import { borderSize } from '../utils/theme';
import StyledBox from 'components/StyledBox';

const Quote = ({ author, quote, image }) => {
  const BlockQuote = () => {
    return (
      <StyledBox>
        <blockquote
          css={css`
            position: relative;
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 40px;
            margin-inline-end: 40px;
            padding: 1em;
            font-size: 18.333333333333332px;
            line-height: 23px;
            border-left: ${borderSize} solid #6cb88d;
            font-style: italic;
            span {
              &:before,
              &:after {
                content: '\\201D';
                color: #6cb88d;
              }
              &:after {
                content: '\\201D';
              }
            }
            cite {
              font-size: 12px;
              font-style: normal;
              font-weight: 800;
              color: #6cb88d;
            }
          `}
        >
          <span dangerouslySetInnerHTML={{ __html: quote }} />
          {author && (
            <>
              <br />
              <cite dangerouslySetInnerHTML={{ __html: author }} />
            </>
          )}
        </blockquote>
      </StyledBox>
    );
  };

  const BlockQuoteWithImage = () => {
    return (
      <ResponsiveGrid templatecolumns="30% 70%">
        <StyledBox
          className="align-c justify-c"
          css={css`
            margin-top: 40px;
            margin-bottom: 40px;
          `}
        >
          <Image
            css={css`
              width: 150px;
              height: 150px;
              border-radius: 50%;
            `}
            filename={image.src}
            alt={image.alt}
          />
        </StyledBox>
        <StyledBox className="align-c justify-c">
          <BlockQuote author={author} quote={quote} />
        </StyledBox>
      </ResponsiveGrid>
    );
  };

  return (
    <div>
      {image ? (
        <BlockQuoteWithImage author={author} quote={quote} image={image} />
      ) : (
        <StyledBox>
          <BlockQuote author={author} quote={quote} image={image} />
        </StyledBox>
      )}
    </div>
  );
};

export default Quote;
