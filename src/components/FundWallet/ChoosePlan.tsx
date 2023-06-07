/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {getAllPlans} from '../../queries/GetAllPlansQueries/GetAllPlansQueries';
import PlanCard from '../AllPlans/PlanCard';
import AppNavigationAndTextHeader from '../AppNavigationAndTextHeader/AppNavigationAndTextHeader';

const ChoosePlan = ({handleBack, handleNext}: any) => {
  const {data} = useQuery(['GET_ALL_PLANS'], getAllPlans) as any;

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

  return (
    <View style={styles.container}>
      <AppNavigationAndTextHeader
        IconName="arrow-back-outline"
        onPress={handleBack}
        title="Choose from plans"
      />
      <Text style={styles.text}>Tap on any of the plans to select</Text>
      <FlatList
        data={data?.items}
        numColumns={width >= 500 ? 4 : 2}
        renderItem={({item}) => (
          <PlanCard
            plan_name={item.plan_name}
            target_amount={item.target_amount}
            id={item._id || item.id}
            cardWidth={150}
            cardWeight={170}
            fundingCard={true}
            onPressFn={() => handleNext({PlanId: item._id || item.id})}
          />
        )}
        contentContainerStyle={{
          marginHorizontal: 15,
          paddingBottom: 100,
        }}
        keyExtractor={item => item._id || item.id}
      />
    </View>
  );
};

export default ChoosePlan;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  text: {
    fontweight: '400',
    fontSize: 15,
    color: '#71879C',
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
});
