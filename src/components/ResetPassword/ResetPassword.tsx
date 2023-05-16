/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import navigationString from '../../navigations/navigationString';
import AppOtpCodeKeyboard from '../AppOtpCodeKeyboard/AppOtpCodeKeyboard';
import CreatePlanHeader from '../CreatePlan/CreatePlanHeader';
import OTPInputField from '../OTPInputField/OTPInputField';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

const ResetPassword = ({navigation}: any) => {
  const [otpValue, setOtpValue] = useState('');

  const handleKeyPress = (value: any) => {
    if (value === 'del') {
      setOtpValue(otpValue.slice(0, -1));
    } else if (otpValue.length < 6) {
      setOtpValue(otpValue + value);
    }
  };

  useEffect(() => {
    Keyboard.dismiss();
  });

  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <View style={styles.container}>
        <CreatePlanHeader
          title="Create a 6-digit PIN"
          IconName="arrow-back-outline"
          onPress={() => {
            navigation.navigate(navigationString.SIGN_IN);
          }}
        />
        <Text style={styles.description}>
          You’ll use this PIN to sign in and confirm transactions
        </Text>
        <View style={{marginBottom: 50}}>
          <OTPInputField
            numberOfInputs={6}
            code={otpValue}
            setCode={setOtpValue}
          />
        </View>
        <AppOtpCodeKeyboard onKeyPress={handleKeyPress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
  },

  all_input: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginTop: 50,
  },

  title: {
    fontSize: RFValue(25, height),
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 32,
  },

  description: {
    color: '#71879C',
    fontSize: RFValue(15, height),
    marginBottom: 30,
  },

  input: {
    height: 40,
    width: '80%',
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 16,
  },

  forget_password_link: {
    color: '#0898A0',
    marginTop: 30,
    fontSize: RFValue(15, height),
    textAlign: 'center',
  },
});

export default ResetPassword;
