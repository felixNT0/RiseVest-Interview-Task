import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';

const {width, height} = Dimensions.get('window');

const AppLoader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={70} color="#0898A0" />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: width,
    height: height,
    zIndex: 99,
  },
});

export default AppLoader;
