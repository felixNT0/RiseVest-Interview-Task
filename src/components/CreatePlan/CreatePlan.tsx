/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useMutation} from 'react-query';
import {useAppContext} from '../../contexts/AppContext';
import navigationString from '../../navigations/navigationString';
import {createPlan} from '../../queries/CreatePlanQueries/CreatePlanQueries';
import BottomNavigationBar from '../BottomTabs/BottomTabs';
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

export type defaultCreatePlanUserInputType = {
  plan_name: string;
  target_amount: number;
  maturity_date: string | any;
};

export const defaultCreatePlanUserInput = {
  plan_name: '',
  target_amount: 0,
  maturity_date: new Date(),
};

function CreatePlan() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [submit, setSumit] = useState<boolean>(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState<boolean>(false);

  const {currentUser} = useAppContext();

  const navigation: any = useNavigation();

  const [values, setValues] = useState<defaultCreatePlanUserInputType>(
    defaultCreatePlanUserInput,
  );

  const [planId, setPlanId] = useState<string>('');

  const showError = (error: any) => {
    Toast.show({
      type: 'error',
      text1: 'Create Plan Failed',
      text2: error,
    });
  };

  const {mutate, isSuccess} = useMutation(createPlan, {
    onSuccess: (res: any) => {
      setPlanId(res?.data?.id);
      setShowSuccessScreen(true);
      setValues({
        plan_name: '',
        target_amount: 0,
        maturity_date: new Date(),
      });
    },
    onError: (err: any) => {
      showError(err.message);
      navigation.navigate(navigationString.ERROR_SCREEN, {error: err.message});
      setValues({
        plan_name: '',
        target_amount: 0,
        maturity_date: new Date(),
      });
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

  const flatListData = [{id: '1', title: 'Single Item'}]; // Array with a single item

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

  const renderItem = () => (
    <View
      style={{
        marginHorizontal: width >= 500 ? 100 : 15,
        marginBottom: width >= 500 ? 100 : 0,
      }}>
      <Components
        handleNext={handleNext}
        handleBack={handleBack}
        currentStepIndex={currentStepIndex}
        setValues={setValues}
        values={values}
        setSumit={setSumit}
        isSuccess={isSuccess}
        setCurrentStepIndex={setCurrentStepIndex}
      />
    </View>
  );

  useEffect(() => {
    if (submit && values?.plan_name) {
      mutate(values);
    }
  }, [submit, values?.plan_name]);

  useEffect(() => {
    if (submit) {
      setTimeout(() => {
        setSumit(false);
      }, 1000);
    }
  }, [submit]);

  return (
    <>
      {!showSuccessScreen && (
        <>
          <View style={{flex: 1}}>
            <FlatList
              data={flatListData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <BottomNavigationBar />
          </View>
        </>
      )}
      <Toast />
      {showSuccessScreen && (
        <View style={{marginTop: 70}}>
          <OnSuccess
            HeaderText={'You just created your plan.'}
            BodyText={`Well done, ${currentUser?.username}`}
            buttonText="View plan"
            onPress={() => {
              navigation.navigate(navigationString.VIEW_SPECIFIC_PLAN, {
                id: planId,
              });
            }}
          />
        </View>
      )}
    </>
  );
}

export default CreatePlan;
