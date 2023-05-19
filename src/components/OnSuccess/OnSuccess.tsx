/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import AppButton from '../AppButton/AppButton';

interface Props {
  HeaderText: string;
  BodyText: string;
  onPress: () => void;
  buttonText: string;
}

const OnSuccess = ({HeaderText, BodyText, onPress, buttonText}: Props) => {
  const [screenDimensions, setScreenDimensions] = useState<any>(
    Dimensions.get('window'),
  );

  useEffect(() => {
    const onChange = ({window}: any) => {
      setScreenDimensions(window);
    };

    Dimensions?.addEventListener('change', onChange);
  }, [screenDimensions]);

  return (
    <View
      style={[
        styles.container,
        {
          marginHorizontal: screenDimensions?.width >= 500 ? 150 : 15,
          marginBottom: screenDimensions?.width >= 500 ? 70 : 0,
        },
      ]}>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 17,
    marginTop: 30,
    color: '#222222',
  },
  description: {
    fontSize: 16,
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
