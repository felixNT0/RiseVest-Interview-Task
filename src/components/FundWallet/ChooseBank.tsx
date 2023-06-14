import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AppNavigationAndTextHeader from '../AppNavigationAndTextHeader/AppNavigationAndTextHeader';
import CreatePlanTips from '../CreatePlan/CreatePlanTips';

const ChooseBank = ({handleBack}: any) => {
  return (
    <View style={styles.container}>
      <AppNavigationAndTextHeader
        IconName="arrow-back-outline"
        onPress={handleBack}
        title="Select bank"
      />
      <TouchableOpacity onPress={() => handleBack()}>
        <CreatePlanTips
          IconName="card-outline"
          title="Felix Kolo Tsowa"
          description="GTBank 0464087132"
          size={23}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleBack()}>
        <CreatePlanTips
          IconName="card-outline"
          title="Felix Tsowa"
          description="Opay 9032328670"
          size={23}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChooseBank;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});
