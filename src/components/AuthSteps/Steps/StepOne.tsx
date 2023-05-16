import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');
const StepOne = ({children}: any) => {
  return (
    <View>
      <View style={styles.image_holder}>
        <Image
          source={require('../../../assets/Image-Step-1.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.progress_dot}>{children}</View>
      <Text style={styles.title}>Quality assets</Text>
      <Text style={styles.description}>
        Rise invests your money into the best dollar investments around the
        world.
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
    color: 'rgba(254, 113, 34, 1)',
    fontSize: RFValue(20, height),
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

export default StepOne;
