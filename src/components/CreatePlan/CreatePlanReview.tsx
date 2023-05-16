/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import {
  GET_PLANS_PROJECTION,
  getPlanProjection,
} from '../../queries/GetPlanProjection/GetPlanProjection';
import AppButton from '../AppButton/AppButton';
import AppLoader from '../AppLoader/AppLoader';
import {CreatePlanChartReview} from './CreatePlanChartReview';
import CreatePlanHeader from './CreatePlanHeader';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

function CreatePlanReview({
  values,
  setCurrentStepIndex,
  handleBack,
  setSumit,
}: any) {
  const year = values.maturity_date.getFullYear();
  const day = values.maturity_date.getDate();
  const month = values.maturity_date.toLocaleString('default', {
    month: 'long',
  });

  const target_date = `by ${day} ${month} ${year}`;

  const currentDate = new Date();

  const startYear = currentDate.getFullYear();
  const startMonth = currentDate.getMonth();
  const endYear = values.maturity_date.getFullYear();
  const endMonth = values.maturity_date.getMonth();

  const numberOfMonths =
    (endYear - startYear) * 12 + (endMonth - startMonth) + 1;

  const monthlyInvestment = values.target_amount / numberOfMonths;

  const showError = (error: any) => {
    Toast.show({
      type: 'error',
      text1: 'Create Plan Failed',
      text2: error,
    });
  };

  const {isLoading} = useQuery(
    [GET_PLANS_PROJECTION],
    () =>
      getPlanProjection({
        monthly_investment: monthlyInvestment,
        date: values.maturity_date,
        target_amount: values.target_amount,
      }),
    {
      onError(err: any) {
        showError(err?.message);
      },
    },
  );

  if (isLoading) {
    return <AppLoader />;
  }
  return (
    <View style={styles.container}>
      <>
        <CreatePlanHeader
          IconName="arrow-back-outline"
          onPress={handleBack}
          title="Review"
        />
        <Text
          style={{
            color: '#71879C',
            textAlign: 'center',
            fontWeight: '400',
            fontSize: RFValue(15, height),
          }}>
          {values?.plan_name}
        </Text>
        <Text
          style={{
            color: '#000000',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: RFValue(25, height),
            marginTop: 7,
          }}>
          {`$${values?.target_amount}`}
        </Text>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: '400',
            fontSize: RFValue(13, height),
          }}>
          {target_date}
        </Text>
        <CreatePlanChartReview />
        <View style={styles.guarante_card}>
          <Icon size={30} name="information-circle-outline" color={'#0898A0'} />
          <Text
            style={{
              color: '#71879C',
              fontWeight: '400',
              fontSize: RFValue(15, height),
              marginRight: 40,
              lineHeight: 20,
            }}>
            Returns not guaranteed. Investing involves risk. Read our
            Disclosures.
          </Text>
        </View>
        <Text
          style={{
            fontWeight: '400',
            fontSize: RFValue(13, height),
            textAlign: 'center',
            color: '#71879C',
            marginTop: 30,
          }}>
          These are your starting settings, they can always be updated.
        </Text>
        <View style={styles.all_buttons}>
          <AppButton
            backgroundColor={'#0898A0'}
            label="Agree & Continue"
            labelColor={'#FFFFFF'}
            width={330}
            onPress={() => setSumit(true)}
          />
          <AppButton
            backgroundColor={'rgba(113, 135, 156, 0.1)'}
            label="Start over"
            labelColor={'#0898A0'}
            width={330}
            onPress={() => setCurrentStepIndex(0)}
          />
        </View>
      </>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text_container: {
    flexDirection: 'column',
    gap: 7,
  },
  guarante_card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(113, 135, 156, 0.05)',
    borderRadius: 8,
    gap: 17,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginTop: 30,
  },
  all_buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginTop: 50,
    marginBottom: 30,
  },
});

export default CreatePlanReview;
