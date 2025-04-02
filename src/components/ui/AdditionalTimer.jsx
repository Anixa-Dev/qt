'use client';

import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '@/themes/default';
import CustomTypography from './CustomTypography';
import { setFormTimer } from '@/redux-saga/redux/utils';

const AddText = styled('div')({
  minWidth: '77px',
  fontWeight: 600,
  fontSize: '30px',
  color: colors.yellow,
});

const AdditionalTimer = ({ addTimer }) => {
  // Timer
  const { secondsLeft } = useSelector((state) => state.formTimer);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsLeft >= 0) {
        dispatch(setFormTimer({ secondsLeft: secondsLeft - 1 }));
      }

      if (secondsLeft <= 1) {
        clearInterval(timer);
        addTimer?.endTimerCallback();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, dispatch]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <CustomTypography
        value={formatTime(secondsLeft)}
        className={AddText}
      />
    </div>
  );
};

export default AdditionalTimer; 