/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  totalSteps: number;
}

const Dot = ({totalSteps}: Props) => {
  const dots = [];
  for (let i = 0; i < totalSteps; i++) {
    const isActive = i === 0;
    dots.push(
      <View
        key={i}
        style={[
          styles.dot,
          isActive && {
            backgroundColor: '#0898A0',
            width: 12,
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
    gap: -7,
    marginTop: 15,
    marginBottom: 5,
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

export default Dot;
