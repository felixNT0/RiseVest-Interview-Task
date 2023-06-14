/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

function HomeQuote({data, isLoading}: any) {
  const handleShare = async () => {
    const text = `author: ${data.author}, quote: ${data.quote}`;
    const options = {
      message: String(text),
      url: require('../../assets/icon.png'),
    };
    try {
      await Share.open(options);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={[
        styles.quotes_card,
        {
          paddingHorizontal: isLoading ? 30 : 15,
          paddingVertical: isLoading ? 30 : 15,
        },
      ]}>
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
            <TouchableOpacity
              onPress={handleShare}
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
            </TouchableOpacity>
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
    marginHorizontal: 13,
    backgroundColor: '#0898A0',
    borderRadius: 15,
    marginBottom: 20,
  },
});

export default HomeQuote;
