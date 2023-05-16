/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useMutation} from 'react-query';
import {useAppContext} from '../../contexts/AppContext';
import navigationString from '../../navigations/navigationString';
import {loginUser} from '../../queries/LoginQueries/LoginQueries';
import {setAuthToken} from '../../utils/localStorage';
import AppButton from '../AppButton/AppButton';
import AppLabelTextInput from '../AppLabelTextInput/AppLabelTextInput';
import AppPasswordInput from '../AppPasswordInput/AppPasswordInput';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

function Login({navigation}: any) {
  const [values, setValues] = useState({email_address: '', password: ''});

  const {updateCurrentUser} = useAppContext();

  const showError = (error: any) => {
    Toast.show({
      type: 'error',
      text1: 'Sign Up Failed',
      text2: error,
    });
  };

  const hideKeyboard = () => {
    Keyboard.dismiss(); // hide the keyboard
  };

  const {isLoading, mutate} = useMutation(loginUser, {
    onSuccess: (data: any) => {
      setAuthToken(data.data.token);

      navigation.navigate(navigationString.HOME_SCREEN);

      updateCurrentUser();
    },
    onError: (err: any) => {
      showError(err.message);
    },
  });

  const handleSubmit = () => {
    mutate(values);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.description}>
            Let’s get you logged in to get back to building your
            dollar-denominated investment portfolio.
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
              label="Sign In"
              disabled={!(values.email_address && values.password) || isLoading}
              onPress={handleSubmit}
              isLoading={isLoading}
            />

            <Text
              style={styles.forget_password_link}
              onPress={() => {
                navigation.navigate(navigationString.RESET_PASSWORD);
              }}>
              I forgot my password
            </Text>

            <Text style={styles.already_have_account}>
              Don't have an account?{' '}
              <Text
                style={{color: '#0898A0'}}
                onPress={() => {
                  navigation.navigate(navigationString.SIGN_UP);
                }}>
                Sign up
              </Text>
            </Text>
          </View>
        </View>
        <Toast />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
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
  already_have_account: {
    color: '#71879C',
    fontSize: RFValue(15, height),
    textAlign: 'center',
    marginTop: 170,
  },
});

export default Login;
