/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useMutation} from 'react-query';
import {useAppContext} from '../../contexts/AppContext';
import navigationString from '../../navigations/navigationString';
import {signUpUser} from '../../queries/SignUpQueries/SignUpQueries';
import {styles} from '../../styles/SignUpSyles/SingUpStyles';
import {setAuthToken} from '../../utils/localStorage';
import OnSuccess from '../OnSuccess/OnSuccess';
import SignUpFirstStep from './SignUpFirstStep';
import SignUpSecondStep from './SignUpSecondStep';

export interface SignUpValidator {
  length: boolean;
  upperCase: boolean;
  unique: boolean;
}

export interface SignUpUserValues {
  email_address: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string | any;
  phone_number: string;
  username: string;
}

export const defaultUserInputValues = {
  email_address: '',
  password: '',
  first_name: '',
  last_name: '',
  date_of_birth: new Date(),
  phone_number: '',
  username: '',
};

export default function SignUp() {
  const navigation: any = useNavigation();

  const [checked, setChecked] = useState<SignUpValidator>({
    length: false,
    upperCase: false,
    unique: false,
  });

  const [next, setNext] = useState<string>('First_Screen');

  const {updateCurrentUser} = useAppContext();

  const [values, setValues] = useState<SignUpUserValues>(
    defaultUserInputValues,
  );

  const [openDateModal, setOpenDateModal] = useState<boolean>(false);
  const [showDateValue, setShowDateValue] = useState<boolean>(false);

  const validateInput = () => {
    const length = /([A-Za-z\\d@$!%*?&]{8,})/.test(values.password);
    const uppercaseRegex = /(?=.*[A-Z])/.test(values.password);
    const uniqueCharRegex = /(?=.*[@$!%*?&])/.test(values.password);

    if (length && uniqueCharRegex && uppercaseRegex) {
      return true;
    }
  };

  const hideKeyboard = () => {
    Keyboard.dismiss(); // hide the keyboard
  };

  const year = values.date_of_birth.getFullYear();
  const month = values.date_of_birth.getMonth() + 1; // add 1 because getMonth() returns a zero-based index
  const day = values.date_of_birth.getDate();

  const dateOfBirth = `${year}-${month}-${day}`;

  const showError = (error: any) => {
    Toast.show({
      type: 'error',
      text1: 'Sign Up Failed',
      text2: error,
    });
  };

  const {isLoading, isSuccess, mutate} = useMutation(signUpUser, {
    onSuccess: (data: any) => {
      setAuthToken(data.data.token);

      setNext('Success_Screen');

      updateCurrentUser();
      setValues(defaultUserInputValues);
    },
    onError: (err: any) => {
      setNext('First_Screen');

      showError(err.message);
      setValues(defaultUserInputValues);
    },
  });

  const handleSubmit = () => {
    mutate(values);
  };

  const openDate = () => setOpenDateModal(true);

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

  useEffect(() => {
    if (values.password) {
      const length = /([A-Za-z\\d@$!%*?&]{8,})/.test(values.password);
      const uppercaseRegex = /(?=.*[A-Z])/.test(values.password);
      const uniqueCharRegex = /(?=.*[@$!%*?&])/.test(values.password);

      if (length) {
        setChecked((prev: any) => ({...prev, length: true}));
      }
      if (!length) {
        setChecked((prev: any) => ({...prev, length: false}));
      }
      if (uppercaseRegex) {
        setChecked((prev: any) => ({...prev, upperCase: true}));
      }
      if (!uppercaseRegex) {
        setChecked((prev: any) => ({...prev, upperCase: false}));
      }
      if (uniqueCharRegex) {
        setChecked((prev: any) => ({...prev, unique: true}));
      }
      if (!uniqueCharRegex) {
        setChecked((prev: any) => ({...prev, unique: false}));
      }
    }
  }, [values.password, checked.length, checked.unique, checked.upperCase]);

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
          {next === 'First_Screen' && (
            <SignUpFirstStep
              values={values}
              setValues={setValues}
              validateInput={validateInput}
              setNext={setNext}
              checked={checked}
            />
          )}
          <>
            {next === 'Second_Screen' && (
              <SignUpSecondStep
                values={values}
                setValues={setValues}
                openDate={openDate}
                setNext={setNext}
                dateOfBirth={dateOfBirth}
                showDateValue={showDateValue}
                openDateModal={openDateModal}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                setOpenDateModal={setOpenDateModal}
                setShowDateValue={setShowDateValue}
              />
            )}
          </>
          {isSuccess && next === 'Success_Screen' && (
            <OnSuccess
              HeaderText={'You just created your Rise account'}
              BodyText="Welcome to Rise, let’s take you home"
              buttonText="Okay"
              onPress={() => {
                navigation.navigate(navigationString.HOME_SCREEN);
              }}
            />
          )}
        </View>
        <Toast />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
