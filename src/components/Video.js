/* eslint-disable max-statements-per-line */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import { useNetworkStatus } from 'react-adaptive-hooks/network';
import Image from 'components/Image';
const Video = (props) => {
  console.log(props);
  const HeaderVideo = (
    <video
      preload="auto"
      muted
      autoPlay
      style={{
        height: '100%',
        width: '100%',
        objectFit: 'cover',
      }}
    >
      <source src={props.filepath} type="video/mp4" />
    </video>
  );

  return HeaderVideo;
};
export default Video;
