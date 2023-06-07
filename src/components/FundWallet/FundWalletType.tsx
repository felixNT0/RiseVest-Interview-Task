import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import navigationString from '../../navigations/navigationString';
import AppNavigationAndTextHeader from '../AppNavigationAndTextHeader/AppNavigationAndTextHeader';
import CreatePlanTips from '../CreatePlan/CreatePlanTips';
import AboutExchangeModal from './AboutExchangeModal';

const FundWalletType = ({handleNext}: any) => {
  const navigation: any = useNavigation();

  const [modalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <AppNavigationAndTextHeader
        IconName="close"
        onPress={() => {
          navigation.navigate(navigationString.HOME_SCREEN);
        }}
        title="Fund Wallet"
      />
      <TouchableOpacity onPress={() => handleNext({FundType: 'Transfer'})}>
        <CreatePlanTips
          IconName="cash-outline"
          title="Naira Bank Transfer"
          description="Timelime - 15 mins"
          size={20}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNext({FundType: 'Card'})}>
        <CreatePlanTips
          IconName="card-outline"
          title="Naira Debit Card"
          description="Timelime - 15 mins"
          size={23}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNext({FundType: 'Debit'})}>
        <CreatePlanTips
          IconName="wallet-outline"
          title="Naira Direct Debit"
          description="Timelime - 15 mins"
          size={20}
        />
      </TouchableOpacity>

      <AboutExchangeModal
        modalVisible={modalVisible}
        closeModal={toggleModal}
      />
    </View>
  );
};

export default FundWalletType;

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
