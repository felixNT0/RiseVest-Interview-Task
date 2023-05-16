/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import navigationString from '../../navigations/navigationString';
import AppButton from '../AppButton/AppButton';
import StepsProgressDot from './StepProgressDot/StepProgressDot';
import StepOne from './Steps/StepOne';
import StepThree from './Steps/StepThree';
import StepTwo from './Steps/StepTwo';

const steps = [
  {key: 1, component: StepOne},
  {key: 2, component: StepTwo},
  {key: 3, component: StepThree},
];

const AuthSteps = ({navigation}: any) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepColor, setStepColor] = useState('rgba(254, 113, 34, 1)');

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

  const navigateToSignIn = () => {
    navigation.navigate(navigationString.SIGN_IN);
  };

  const navigateToSignUp = () => {
    navigation.navigate(navigationString.SIGN_UP);
  };

  const renderNextButton = () => {
    const isLastStep = currentStepIndex === steps.length - 1;
    const label = isLastStep ? 'Finish' : 'Next';
    return (
      <TouchableOpacity
        onPress={handleNext}
        style={styles.stepButton}
        disabled={isLastStep}>
        <Text style={{color: stepColor, opacity: isLastStep ? 0.1 : 1}}>
          {label}
        </Text>
        <Icon
          name="arrow-forward-outline"
          size={30}
          color={stepColor}
          style={{opacity: isLastStep ? 0.1 : 1}}
        />
      </TouchableOpacity>
    );
  };

  const renderBackButton = () => {
    const isFirstStep = currentStepIndex === 0;

    return (
      <TouchableOpacity
        disabled={isFirstStep}
        onPress={handleBack}
        style={styles.stepButton}>
        <Icon
          name="arrow-back-outline"
          size={30}
          color={stepColor}
          style={{opacity: isFirstStep ? 0.1 : 1}}
        />
      </TouchableOpacity>
    );
  };

  const Components = steps[currentStepIndex]?.component;

  useEffect(() => {
    if (currentStepIndex === 0) {
      setStepColor('rgba(254, 113, 34, 1)');
    }
    if (currentStepIndex === 1) {
      setStepColor('rgba(184, 0, 116, 1)');
    }
    if (currentStepIndex === 2) {
      setStepColor('rgba(8, 152, 160, 1)');
    }
  }, [currentStepIndex]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Components>
          <StepsProgressDot
            currentStep={currentStepIndex}
            totalSteps={3}
            currentStepColor={stepColor}
          />
        </Components>

        <View style={styles.buttonContainer}>
          {renderBackButton()}
          {renderNextButton()}
        </View>
        {currentStepIndex === steps.length - 1 && (
          <View style={styles.auth_buttons}>
            <AppButton
              backgroundColor={'#0898A0'}
              label={'Sign Up'}
              labelColor={'#FFFFFF'}
              width={330}
              onPress={navigateToSignUp}
            />
            <AppButton
              backgroundColor={'rgba(113, 135, 156, 0.1)'}
              label={'Sign In'}
              labelColor={'#0898A0'}
              width={330}
              onPress={navigateToSignIn}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginVertical: 16,
    width: '100%',
    maxWidth: 400,
    marginTop: 130,
  },
  stepButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingVertical: 5,
    height: 50,
    paddingHorizontal: 15,
    gap: 10,
  },

  auth_buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginTop: 33,
    marginBottom: 30,
  },
});

export default AuthSteps;
