import React from 'react';
import FullWidthBox from 'components/FullWidthBox';
import Quote from 'components/Quote';
const FullWidthBoxQuote = (props) => {
  const { quote, light } = props;
  return (
    <FullWidthBox
      {...props}
      pad="none"
      sectionpadding="20px"
      background={light}
    >
      <Quote image={quote.image} author={quote.author} quote={quote.text} />
    </FullWidthBox>
  );
};

export default FullWidthBoxQuote;
