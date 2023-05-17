/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import AppNavigationButton from '../AppNavigationButton/AppNavigationButton';

const {height} = Dimensions.get('window');

interface Props {
  IconName: string;
  title: string;
  description: string;
  size?: number;
}

const CreatePlanTips = ({IconName, title, description, size}: Props) => {
  return (
    <View style={{marginBottom: 10}}>
      <View style={styles.container}>
        <AppNavigationButton IconName={IconName} size={size} />
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

export default CreatePlanTips;
