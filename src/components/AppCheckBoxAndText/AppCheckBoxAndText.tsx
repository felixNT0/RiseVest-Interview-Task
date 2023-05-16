/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

function AppCheckBoxAndText({checked, text}: any) {
  return (
    <TouchableOpacity style={styles.checkbox}>
      <View
        style={[
          styles.checkboxIcon,
          checked ? styles.checkboxIconChecked : null,
        ]}>
        {checked && (
          <Icon
            name="checkmark-outline"
            size={15}
            color={'#FFFFFF'}
            style={{position: 'absolute', top: 1, right: 1}}
          />
        )}
      </View>
      <Text style={styles.checkboxLabel}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkboxIcon: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#0898A0',
    marginRight: 8,
  },
  checkboxIconChecked: {
    backgroundColor: '#0898A0',
    borderColor: '#0898A0',
  },
  checkboxLabel: {
    fontSize: RFValue(16, height),
    color: 'black',
  },
});

export default AppCheckBoxAndText;
