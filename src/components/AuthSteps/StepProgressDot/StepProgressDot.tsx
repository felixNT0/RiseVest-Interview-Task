import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  currentStep: number;
  totalSteps: number;
  currentStepColor: string;
}

const StepsProgressDot = ({
  currentStep,
  totalSteps,
  currentStepColor,
}: Props) => {
  const dots = [];
  for (let i = 0; i < totalSteps; i++) {
    const isActive = i === currentStep;
    dots.push(
      <View
        key={i}
        style={[
          styles.dot,
          isActive && {
            backgroundColor: currentStepColor,
          },
        ]}
      />,
    );
  }
  return <View style={styles.container}>{dots}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'black',
  },
});

export default StepsProgressDot;
