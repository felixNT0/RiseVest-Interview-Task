import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {PRIMARY_COLOR} from '../../utils/color';

const {height} = Dimensions.get('window');

export default function NotificationAndBadge() {
  return (
    <View style={styles.container}>
      <Icon name={'notifications'} size={30} color={PRIMARY_COLOR} />
      {/* {badgeCount > 0 && ( */}
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{9}</Text>
      </View>
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  badgeContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 17,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    marginLeft: 15,
  },
  badgeText: {
    color: '#fff',
    fontSize: RFValue(12, height),
    fontWeight: 'bold',
  },
});
