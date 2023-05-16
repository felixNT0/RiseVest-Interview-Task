import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import AppButton from '../AppButton/AppButton';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

const OnSuccess = ({HeaderText, BodyText, onPress, buttonText}: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Success.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{HeaderText}</Text>
      <Text style={styles.description}>{BodyText}</Text>

      <View style={styles.bottomButton}>
        <AppButton label={buttonText} width={330} onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  bottomButton: {
    marginTop: 300,
  },
  title: {
    fontSize: RFValue(20, height),
    fontWeight: 'bold',
    marginBottom: 17,
    marginTop: 30,
    color: '#222222',
  },
  description: {
    fontSize: RFValue(16, height),
    color: '#71879C',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 16,
    width: '100%',
    maxWidth: 400,
  },
});

export default OnSuccess;
