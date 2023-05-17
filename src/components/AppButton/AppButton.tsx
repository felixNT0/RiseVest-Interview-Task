/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import {AppButtonType} from '../../types/AppButtonType/AppButtonType';

const {height} = Dimensions.get('window');

const AppButton = ({
  label,
  onPress,
  backgroundColor = '#0898A0',
  labelColor = '#FFFFFF',
  disabled,
  width,
  isLoading,
}: AppButtonType) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          width: width,
          opacity: disabled ? 0.3 : 1,
        },
      ]}
      disabled={disabled}
      onPress={onPress}>
      <View style={styles.button_and_loader}>
        <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
        {isLoading && <ActivityIndicator size="small" color={labelColor} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  button_and_loader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: RFValue(16, height),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppButton;
