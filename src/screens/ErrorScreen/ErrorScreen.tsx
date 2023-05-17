import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import AppButton from '../../components/AppButton/AppButton';
import AppNavigationButton from '../../components/AppNavigationButton/AppNavigationButton';
import {PRIMARY_COLOR} from '../../utils/color';

const {width, height} = Dimensions.get('window');

const ErrorScreen = () => {
  const navigation: any = useNavigation();

  const route = useRoute();
  const {error} = route.params as any;

  console.log(error);

  const handleRetry = () => {
    navigation.goBack(); // Replace with the appropriate navigation action to retry the previous operation
  };

  return (
    <View style={styles.container}>
      <AppNavigationButton IconName="bug-outline" size={100} BodySize={50} />
      <Text style={styles.errorText}>{'An error occurred.'}</Text>
      <AppButton label="Retry" onPress={handleRetry} width={310} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: width,
    height: height,
    zIndex: 99,
  },
  errorText: {
    fontSize: RFValue(18, height),
    marginBottom: 20,
    color: PRIMARY_COLOR,
    marginTop: 50,
  },
});

export default ErrorScreen;
