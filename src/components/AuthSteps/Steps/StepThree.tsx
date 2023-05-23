import React from 'react';
import AllStepContainer from './AllStepContainer';

const StepThree = ({children}: any) => {
  return (
    <AllStepContainer
      imageUrlNum={3}
      title={'Better Performance'}
      color={'rgba(8, 152, 160, 1)'}
      description={
        'You earn more returns, achieve more of your financial goals and protect your money from devaluation.'
      }
      dotProgress={children}
    />
  );
};

export default StepThree;
