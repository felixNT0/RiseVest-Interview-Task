import React from 'react';
import {View} from 'react-native';
import ResetPassword from '../../components/ResetPassword/ResetPassword';

function ResetPasswordScreen({navigation}: any) {
  return (
    <View>
      <ResetPassword navigation={navigation} />
    </View>
  );
}

export default ResetPasswordScreen;
