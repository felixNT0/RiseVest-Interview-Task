/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

function HomeQuote({data, isLoading}: any) {
  return (
    <View style={styles.quotes_card}>
      {data && !isLoading ? (
        <>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: RFValue(17, height),
              fontWeight: '700',
              marginBottom: 20,
            }}>
            TODAY’S QUOTE
          </Text>
          <View
            style={{
              width: 50,
              height: 3,
              backgroundColor: '#FFFFFF',
            }}
          />
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: RFValue(15, height),
              fontWeight: '400',
              marginVertical: 20,
            }}>
            {data?.quote}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: RFValue(17, height),
                fontWeight: '700',
                marginTop: 5,
              }}>
              {data?.author}
            </Text>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: 45,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 45,
                height: 45,
              }}>
              <Icon
                name={'share-social-outline'}
                size={25}
                color={'#FFFFFF'}
                style={{marginRight: 4}}
              />
            </View>
          </View>
        </>
      ) : (
        <ActivityIndicator size="small" color={'#FFFFFF'} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  quotes_card: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 13,
    backgroundColor: '#0898A0',
    borderRadius: 15,
    marginBottom: 20,
  },
});

export default HomeQuote;
