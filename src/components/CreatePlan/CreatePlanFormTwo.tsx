/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import AppButton from '../AppButton/AppButton';
import AppLabelTextInput from '../AppLabelTextInput/AppLabelTextInput';
import CreatePlanHeader from './CreatePlanHeader';
import CreatePlanProgressBar from './CreatePlanProgressBar';

const {height} = Dimensions.get('window');

function CreatePlanFormTwo({
  handleBack,
  handleNext,
  currentStepIndex,
  setValues,
  values,
}: any) {
  return (
    <>
      <CreatePlanHeader
        IconName="arrow-back-outline"
        onPress={handleBack}
        title="Target amount"
      />
      <CreatePlanProgressBar progress={currentStepIndex} />
      <Text
        style={{
          fontWeight: '700',
          fontSize: RFValue(25, height),
          color: 'black',
          marginTop: 20,
        }}>
        How much do need?
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
          marginVertical: 20,
        }}>
        <AppLabelTextInput
          dontShowLabel={true}
          placeholder="₦840,000.00"
          keyboardType="numeric"
          values={values.target_amount}
          onChangeText={(e: any) =>
            setValues((prev: any) => ({...prev, target_amount: e}))
          }
        />
        <AppButton
          label="Continue"
          onPress={handleNext}
          disabled={!(values.target_amount >= 10000)}
        />
      </View>
    </>
  );
}

export default CreatePlanFormTwo;
