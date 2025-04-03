import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types'
import { Bg1, Bg3, Bg2 } from '../../assets'
import { colors } from '../../themes/default'
import { styled } from '@mui/material/styles'
import { useFormikContext } from 'formik';

const bgMapper = (imgType) => {
  const map = {
    img1: Bg1?.src || Bg1, // Ensure it's a valid URL
    img2: Bg2?.src || Bg2,
    img3: Bg3?.src || Bg3,
  };
  return map[imgType] || Bg1; // Default fallback
};

const Container = styled('div')(({imgType, theme,clipOrientation }) => ({
  backgroundImage: `url(${bgMapper(imgType)})`,
  // backgroundImage: (props) => `url(${ bgMapper(props.imgType) })`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: clipOrientation,
  backgroundSize: '60vw 100%',
  position: 'relative',
  zIndex: '0',
  [theme.breakpoints.down('sm')]: {
    backgroundSize: '50vw 100%',
  },
}))

const ClipBg = styled('div')({
  position: 'absolute',
  backgroundColor: colors.white,
  width: '100%',
  height: '100%',
  zIndex: '-1',
})

const ClipRight = styled(ClipBg)(({ theme }) => ({
  clipPath: 'polygon(0 0, 70% 0, 40% 100%, 0% 100%)',
  [theme.breakpoints.down('sm')]: {
    clipPath: 'polygon(100% 0, 100% 50%, 50% 100%, 0 100%, 0 0)',
  },
}))

const ClipLeft = styled(ClipBg)({
  clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 30% 100%)',
})

const BgImgContainer = ({
  children, clipOrientation, imgType, clip,
}) => {
 
  const [isMobile, setIsMobile] = useState(false);
  const formik = useFormikContext();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 960);
        const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (!clip && isMobile) {
    return <>{children}</>
  }
  
  return (
    <Container imgType={imgType} clipOrientation={clipOrientation}>
      {clipOrientation === 'right' && <ClipRight />}
      {clipOrientation === 'left' && <ClipLeft />}
      {children}
    </Container>
  )
}

BgImgContainer.defaultProps = {
  children: <></>,
  clipOrientation: 'right',
  imgType: 'img1',
}

BgImgContainer.propTypes = {
  children: PropTypes.node,
  clipOrientation: PropTypes.oneOf(['left', 'right']),
  imgType: PropTypes.string,
}

export default BgImgContainer
