/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

function SellAndBuyRate({type, price, text}: any) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        marginTop: 10,
        marginHorizontal: 12,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: '400',
            fontSize: RFValue(18, height),
          }}>
          {`USD ${type} Rate`}
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: '400',
            fontSize: RFValue(16, height),
          }}>
          ₦{price}
        </Text>
      </View>
      <Text
        style={{
          color: '#71879C',
          fontWeight: '400',
          marginTop: -10,
          fontSize: RFValue(15, height),
        }}>
        {text}
      </Text>
    </View>
  );
}

export default SellAndBuyRate;
