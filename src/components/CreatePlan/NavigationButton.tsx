/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

function NavigationButton({IconName, onPress, size, IconType}: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(113, 135, 156, 0.1)',
          borderRadius: 25,
          width: 40,
          height: 40,
        }}>
        {IconType ? (
          <AntDesignIcon
            name={IconName}
            size={size ? size : 30}
            color={'#0898A0'}
          />
        ) : (
          <Icon name={IconName} size={size ? size : 30} color={'#0898A0'} />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default NavigationButton;
