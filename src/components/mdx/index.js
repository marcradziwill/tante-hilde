import React from 'react';
import StyledBox from 'components/StyledBox';

import Title from './title';
import Subtitle from './subtitle';
import SmallTitle from './small-title';
import Paragraph from './paragraph';
import List from './list';

export default {
  wrapper: ({ children }) => children,
  h1: (props) => <Title {...props} />,
  h2: (props) => <Subtitle {...props} />,
  h3: (props) => <SmallTitle {...props} />,
  p: (props) => <Paragraph {...props} />,
  ul: (props) => <List {...props} />,
  styledbox: (props) => <StyledBox {...props} />,
};

/* eslint react/display-name:0, consistent-return:0 */
