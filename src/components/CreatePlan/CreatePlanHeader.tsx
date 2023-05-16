/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import NavigationButton from './NavigationButton';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

function CreatePlanHeader({IconName, onPress, title}: any) {
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
        <NavigationButton IconName={IconName} onPress={onPress} />
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

export default CreatePlanHeader;
