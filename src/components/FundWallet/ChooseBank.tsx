import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigationAndTextHeader from '../AppNavigationAndTextHeader/AppNavigationAndTextHeader';

const ChooseBank = ({handleBack}: any) => {
  return (
    <View style={styles.container}>
      <AppNavigationAndTextHeader
        IconName="arrow-back-outline"
        onPress={handleBack}
        title="Select bank"
      />
    </View>
  );
};

export default ChooseBank;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});
