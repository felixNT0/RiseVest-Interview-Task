import React from 'react';
import AllStepContainer from './AllStepContainer';

const StepTwo = ({children}: any) => {
  return (
    <AllStepContainer
      imageUrlNum={2}
      title={'Superior Selection'}
      color={'rgba(184, 0, 116, 1)'}
      description={
        'Our expert team and intelligent algorithms select assets that beat the markets.'
      }
      dotProgress={children}
    />
  );
};

export default StepTwo;
