/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import navigationString from '../../navigations/navigationString';
import {
  GET_PLANS_BY_ID,
  getPlanById,
} from '../../queries/GetPlanById/GetPlanById';
import {PRIMARY_COLOR} from '../../utils/color';
import AppLoader from '../AppLoader/AppLoader';
import AppNavigationButton from '../AppNavigationButton/AppNavigationButton';
import PlanInfo from './PlanInfo';

function ViewAPlanDetail() {
  const navigation: any = useNavigation();

  const route = useRoute();
  const {id} = route.params as any;

  const {data, isLoading} = useQuery([GET_PLANS_BY_ID], () => getPlanById(id), {
    enabled: !!id,
  });

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

  const styles = StyleSheet.create({
    header: {
      width: width,
      height: 150,
      backgroundColor: PRIMARY_COLOR,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 15,
    },
    wrapper: {marginHorizontal: width >= 500 ? 150 : 15},
    add_funds_button: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 7,
      borderWidth: 1,
      backgroundColor: 'rgba(113, 135, 156, 0.1)',
      borderColor: 'rgba(113, 135, 156, 0.2)',
      borderRadius: 5,
      marginTop: 15,
      marginBottom: 20,
    },
    info: {
      backgroundColor: 'rgba(113, 135, 156, 0.1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      width: 200,
      height: 30,
      borderRadius: 30,
    },
  });

  if (isLoading) {
    return <AppLoader />;
  }
  return (
    <ScrollView>
      <View style={styles.header}>
        <AppNavigationButton
          IconName="arrow-back-outline"
          color="#FFFFFF"
          bg="rgba(0, 0, 0, 0.2)"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            color: '#FFFFFF',
            fontWeight: '700',
            fontSize: 30,
          }}>
          {data?.plan_name}
        </Text>
        <AppNavigationButton
          IconName="ellipsis-vertical-outline"
          color="#FFFFFF"
          bg="rgba(0, 0, 0, 0.2)"
        />
      </View>
      <View style={styles.wrapper}>
        <Text
          style={{
            color: '#71879C',
            fontWeight: '400',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 20,
          }}>
          Plan Balance
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
            fontSize: 25,
            textAlign: 'center',
            marginTop: 5,
          }}>
          ${data?.invested_amount.toFixed(2)}
        </Text>
        <View
          style={{
            marginVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.info}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 13,
                color: '#71879C',
              }}>
              Results are updated monthly
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.add_funds_button}
          onPress={() => {
            navigation.navigate(navigationString.FUND_PLAN), {id: id};
          }}>
          <Icon
            name={'add'}
            size={30}
            color={'#0898A0'}
            style={{marginRight: 10}}
          />
          <Text
            style={{
              color: '#0898A0',
              fontSize: 20,
              fontWeight: '700',
            }}>
            Fund plan
          </Text>
        </TouchableOpacity>
        <PlanInfo title={'Plan created on'} date={data?.created_at} />
        <PlanInfo title={'Maturity date'} date={data?.maturity_date} />
        <PlanInfo title={'Target Amount'} price={data?.target_amount} />
        <PlanInfo title={'Invested Amount'} price={data?.invested_amount} />
        <PlanInfo title={'Total Return'} price={data?.total_returns} />
      </View>
    </ScrollView>
  );
}

export default ViewAPlanDetail;
