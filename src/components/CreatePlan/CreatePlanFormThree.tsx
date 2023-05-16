/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import AppButton from '../AppButton/AppButton';
import AppLabelTextInput from '../AppLabelTextInput/AppLabelTextInput';
import CreatePlanHeader from './CreatePlanHeader';
import CreatePlanProgressBar from './CreatePlanProgressBar';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

function CreatePlanFormThree({
  handleBack,
  handleNext,
  currentStepIndex,
  setValues,
  values,
}: any) {
  const [openDateModal, setOpenDateModal] = useState(false);
  const [showDateValue, setShowDateValue] = useState(false);

  const year = values.maturity_date.getFullYear();
  const month = values.maturity_date.getMonth() + 1; // add 1 because getMonth() returns a zero-based index
  const day = values.maturity_date.getDate();

  const creat_plan_target_date = `${year}-${month}-${day}`;

  const selectedDate = new Date(creat_plan_target_date);

  const openDate = () => setOpenDateModal(true);

  return (
    <>
      <>
        <CreatePlanHeader
          IconName="arrow-back-outline"
          onPress={handleBack}
          title="Target date"
        />
        <CreatePlanProgressBar progress={currentStepIndex} />
        <Text
          style={{
            fontWeight: '700',
            fontSize: RFValue(25, height),
            color: 'black',
            marginTop: 20,
          }}>
          When do you want to withdraw?
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
            marginVertical: 20,
          }}>
          <View onTouchStart={openDate}>
            <AppLabelTextInput
              dontShowLabel={true}
              placeholder="Choose date"
              value={showDateValue ? creat_plan_target_date : 'Choose date'}
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
              setValues((prev: any) => ({...prev, maturity_date: date}));
              setShowDateValue(true);
              setOpenDateModal(false);
            }}
            onCancel={() => {
              setOpenDateModal(false);
            }}
            mode="date"
            date={values.maturity_date}
            onDateChange={date =>
              setValues((prev: any) => ({
                ...prev,
                maturity_date: date,
              }))
            }
          />

          <AppButton
            label="Continue"
            onPress={handleNext}
            disabled={
              !showDateValue &&
              selectedDate.getTime() > values.maturity_date.getTime()
            }
          />
        </View>
      </>
    </>
  );
}
const styles = StyleSheet.create({
  calenderIcon: {
    marginLeft: 8,
    position: 'absolute',
    top: 18,
    right: 20,
  },
});

export default CreatePlanFormThree;
