/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import navigationString from '../../navigations/navigationString';
import {PRIMARY_COLOR} from '../../utils/color';

function PlanCard({
  plan_name,
  target_amount,
  id,
  cardWidth,
  cardHeight,
  bigScreen,
  fundingCard,
  onPressFn,
}: any) {
  const navigation: any = useNavigation();

  return (
    <LinearGradient
      colors={['#0898A0', 'rgba(113, 135, 156, 0.1)']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={[
        styles.create_investment_button,
        {
          width: cardWidth,
          height: cardHeight,
          marginRight: bigScreen ? -5 : 30,
          marginLeft: bigScreen ? -15 : 0,
        },
      ]}>
      <TouchableOpacity
        onPress={() => {
          fundingCard
            ? onPressFn
            : navigation.navigate(navigationString.VIEW_SPECIFIC_PLAN, {
                id: id,
              });
        }}>
        <Text
          style={{
            color: PRIMARY_COLOR,
            fontWeight: '700',
            fontSize: 20,
            marginTop: 50,
            textAlign: 'center',
          }}>
          {plan_name}
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
            fontSize: 15,
            marginTop: 10,
            textAlign: 'center',
          }}>
          ${target_amount}
        </Text>
        <View style={styles.amount_and_plan_name}>
          <Text
            style={{
              color: PRIMARY_COLOR,
              fontWeight: '700',
              fontSize: 15,
            }}>
            view plan
          </Text>
          <Icon
            name={'arrow-forward-outline'}
            size={15}
            color={PRIMARY_COLOR}
          />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  create_investment_button: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    borderRadius: 12,
    marginTop: 25,
  },
  amount_and_plan_name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingBottom: 15,
  },
});

export default PlanCard;
