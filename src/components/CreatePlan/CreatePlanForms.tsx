/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import AppButton from '../AppButton/AppButton';
import AppLabelTextInput from '../AppLabelTextInput/AppLabelTextInput';
import CreatePlanHeader from './CreatePlanHeader';
import CreatePlanProgressBar from './CreatePlanProgressBar';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

function CreatePlanFormOne({
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
        title="Goal name"
      />
      <CreatePlanProgressBar progress={currentStepIndex} />
      <Text
        style={{
          fontWeight: '700',
          fontSize: RFValue(25, height),
          color: 'black',
          marginTop: 20,
        }}>
        What are you saving for
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
          placeholder="Investments"
          values={values.plan_name}
          onChangeText={(e: any) =>
            setValues((prev: any) => ({...prev, plan_name: e}))
          }
        />
        <AppButton
          label="Continue"
          onPress={handleNext}
          disabled={!values.plan_name}
        />
      </View>
    </>
  );
}

export default CreatePlanFormOne;
