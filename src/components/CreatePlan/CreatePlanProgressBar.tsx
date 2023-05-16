import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

const CreatePlanProgressBar = ({progress}: any) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 10,
      width: '100%',
      backgroundColor: 'rgba(113, 135, 156, 0.1)',
      borderRadius: 10,
      marginVertical: 10,
    },
    filler: {
      height: '100%',
      width: `${(progress / 3) * 100}%`,
      backgroundColor: '#0898A0',
      borderRadius: 10,
    },
    label: {
      fontSize: RFValue(16, height),
      fontWeight: 'bold',
      marginVertical: 10,
      color: '#71879C',
    },
  });

  return (
    <View>
      <Text style={styles.label}>Question {progress} of 3</Text>
      <View style={styles.container}>
        <View style={styles.filler} />
      </View>
    </View>
  );
};

export default CreatePlanProgressBar;
