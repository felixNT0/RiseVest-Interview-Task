import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

const AppPasswordInput = ({placeholder, value, onChangeText, label}: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [borderWidth, setBorderWidth] = useState(1);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        style={[styles.input, {borderWidth: borderWidth}]}
        placeholder={placeholder}
        value={value}
        placeholderTextColor="gray"
        textContentType="newPassword"
        onBlur={() => {
          setBorderWidth(1);
        }}
        onFocus={() => {
          setBorderWidth(2);
        }}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity
        style={styles.showPasswordButton}
        onPress={toggleShowPassword}>
        <Icon
          name={showPassword ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          color={'#0898A0'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  showPasswordButton: {
    marginLeft: 8,
    position: 'absolute',
    top: 18,
    right: 20,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'column',
  },
  labelContainer: {
    position: 'absolute',
    top: -7,
    left: 35,
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 4,
    borderRadius: 15,
  },
  label: {
    fontSize: RFValue(15, height),
    fontWeight: '500',
    color: '#0898A0',
  },
  input: {
    fontSize: RFValue(16, height),
    fontWeight: '400',
    color: 'black',
    borderColor: '#0898A0',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  errorText: {
    color: '#FF0000',
    marginBottom: 16,
  },
});

export default AppPasswordInput;
