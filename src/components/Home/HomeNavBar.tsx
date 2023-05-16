/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {useAppContext} from '../../contexts/AppContext';
import {styles} from '../../styles/HomeStyles/HomeStyles';
import NotificationAndBadge from '../NotificationAndBagde/NotificationAndBadge';

function HomeNavBar() {
  const {currentUser} = useAppContext();
  const getCurrentTimePeriod = () => {
    const currentHour = new Date().getHours();
    let timePeriod = '';

    if (currentHour >= 0 && currentHour < 12) {
      timePeriod = 'Morning ☀️';
    } else if (currentHour >= 12 && currentHour < 18) {
      timePeriod = 'Afternoon 🌤️';
    } else {
      timePeriod = 'Evening 🌙';
    }

    return timePeriod;
  };
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.header_text}>Good {getCurrentTimePeriod()}</Text>
          <Text style={styles.header_user_name}>{currentUser?.username}</Text>
        </View>
        <View style={styles.header_earn_bonus_holder}>
          <View style={styles.header_earn_bonus}>
            <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
              Earn 3% bonus
            </Text>
          </View>
          <NotificationAndBadge />
        </View>
      </View>
    </>
  );
}

export default HomeNavBar;
