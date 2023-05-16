import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

const AppNumberKeyboard = ({onButtonPress}: any) => {
  const buttons = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'clear',
    '0',
    'back',
  ];

  const handleButtonPress = (button: any) => {
    onButtonPress(button);
  };

  const renderButton = (button: any) => {
    switch (button) {
      case 'clear':
        return <Text style={styles.buttonText}>Clear</Text>;
      case 'back':
        return <Text style={styles.buttonText}>Back</Text>;
      default:
        return <Text style={styles.buttonText}>{button}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {buttons.map(button => (
        <TouchableOpacity
          key={button}
          style={[styles.button, button === '0' && styles.zeroButton]}
          onPress={() => handleButtonPress(button)}>
          {renderButton(button)}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // marginTop: 20,
  },
  button: {
    backgroundColor: '#0898A0',
    borderRadius: 5,
    margin: 10,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zeroButton: {
    width: 150,
  },
  buttonText: {
    fontSize: RFValue(24, height),
    fontWeight: 'bold',
  },
});

export default AppNumberKeyboard;
