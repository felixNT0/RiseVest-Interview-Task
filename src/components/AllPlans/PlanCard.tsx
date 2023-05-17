/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import navigationString from '../../navigations/navigationString';
import {PRIMARY_COLOR} from '../../utils/color';

const {height} = Dimensions.get('window');

function PlanCard({plan_name, target_amount, id, cardWidth, cardHeight}: any) {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.create_investment_button,
        {width: cardWidth, height: cardHeight},
      ]}
      onPress={() => {
        navigation.navigate(navigationString.VIEW_SPECIFIC_PLAN, {id: id});
      }}>
      <Text
        style={{
          color: PRIMARY_COLOR,
          fontWeight: '700',
          fontSize: RFValue(20, height),
          marginTop: 50,
          textAlign: 'center',
        }}>
        {plan_name}
      </Text>
      <Text
        style={{
          color: 'black',
          fontWeight: '700',
          fontSize: RFValue(15, height),
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
            fontSize: RFValue(15, height),
          }}>
          view plan
        </Text>
        <Icon name={'arrow-forward-outline'} size={15} color={PRIMARY_COLOR} />
      </View>
    </TouchableOpacity>
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
    marginRight: 30,
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
