import React from 'react';
import AllStepContainer from './AllStepContainer';

const StepOne = ({children}: any) => {
  return (
    <AllStepContainer
      imageUrlNum={1}
      title={'Quality assets'}
      color={'rgba(254, 113, 34, 1)'}
      description={
        'Rise invests your money into the best dollar investments around the world'
      }
      dotProgress={children}
    />
  );
};

export default StepOne;
