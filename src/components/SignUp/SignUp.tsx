/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import PhoneInput from 'react-native-phone-number-input';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMutation} from 'react-query';
import {useAppContext} from '../../contexts/AppContext';
import navigationString from '../../navigations/navigationString';
import {signUpUser} from '../../queries/SignUpQueries/SignUpQueries';
import {setAuthToken} from '../../utils/localStorage';
import AppButton from '../AppButton/AppButton';
import AppCheckBoxAndText from '../AppCheckBoxAndText/AppCheckBoxAndText';
import AppLabelTextInput from '../AppLabelTextInput/AppLabelTextInput';
import AppPasswordInput from '../AppPasswordInput/AppPasswordInput';
import NavigationButton from '../CreatePlan/NavigationButton';
import OnSuccess from '../OnSuccess/OnSuccess';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

function SignUp({navigation}: any) {
  const [checked, setChecked] = useState({
    length: false,
    upperCase: false,
    unique: false,
  });

  const [next, setNext] = useState('First_Screen');

  const {updateCurrentUser} = useAppContext();

  const [values, setValues] = useState({
    email_address: '',
    password: '',
    first_name: '',
    last_name: '',
    date_of_birth: new Date(),
    phone_number: '',
    username: '',
  });

  const [openDateModal, setOpenDateModal] = useState(false);
  const [showDateValue, setShowDateValue] = useState(false);

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
    },
    onError: (err: any) => {
      setNext('First_Screen');

      showError(err.message);
    },
  });

  const handleSubmit = () => {
    mutate(values);
  };

  const openDate = () => setOpenDateModal(true);

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
        <View style={styles.container}>
          {next === 'First_Screen' && (
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
                    !(
                      values.email_address &&
                      values.password &&
                      validateInput()
                    )
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
          )}
          <>
            {next === 'Second_Screen' && (
              <>
                <View style={{marginTop: -30, marginBottom: 10}}>
                  <NavigationButton
                    IconName="arrow-back-outline"
                    onPress={() => {
                      setNext('First_Screen');
                    }}
                  />
                </View>

                <Text style={styles.title}>Tell Us More About You</Text>
                <Text style={styles.description}>
                  Please use your name as it appears on your ID.
                </Text>
                <View style={styles.all_input}>
                  <AppLabelTextInput
                    label="Legal First Name"
                    placeholder="Legal First Name"
                    value={values.first_name}
                    onChangeText={(e: any) =>
                      setValues((prev: any) => ({...prev, first_name: e}))
                    }
                  />
                  <AppLabelTextInput
                    label="Legal Last Name"
                    placeholder="Legal Last Name"
                    value={values.last_name}
                    onChangeText={(e: any) =>
                      setValues((prev: any) => ({...prev, last_name: e}))
                    }
                  />
                  <AppLabelTextInput
                    label="Nick name"
                    placeholder="Nick name"
                    value={values.username}
                    onChangeText={(e: any) =>
                      setValues((prev: any) => ({...prev, username: e}))
                    }
                  />
                  <View style={styles.phone_number_container}>
                    <View style={styles.labelContainer}>
                      <Text style={styles.label}>Phone Number</Text>
                    </View>

                    <PhoneInput
                      defaultValue={values.phone_number}
                      defaultCode="NG"
                      containerStyle={[
                        styles.input_container,
                        {borderWidth: 1},
                      ]}
                      textInputStyle={{
                        marginTop: -7,
                        bottom: -4,
                        overflow: 'hidden',
                      }}
                      // layout="first"
                      onChangeText={text => {
                        setValues((prev: any) => ({
                          ...prev,
                          phone_number: text,
                        }));
                      }}
                      onChangeFormattedText={(text: any) => {
                        setValues((prev: any) => ({
                          ...prev,
                          phone_number: text,
                        }));
                      }}
                    />
                  </View>
                  <View onTouchStart={openDate}>
                    <AppLabelTextInput
                      label="Date of Birth"
                      placeholder="Choose date"
                      value={showDateValue ? dateOfBirth : 'Choose date'}
                    />

                    <Icon
                      style={styles.calenderIcon}
                      name="calendar-outline"
                      size={23}
                      color={'rgba(8, 152, 160, 1)'}
                    />
                  </View>
                  <DatePicker
                    modal
                    open={openDateModal}
                    onConfirm={(date: any) => {
                      setValues((prev: any) => ({
                        ...prev,
                        date_of_birth: date,
                      }));
                      setShowDateValue(true);
                      setOpenDateModal(false);
                    }}
                    onCancel={() => {
                      setOpenDateModal(false);
                    }}
                    mode="date"
                    date={values.date_of_birth}
                    onDateChange={date =>
                      setValues((prev: any) => ({
                        ...prev,
                        date_of_birth: date,
                      }))
                    }
                  />
                  <AppButton
                    label="Sign Up"
                    onPress={handleSubmit}
                    isLoading={isLoading}
                    disabled={
                      !(
                        values.first_name &&
                        values.date_of_birth &&
                        values.last_name &&
                        values.username &&
                        values.phone_number
                      ) || isLoading
                    }
                  />

                  <View>
                    <Text style={styles.dont_have_account}>
                      By clicking Continue, you agree to our
                    </Text>
                    <View style={styles.terms_and_condition}>
                      <Text style={{color: '#0898A0'}}>Terms of Service</Text>
                      <Text style={{color: 'black'}}>and</Text>
                      <Text style={{color: '#0898A0'}}>Privacy Policy.</Text>
                    </View>
                  </View>
                </View>
              </>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 15,
  },
  all_input: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 30,
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

  already_have_account: {
    color: '#71879C',
    fontSize: RFValue(15, height),
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 7,
  },

  dont_have_account: {
    color: '#71879C',
    fontSize: RFValue(15, height),
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 7,
  },

  terms_and_condition: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 7,
    marginBottom: 10,
  },

  phone_number_container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
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
  input_container: {
    fontSize: RFValue(16, height),
    width: '100%',
    height: 65,
    fontWeight: '400',
    color: '#000000',
    borderColor: '#0898A0',
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  calenderIcon: {
    marginLeft: 8,
    position: 'absolute',
    top: 18,
    right: 20,
  },
});

export default SignUp;
