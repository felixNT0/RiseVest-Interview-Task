/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import NavigationButton from './NavigationButton';

import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

const CreatePlanTips = ({IconName, title, description, size}: any) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 20,
      marginVertical: 10,
    },
    text_container: {
      flexDirection: 'column',
      gap: 7,
    },
  });

  return (
    <View style={{marginBottom: 10}}>
      <View style={styles.container}>
        <NavigationButton IconName={IconName} size={size} />
        <View style={styles.text_container}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: RFValue(15, height),
              color: '#222222',
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: RFValue(13, height),
              color: '#71879C',
              marginRight: 70,
              lineHeight: 20,
            }}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CreatePlanTips;
