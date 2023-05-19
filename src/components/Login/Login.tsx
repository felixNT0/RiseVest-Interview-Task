/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useMutation} from 'react-query';
import {useAppContext} from '../../contexts/AppContext';
import navigationString from '../../navigations/navigationString';
import {loginUser} from '../../queries/LoginQueries/LoginQueries';
import {styles} from '../../styles/LoginStyles/LoginStyles';
import {setAuthToken} from '../../utils/localStorage';
import AppButton from '../AppButton/AppButton';
import AppLabelTextInput from '../AppLabelTextInput/AppLabelTextInput';
import AppPasswordInput from '../AppPasswordInput/AppPasswordInput';

type LoginUserValueType = {email_address: string; password: string};

const defaultLoginUserValues = {email_address: '', password: ''};

function Login() {
  const [values, setValues] = useState<LoginUserValueType>(
    defaultLoginUserValues,
  );

  const navigation: any = useNavigation();

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
      setValues(defaultLoginUserValues);
    },
    onError: (err: any) => {
      showError(err.message);
      setValues(defaultLoginUserValues);
    },
  });

  const handleSubmit = () => {
    mutate(values);
  };

  const [screenDimensions, setScreenDimensions] = useState<any>(
    Dimensions.get('window'),
  );

  useEffect(() => {
    const onChange = ({window}: any) => {
      setScreenDimensions(window);
    };

    Dimensions?.addEventListener('change', onChange);
  }, [screenDimensions]);

  const {width} = screenDimensions;

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <ScrollView>
        <View
          style={[
            styles.container,
            {
              marginHorizontal: width >= 500 ? 100 : 20,
              marginBottom: width >= 500 ? 50 : 0,
            },
          ]}>
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

export default Login;
