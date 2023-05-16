/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Modal, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useQuery} from 'react-query';
import {
  GET_BUY_AND_SALE_RATE,
  getSaleAndBuyRate,
} from '../../queries/GetSaleAndBuyRates/GetSaleAndBuyRates';
import AppButton from '../AppButton/AppButton';
import NavigationButton from '../CreatePlan/NavigationButton';
import SellAndBuyRate from './SellAndBuyRate';
import Skeleton from './Skeleton';

const {height} = Dimensions.get('window');

const AboutExchangeModal = ({modalVisible, closeModal}: any) => {
  const {data, isLoading} = useQuery(
    [GET_BUY_AND_SALE_RATE],
    getSaleAndBuyRate,
    {enabled: modalVisible},
  );

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <View style={{marginLeft: 10}}>
                <NavigationButton IconName="close" onPress={closeModal} />
              </View>
              <Text style={styles.modalText}>About Exchange Rates</Text>
            </View>

            {!data && isLoading && (
              <>
                <Skeleton />
                <Skeleton />
              </>
            )}
            {!isLoading && data && (
              <>
                <SellAndBuyRate
                  type="Buy"
                  price={data?.buy_rate}
                  text="We buy US dollars at this rate"
                />
                <SellAndBuyRate
                  type="Sell"
                  price={data?.sell_rate}
                  text="The current value of your investments in Naira"
                />
              </>
            )}

            <Text
              style={{
                fontWeight: '400',
                marginTop: 30,
                fontSize: RFValue(11, height),
                lineHeight: 16,
                textAlign: 'center',
                color: '#838F91',
              }}>
              These exhange rates are provided by independent third parties who
              handle fund conversions at the prevailing parallel rates and are
              not set, or controlled or by Rise. They are subject to change
              based on market trends.
            </Text>
            <View style={{marginVertical: 30}}>
              <AppButton label={'Accept & Continue'} onPress={closeModal} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  modalText: {
    fontSize: RFValue(23, height),
    fontWeight: '400',
    // marginBottom: 16,
    color: 'black',
  },
  header: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 30,
  },
});

export default AboutExchangeModal;
