import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

export default function RiseWelcomeComponent() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <View style={styles.container}>
      <View style={styles.image_and_text}>
        <Image
          source={require('../../assets/Rise-Logo.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Dollar investments that help you grow </Text>
      </View>
      <Text style={styles.other_text}>All rights reserved (c) {year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0898A0',
    height: height,
    width: width,
  },
  image_and_text: {
    alignItems: 'center',
  },
  image: {
    width: 123,
    height: 37.43,
    marginTop: 50,
    marginBottom: 50,
  },

  text: {
    fontSize: RFValue(18, height),
    color: '#FFFFFF',
  },
  other_text: {
    fontSize: RFValue(12, height),
    color: '#FFFFFF',
    marginTop: 350,
  },
});
