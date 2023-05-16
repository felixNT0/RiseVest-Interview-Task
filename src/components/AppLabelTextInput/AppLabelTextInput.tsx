import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');
const AppLabelTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  textContentTypeEmail,
  keyboardType,
  dontShowLabel,
}: any) => {
  const [borderWidth, setBorderWidth] = useState(1);

  return (
    <View style={styles.container}>
      {!dontShowLabel && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}
      <TextInput
        style={[styles.input, {borderWidth: borderWidth}]}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType ? keyboardType : 'default'}
        placeholderTextColor="gray"
        textContentType={textContentTypeEmail ? 'emailAddress' : 'name'}
        onBlur={() => {
          setBorderWidth(1);
        }}
        onFocus={() => {
          setBorderWidth(2);
        }}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'column',
  },
  labelContainer: {
    position: 'absolute',
    top: -7,
    left: 35,
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 4,
    borderRadius: 15,
  },
  label: {
    fontSize: RFValue(15, height),
    fontWeight: '500',
    color: '#0898A0',
  },
  input: {
    fontSize: RFValue(16, height),
    fontWeight: '400',
    color: 'black',
    borderColor: '#0898A0',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  errorText: {
    color: '#FF0000',
    marginBottom: 16,
  },
});

export default AppLabelTextInput;
