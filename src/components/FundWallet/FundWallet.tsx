import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import navigationString from '../../navigations/navigationString';
import CreatePlanHeader from '../CreatePlan/CreatePlanHeader';
import CreatePlanTips from '../CreatePlan/CreatePlanTips';
import AboutExchangeModal from './AboutExchangeModal';

function FundWallet({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <CreatePlanHeader
        IconName="close"
        onPress={() => {
          navigation.navigate(navigationString.HOME_SCREEN);
        }}
        title="Fund Wallet"
      />
      <CreatePlanTips
        IconName="cash-outline"
        title="Naira Bank Transfer"
        description="Timelime - 15 mins"
        size={20}
      />
      <CreatePlanTips
        IconName="card-outline"
        title="Naira Debit Card"
        description="Timelime - 15 mins"
        size={23}
      />
      <CreatePlanTips
        IconName="wallet-outline"
        title="Naira Direct Debit"
        description="Timelime - 15 mins"
        size={20}
      />
      <AboutExchangeModal
        modalVisible={modalVisible}
        closeModal={toggleModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'black',
  },
});

export default FundWallet;
