/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

import AppNavigationButton from '../AppNavigationButton/AppNavigationButton';

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
            fontSize: 25,
          }}>
          {title}
        </Text>
        <View style={{width: 50}} />
      </View>
    </View>
  );
}

export default AppNavigationAndTextHeader;
