/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import {useAppContext} from '../../contexts/AppContext';
import navigationString from '../../navigations/navigationString';
import {
  GET_ALL_PLANS,
  getAllPlans,
} from '../../queries/GetAllPlansQueries/GetAllPlansQueries';
import {
  GET_DAILY_QUOTE,
  getDailyQuotes,
} from '../../queries/GetDailyQuotes/GetDailyQuotes';
import {styles} from '../../styles/HomeStyles/HomeStyles';
import AppLoader from '../AppLoader/AppLoader';
import HomeCard from './HomeCard';
import HomeNavBar from './HomeNavBar';
import HomeQuote from './HomeQuote';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import PlanCard from '../AllPlans/PlanCard';
import BottomNavigationBar from '../BottomTabs/BottomTabs';

const {height} = Dimensions.get('window');

export default function Home() {
  const {data, isLoading: loading} = useQuery(
    [GET_DAILY_QUOTE],
    getDailyQuotes,
  );

  const {data: plans, isLoading: isloading} = useQuery(
    [GET_ALL_PLANS],
    getAllPlans,
  );

  const navigation: any = useNavigation();

  const {isLoading} = useAppContext();

  const flatListData = [{id: '1', title: 'Single Item'}]; // Array with a single item

  const renderItem = () => (
    <>
      <HomeCard />
      <TouchableOpacity
        style={styles.add_money_button}
        onPress={() => {
          navigation.navigate(navigationString.FUND_PLAN);
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
            fontSize: RFValue(20, height),
            fontWeight: '700',
          }}>
          Add money
        </Text>
      </TouchableOpacity>
      <View style={styles.create_and_view_plan}>
        <Text
          style={{
            color: 'black',
            fontSize: RFValue(20, height),
            fontWeight: '400',
          }}>
          {plans?.item_count === 0 ? 'Create a plan' : 'Your plans'}
        </Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 1,
          }}>
          <Text
            onPress={() => {
              if (plans?.item_count !== 0) {
                navigation.navigate(navigationString.ALL_PLANS);
              }
            }}
            style={{
              color: plans?.item_count !== 0 ? '#0898A0' : '#94A1AD',
              fontSize: RFValue(18, height),
              fontWeight: 'bold',
            }}>
            View all plans
          </Text>
          <Icon
            name={'chevron-forward-outline'}
            size={15}
            color={'#71879C'}
            style={{marginTop: 3}}
          />
        </View>
      </View>
      {plans && plans.item_count === 0 && (
        <Text
          style={{
            fontSize: RFValue(15, height),
            color: '#71879C',
            marginHorizontal: 15,
            marginTop: 15,
          }}>
          Start your investment journey by creating a plan
        </Text>
      )}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 30,
        }}>
        <TouchableOpacity
          style={styles.create_investment_button}
          onPress={() => {
            navigation.navigate(navigationString.CREATE_A_PLAN);
          }}>
          <View style={styles.main_create_inventment_button}>
            <Icon
              name={'add'}
              size={30}
              color={plans?.item_count !== 0 ? '#0898A0' : '#94A1AD'}
            />
          </View>
          <Text
            style={{
              color: 'black',
              fontWeight: '700',
              fontSize: RFValue(14, height),
              marginTop: 10,
            }}>
            Create an investment plan
          </Text>
        </TouchableOpacity>
        <PlanCard
          cardWidth={188}
          cardHeight={243}
          plan_name={plans?.items[plans?.item_count - 1]?.plan_name}
          target_amount={plans?.items[plans?.item_count - 1]?.target_amount}
          id={plans?.items[plans?.item_count - 1]?.id}
        />
      </View>
      <View style={styles.contact_us}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 10,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(113, 135, 156, 0.1)',
              borderRadius: 20,
            }}>
            <Icon name={'help-outline'} size={25} color={'#0898A0'} />
          </View>
          <Text style={{color: 'black'}}>Need help?</Text>
        </View>
        <TouchableOpacity style={styles.contact_us_button}>
          <Text style={{color: '#FFFFFF'}}>Contact us</Text>
        </TouchableOpacity>
      </View>
      <HomeQuote data={data} isLoading={isLoading} />
      <View
        style={{
          marginVertical: 20,
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/rise-logo.png')}
          style={{
            width: 123,
            height: 37.43,
            marginBottom: 70,
          }}
        />
      </View>
    </>
  );

  if (loading && isLoading && isloading) {
    return <AppLoader />;
  }

  return (
    <View>
      <HomeNavBar />
      <FlatList
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <BottomNavigationBar />
    </View>
  );
}
