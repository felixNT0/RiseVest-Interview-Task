/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppContext} from '../../contexts/AppContext';
import Dot from './Dot';

function HomeCard() {
  const [showPrice, setShowPrice] = useState<boolean>(true);

  const {currentUser} = useAppContext();

  return (
    <View style={styles.card}>
      <View style={styles.text_and_icon}>
        <Text style={styles.title}>Total Balance</Text>
        <Icon
          onPress={() => setShowPrice(!showPrice)}
          name={showPrice ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          color={'#0898A0'}
          style={{marginBottom: 9}}
        />
      </View>
      <TextInput
        secureTextEntry={showPrice}
        style={styles.price}
        editable={false}
        value={
          showPrice
            ? `$${currentUser?.total_balance.toFixed(2)}`
            : `$${currentUser?.total_balance.toFixed(2)}`
        }
      />
      <View style={styles.content}>
        <Text style={{color: 'black'}}>Total Gains</Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            flexDirection: 'row',
          }}>
          <Icon
            onPress={() => setShowPrice(!showPrice)}
            name={'arrow-up'}
            size={17}
            color={'#27BF41'}
          />
          <Text style={{color: '#27BF41'}}>0.00%</Text>
          <Icon name={'chevron-forward-outline'} size={15} color={'#71879C'} />
        </View>
      </View>
      <Dot totalSteps={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    marginTop: 70,
  },
  price: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 30,
    marginTop: -12,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#71879C',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text_and_icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    alignItems: 'center',
  },
});
export default HomeCard;
