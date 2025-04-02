'use client';

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { colors } from '@/themes/default';
import Image from 'next/image';
import bg1 from '@/assets/landingPage/bg1.png';
import bg2 from '@/assets/landingPage/bg2.png';
import bg3 from '@/assets/landingPage/bg3.png';

const bgMapper = (imgType) => {
  const map = {
    img1: bg1,
    img2: bg2,
    img3: bg3,
  };
  return map[imgType];
};

const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'clipOrientation' && prop !== 'imgType',
})(({ theme, cliporientation, imgtype }) => ({
  position: 'relative',
  zIndex: '0',
  [theme.breakpoints.down('sm')]: {
    '& img': {
      width: '50vw !important',
    },
  },
}));

const BackgroundImage = styled(Image)(({ theme, cliporientation }) => ({
  position: 'absolute',
  width: '60vw !important',
  height: '100% !important',
  objectFit: 'cover',
  [theme.breakpoints.down('sm')]: {
    width: '50vw !important',
  },
  ...(cliporientation === 'right' && {
    right: 0,
  }),
  ...(cliporientation === 'left' && {
    left: 0,
  }),
}));

const ClipBackground = styled(Box)(({ theme, cliporientation }) => ({
  position: 'absolute',
  backgroundColor: colors.white,
  width: '100%',
  height: '100%',
  zIndex: '-1',
  ...(cliporientation === 'right' && {
    clipPath: 'polygon(0 0, 70% 0, 40% 100%, 0% 100%)',
    [theme.breakpoints.down('sm')]: {
      clipPath: 'polygon(100% 0, 100% 50%, 50% 100%, 0 100%, 0 0)',
    },
  }),
  ...(cliporientation === 'left' && {
    clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 30% 100%)',
  }),
}));

const BgImgContainer = ({
  children,
  clipOrientation,
  imgType,
  clip,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      // Your resize handling logic here
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) return null;

  return (
    <Container cliporientation={clipOrientation} imgtype={imgType}>
      <BackgroundImage
        src={bgMapper(imgType)}
        alt="Background"
        cliporientation={clipOrientation}
        priority
      />
      {clip && <ClipBackground cliporientation={clipOrientation} />}
      {children}
    </Container>
  );
};

BgImgContainer.defaultProps = {
  children: <></>,
  clipOrientation: 'right',
  imgType: 'img1',
};

BgImgContainer.propTypes = {
  children: PropTypes.node,
  clipOrientation: PropTypes.oneOf(['left', 'right']),
  imgType: PropTypes.string,
};

export default BgImgContainer; 