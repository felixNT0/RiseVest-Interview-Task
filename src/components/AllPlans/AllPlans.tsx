/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import navigationString from '../../navigations/navigationString';
import {
  GET_ALL_PLANS,
  getAllPlans,
} from '../../queries/GetAllPlansQueries/GetAllPlansQueries';
import AppLoader from '../AppLoader/AppLoader';
import AppNavigationAndTextHeader from '../AppNavigationAndTextHeader/AppNavigationAndTextHeader';
import BottomNavigationBar from '../BottomTabs/BottomTabs';
import PlanCard from './PlanCard';

function AllPlans() {
  const navigation: any = useNavigation();

  const {data, isLoading} = useQuery([GET_ALL_PLANS], getAllPlans);

  if (!data?.items && isLoading) {
    return <AppLoader />;
  }
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 15}}>
        <AppNavigationAndTextHeader
          IconName={'arrow-back-outline'}
          onPress={() => {
            navigation.navigate(navigationString.HOME_SCREEN);
          }}
          title={'All your plans'}
        />
        <Text
          style={{
            fontWeight: '400',
            fontSize: 15,
            color: '#71879C',
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Tap on any of the plans to view the plan
        </Text>
      </View>
      <FlatList
        data={data?.items}
        numColumns={2}
        renderItem={({item}) => (
          <PlanCard
            plan_name={item.plan_name}
            target_amount={item.target_amount}
            id={item.id}
            cardWidth={150}
            cardWeight={170}
          />
        )}
        contentContainerStyle={{marginHorizontal: 15, paddingBottom: 100}}
        keyExtractor={item => item.id}
      />
      <BottomNavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default AllPlans;
