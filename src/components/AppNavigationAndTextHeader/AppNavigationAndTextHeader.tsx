/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import AppNavigationButton from '../AppNavigationButton/AppNavigationButton';

const {height} = Dimensions.get('window');

interface Props {
  IconName: string;
  onPress: () => void;
  title: string;
}

function AppNavigationAndTextHeader({IconName, onPress, title}: Props) {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 30,
        }}>
        <AppNavigationButton IconName={IconName} onPress={onPress} />
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
            fontSize: RFValue(25, height),
          }}>
          {title}
        </Text>
        <View style={{width: 50}} />
      </View>
    </View>
  );
}

export default AppNavigationAndTextHeader;
