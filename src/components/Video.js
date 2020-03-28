/* eslint-disable max-statements-per-line */
import React from 'react';
const Video = (props) => {
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
