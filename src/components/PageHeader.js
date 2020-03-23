import React from 'react'
import {css} from '@emotion/core'
// import Image from 'components/Image';
// import Video from 'components/Video';
import {media} from 'utils/media'

const PageHeader = props => {
  const {children, align, ...otherProps} = props
  const isVideo = otherProps.video
  const isHalf = otherProps.half

  const isSingleImage = otherProps.images
    ? otherProps.images.length === 1
    : false

  if (!isVideo && !isSingleImage) {
    otherProps.images = otherProps.images.slice(0, 1)
  }
  if (isHalf) {
    otherProps.images = otherProps.images.slice(0, 1)
  }

  return (
    <header
      css={css`
        height: ${otherProps.vheight ? otherProps.vheight : '100vh'};
      `}
      {...otherProps}
    >
      <div
        style={{
          // marginTop: '3rem',
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        {/* {isVideo ? (
          <Video src={props.video} />
        ) : ( */}
        {/* <Image
          style={{ height: '100%' }}
          alt={otherProps.images[0].alt}
          title={otherProps.images[0].title}
          filename={otherProps.images[0].src}
          {...otherProps.imageOptions}
        /> */}
        {/* )} */}

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
  )
}

export default PageHeader
