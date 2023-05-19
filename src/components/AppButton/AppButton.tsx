/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {AppButtonType} from '../../types/AppButtonType/AppButtonType';

const AppButton = ({
  label,
  onPress,
  backgroundColor = '#0898A0',
  labelColor = '#FFFFFF',
  disabled,
  isLoading,
}: AppButtonType) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppButton;
