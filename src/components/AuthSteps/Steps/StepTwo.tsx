import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

const StepTwo = ({children}: any) => {
  return (
    <View>
      <View style={styles.image_holder}>
        <Image
          source={require('../../../assets/Image-Step-2.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.progress_dot}>{children}</View>
      <Text style={styles.title}>Superior Selection</Text>
      <Text style={styles.description}>
        Our expert team and intelligent algorithms select assets that beat the
        markets.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginTop: 70,
  },

  progress_dot: {
    marginTop: 50,
  },
  image_holder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: RFValue(20, height),
    color: 'rgba(184, 0, 116, 1)',
    marginBottom: 20,
    marginTop: 30,
  },

  description: {
    fontSize: RFValue(12, height),
    color: '#222222',
  },
});

export default StepTwo;
