import React, {useRef} from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

const OTPInputField = ({numberOfInputs, code, setCode}: any) => {
  const inputRefs = useRef<any>([]);

  const handleTextChange = (text: any, index: any) => {
    const newCode = code.split('');
    newCode[index] = text;
    setCode(newCode.join(''));

    if (text && index < numberOfInputs - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index: any) => {
    const newCode = code.split('');
    newCode[index] = '';
    setCode(newCode.join(''));

    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const inputs = [];

  for (let i = 0; i < numberOfInputs; i++) {
    inputs.push(
      <TextInput
        key={i}
        ref={ref => (inputRefs.current[i] = ref)}
        style={styles.input}
        maxLength={1}
        onChangeText={text => handleTextChange(text, i)}
        onKeyPress={({nativeEvent}) => {
          if (nativeEvent.key === 'Backspace') {
            handleBackspace(i);
          }
        }}
      />,
    );
  }

  return <View style={styles.container}>{inputs}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  input: {
    height: 48,
    width: 48,
    fontSize: RFValue(24, height),
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1.5,
    borderColor: '#0898A0',
    borderRadius: 8,
  },
});

export default OTPInputField;
