import React, {useEffect, useState} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

export default function AppAlert({showPopup, message}: any) {
  const [popupOpacity] = useState(new Animated.Value(0));
  const [popupHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    if (showPopup) {
      Animated.parallel([
        Animated.timing(popupOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(popupHeight, {
          toValue: 100,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(popupOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(popupHeight, {
          toValue: 0,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [popupHeight, popupOpacity, showPopup]);

  return (
    <View style={styles.container}>
      {showPopup && (
        <Animated.View
          style={[styles.popup, {opacity: popupOpacity, height: popupHeight}]}>
          <Text style={styles.popupText}>{message}</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  popupText: {
    fontSize: RFValue(16, height),
  },
});
