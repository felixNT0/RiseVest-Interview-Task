import React from 'react';
import {StyleSheet, View} from 'react-native';

const Skeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.textSkeleton, styles.textSkeletonWidth1]} />
        <View style={[styles.textSkeleton, styles.textSkeletonWidth]} />
      </View>
      <View style={styles.textSkeleton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  textSkeleton: {
    backgroundColor: '#EFEFEF',
    height: 15,
    borderRadius: 10,
    marginBottom: 5,
  },
  textSkeletonWidth: {
    width: '20%',
  },
  textSkeletonWidth1: {
    width: '50%',
  },
});

export default Skeleton;
