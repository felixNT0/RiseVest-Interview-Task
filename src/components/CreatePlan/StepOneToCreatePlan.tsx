/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import navigationString from '../../navigations/navigationString';
import AppButton from '../AppButton/AppButton';
import AppNavigationAndTextHeader from '../AppNavigationAndTextHeader/AppNavigationAndTextHeader';
import CreatePlanTips from './CreatePlanTips';

const {height} = Dimensions.get('window');

interface Props {
  handleNext: () => void;
}

function StepOneToCreatePlan({handleNext}: Props) {
  const navigation: any = useNavigation();

  const handleNavigate = () => {
    navigation.navigate(navigationString.HOME_SCREEN);
  };
  return (
    <View style={{marginBottom: 70}}>
      <AppNavigationAndTextHeader
        IconName="close"
        onPress={handleNavigate}
        title="Create a plan"
      />
      <Text
        style={{
          color: '#71879C',
          fontWeight: '500',
          fontSize: RFValue(17, height),
          textAlign: 'center',
          marginBottom: 30,
        }}>
        Reach your goals faster
      </Text>
      <View style={{display: 'flex', alignItems: 'center', marginBottom: 30}}>
        <Image
          source={require('../../assets/CreatPlan.png')}
          style={{
            width: 120,
            height: 120,
          }}
        />
      </View>
      <CreatePlanTips
        IconName="help"
        title="Give us a few details"
        description="Tell us what you want to achieve and we will help you get there"
      />
      <CreatePlanTips
        IconName="calendar-outline"
        title="Turn on auto-invest"
        description="The easiest way to get your investment working for you is to fund to periodically. "
      />
      <CreatePlanTips
        IconName="cog-outline"
        title="Modify as you progress"
        description="You are in charge. Make changes to your plan, from adding funds, funding source, adding money to your wallet and more."
      />
      <View style={{marginTop: 60}}>
        <AppButton label="Continue" onPress={handleNext} />
      </View>
    </View>
  );
}

export default StepOneToCreatePlan;
