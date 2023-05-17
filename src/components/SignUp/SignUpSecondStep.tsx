/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../styles/SignUpSyles/SingUpStyles';
import AppButton from '../AppButton/AppButton';
import AppLabelTextInput from '../AppLabelTextInput/AppLabelTextInput';
import AppNavigationButton from '../AppNavigationButton/AppNavigationButton';
import {SignUpUserValues} from './SignUp';

interface Props {
  values: SignUpUserValues;
  setValues: (value: any) => void;
  openDate: any | string;
  setNext: (value: string) => void;
  dateOfBirth: any | string;
  showDateValue: boolean;
  openDateModal: boolean;
  handleSubmit: () => void;
  isLoading: boolean;
  setOpenDateModal: (value: boolean) => void;
  setShowDateValue: (value: boolean) => void;
}

function SignUpSecondStep({
  values,
  setValues,
  openDate,
  setNext,
  dateOfBirth,
  showDateValue,
  openDateModal,
  handleSubmit,
  isLoading,
  setOpenDateModal,
  setShowDateValue,
}: Props) {
  return (
    <>
      <View style={{marginTop: -30, marginBottom: 10}}>
        <AppNavigationButton
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
            containerStyle={[styles.input_container, {borderWidth: 1}]}
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
  );
}

export default SignUpSecondStep;
