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

const AppOtpCodeKeyboard = ({onKeyPress}: any) => {
  const renderKeypadButton = (value: any) => (
    <TouchableOpacity
      key={value}
      style={styles.button}
      onPress={() => onKeyPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>{[1, 2, 3].map(renderKeypadButton)}</View>
      <View style={styles.row}>{[4, 5, 6].map(renderKeypadButton)}</View>
      <View style={styles.row}>{[7, 8, 9].map(renderKeypadButton)}</View>
      <View style={styles.row}>{['.', 0, 'del'].map(renderKeypadButton)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginHorizontal: 22,
    marginVertical: 12,
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: RFValue(20, height),
    fontWeight: 'bold',
    color: '#0898A0',
  },
});

export default AppOtpCodeKeyboard;
