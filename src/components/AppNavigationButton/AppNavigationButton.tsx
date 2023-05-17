/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  IconName: string;
  onPress?: () => void;
  size?: number;
  IconType?: boolean;
  color?: string;
  bg?: string;
  BodySize?: number;
}

function AppNavigationButton({
  IconName,
  onPress,
  size,
  IconType,
  color,
  bg,
  BodySize,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bg ? bg : 'rgba(113, 135, 156, 0.1)',
          borderRadius: size ? size : 30,
          padding: BodySize ? BodySize : 10,
        }}>
        {IconType ? (
          <AntDesignIcon
            name={IconName}
            size={size ? size : 30}
            color={color ? color : '#0898A0'}
          />
        ) : (
          <Icon name={IconName} size={size ? size : 30} color={'#0898A0'} />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default AppNavigationButton;
