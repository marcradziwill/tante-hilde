import React from 'react';

const ExternalLink = (props) => {
  const relValue = props.rel ? props.rel : 'noopener noreferrer';
  return (
    <a {...props} rel={relValue}>
      {props.children}
    </a>
  );
};

export default ExternalLink;
