import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PRIMARY_COLOR} from '../../utils/color';

export default function NotificationAndBadge() {
  return (
    <View style={styles.container}>
      <Icon name={'notifications'} size={30} color={PRIMARY_COLOR} />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{0}</Text>
      </View>
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
    fontSize: 12,
    fontWeight: 'bold',
  },
});
