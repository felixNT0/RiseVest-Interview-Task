/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
// import {useMutation} from 'react-query';
// import {createPlan} from '../../queries/CreatePlanQueries/CreatePlanQueries';
import Toast from 'react-native-toast-message';
import {useMutation} from 'react-query';
import {useAppContext} from '../../contexts/AppContext';
import navigationString from '../../navigations/navigationString';
import {createPlan} from '../../queries/CreatePlanQueries/CreatePlanQueries';
import OnSuccess from '../OnSuccess/OnSuccess';
import CreatePlanFormThree from './CreatePlanFormThree';
import CreatePlanFormTwo from './CreatePlanFormTwo';
import CreatePlanFormOne from './CreatePlanForms';
import CreatePlanReview from './CreatePlanReview';
import StepOneToCreatePlan from './StepOneToCreatePlan';

const steps = [
  {key: 1, component: StepOneToCreatePlan},
  {key: 2, component: CreatePlanFormOne},
  {key: 3, component: CreatePlanFormTwo},
  {key: 4, component: CreatePlanFormThree},
  {key: 5, component: CreatePlanReview},
];

function CreatePlan({navigation}: any) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [submit, setSumit] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  const {currentUser} = useAppContext();

  const [values, setValues] = useState({
    plan_name: '',
    target_amount: 0,
    maturity_date: new Date(),
  });

  const showError = (error: any) => {
    Toast.show({
      type: 'error',
      text1: 'Create Plan Failed',
      text2: error,
    });
  };

  const {mutate, isSuccess} = useMutation(createPlan, {
    onSuccess: () => {
      setValues({
        plan_name: '',
        target_amount: 0,
        maturity_date: new Date(),
      });
      setShowSuccessScreen(true);
    },
    onError: (err: any) => {
      showError(err.message);
      setShowSuccessScreen(true);
    },
  });

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const Components = steps[currentStepIndex]?.component as any;

  useEffect(() => {
    if (submit) {
      mutate(values);
    }
  }, [mutate, submit, values]);

  useEffect(() => {
    if (submit) {
      setTimeout(() => {
        setSumit(false);
      }, 5000);
    }
  }, [submit]);

  return (
    <ScrollView>
      {!showSuccessScreen && (
        <View style={{marginHorizontal: 15}}>
          <Components
            handleNext={handleNext}
            handleBack={handleBack}
            navigation={navigation}
            currentStepIndex={currentStepIndex}
            setValues={setValues}
            values={values}
            setSumit={setSumit}
            isSuccess={isSuccess}
            setCurrentStepIndex={setCurrentStepIndex}
          />
        </View>
      )}
      <Toast />
      {showSuccessScreen && (
        <View style={{marginTop: 70}}>
          <OnSuccess
            HeaderText={'You just created your plan.'}
            BodyText={`Well done, ${currentUser?.username}`}
            buttonText="View plan"
            onPress={() => {
              navigation.navigate(navigationString.HOME_SCREEN);
            }}
          />
        </View>
      )}
    </ScrollView>
  );
}

export default CreatePlan;
