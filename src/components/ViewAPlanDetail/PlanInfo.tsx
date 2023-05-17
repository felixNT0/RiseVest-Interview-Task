/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

function PlanInfo({title, date, price}: any) {
  const new_date = new Date(date);
  const year = new_date?.getFullYear();
  const day = new_date?.getDate();
  const month = new_date?.toLocaleString('default', {
    month: 'long',
  });

  const the_date = `${day} ${month} ${year}`;

  const the_price = `${price?.toFixed(2)}`;

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}>
      <Text
        style={{
          color: '#71879C',
          fontWeight: '400',
          fontSize: RFValue(15, height),
        }}>
        {title}
      </Text>
      <Text
        style={{
          color: 'black',
          fontWeight: '400',
          fontSize: RFValue(15, height),
        }}>
        {date && the_date}
        {price && `$${the_price}`}
      </Text>
    </View>
  );
}

export default PlanInfo;
