/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import navigationString from '../../navigations/navigationString';
import {styles} from '../../styles/SignUpSyles/SingUpStyles';
import AppButton from '../AppButton/AppButton';
import AppCheckBoxAndText from '../AppCheckBoxAndText/AppCheckBoxAndText';
import AppLabelTextInput from '../AppLabelTextInput/AppLabelTextInput';
import AppPasswordInput from '../AppPasswordInput/AppPasswordInput';
import {SignUpUserValues, SignUpValidator} from './SignUp';

interface Props {
  values: SignUpUserValues;
  setValues: (value: any) => void;
  validateInput: () => void;
  setNext: (value: string) => void;
  checked: SignUpValidator;
}

function SignUpFirstStep({
  values,
  setValues,
  validateInput,
  setNext,
  checked,
}: Props) {
  const navigation: any = useNavigation();

  return (
    <>
      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.description}>
        Start building your dollar-denominated investment portfolio
      </Text>
      <View style={styles.all_input}>
        <AppLabelTextInput
          label="Email"
          placeholder="Email"
          value={values.email_address}
          textContentTypeEmail={true}
          onChangeText={(e: any) =>
            setValues((prev: any) => ({...prev, email_address: e}))
          }
        />

        <AppPasswordInput
          label="Password"
          placeholder="Password"
          value={values.password}
          onChangeText={(e: any) =>
            setValues((prev: any) => ({...prev, password: e}))
          }
        />

        <AppButton
          disabled={
            !(values.email_address && values.password && validateInput())
          }
          label="Continue"
          onPress={() => setNext('Second_Screen')}
        />

        <View>
          <AppCheckBoxAndText
            text="Minimum of 8 characters"
            checked={checked.length}
          />
          <AppCheckBoxAndText
            text="One UPPERCASE character"
            checked={checked.upperCase}
          />
          <AppCheckBoxAndText
            text="One unique character (e.g: !@#$%^&*?)"
            checked={checked.unique}
          />
        </View>

        <Text style={styles.already_have_account}>
          Already have an account?{' '}
          <Text
            style={{color: '#0898A0'}}
            onPress={() => {
              navigation.navigate(navigationString.SIGN_IN);
            }}>
            Sign In
          </Text>
        </Text>
      </View>
    </>
  );
}

export default SignUpFirstStep;
