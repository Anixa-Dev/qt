/* eslint-disable complexity */
import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { isFormItemVisible } from '../../utils/stepFormHelper';
import BgImgContainer from '../layout/BgImgContainer';
import StepContainer from './StepButtonAndTextContainer';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  pageGrid: {
    minHeight: (props) => props.customMinHeight,
    backdropFilter: (props) => (props.backBlur ? `blur(${props.backBlur})` : ''),
  },
}));

const ResponsiveIndex = ({
  handleCancel = '', handleBack = '', totalSteps = '5', activeStep, value, mobileValue, imgType = 'img2', clip = false,
  children, isEmailVerification = false, onLogout = '', userDetails = '', isStepForm = true, clipOrientation = 'left',
  customMinHeight = '100vh', disableBack = false, backBlur = '', direction = 'row', isLastStep, showNextButtonOnTop,
  leftItem, rightItem, fullItem, formType,
}) => {
  const classes = useStyles({ customMinHeight, backBlur });
  const formik = useFormikContext();
  const [isMobile, setIsMobile] = useState(false);

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


  let leftItemVisible = false;
  let rightItemVisible = false;
  let fullItemVisible = false;
  if (formik && formik.values) {
    const { values } = formik;
    if (leftItem) { leftItemVisible = isFormItemVisible({ values, itemId: leftItem?.id }); }
    if (rightItem) { rightItemVisible = isFormItemVisible({ values, itemId: rightItem?.id }); }
    if (fullItem) { fullItemVisible = isFormItemVisible({ values, itemId: fullItem?.id }); }
  }

  let newImgType = imgType;
  if (fullItemVisible || (leftItemVisible && rightItemVisible)) newImgType = '';

  return (
    <BgImgContainer clipOrientation={clipOrientation} imgType={newImgType} clip={clip} backBlur={backBlur}>
      {isStepForm && (
        <StepContainer
          handleCancel={handleCancel}
          formType={formType}
          handleBack={handleBack}
          activeStep={activeStep}
          value={isMobile ? mobileValue : value}
          totalSteps={totalSteps}
          isMobile={isMobile}
          isEmailVerification={isEmailVerification}
          onLogout={onLogout}
          userDetails={userDetails}
          disableBack={disableBack}
          isLastStep={isLastStep}
          showNextButtonOnTop={showNextButtonOnTop}
        />
      )}
      {/* <Grid container direction={direction} className={classes.pageGrid}>
        {children}
      </Grid> */}
      <Grid direction={direction} className={classes.pageGrid}>
        {children}
      </Grid>
    </BgImgContainer>
  );
};

export default ResponsiveIndex;
