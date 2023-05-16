import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

const StepThree = ({children}: any) => {
  return (
    <View>
      <View style={styles.image_holder}>
        <Image
          source={require('../../../assets/Image-Step-3.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.progress_dot}>{children}</View>
      <Text style={styles.title}>Better Performance</Text>
      <Text style={styles.description}>
        You earn more returns, achieve more of your financial goals and protect
        your money from devaluation.
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

  title: {
    fontSize: RFValue(20, height),
    color: 'rgba(8, 152, 160, 1)',
    marginBottom: 20,
    marginTop: 30,
  },
  image_holder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: RFValue(12, height),
    color: '#222222',
  },
});

export default StepThree;
