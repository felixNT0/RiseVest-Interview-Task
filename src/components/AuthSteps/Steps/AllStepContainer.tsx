import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
  color: string;
  description: string;
  imageUrlNum: number;
  dotProgress: any;
}

function AllStepContainer({
  title,
  color,
  description,
  imageUrlNum,
  dotProgress,
}: Props) {
  return (
    <>
      <View style={styles.image_holder}>
        <Image
          source={
            imageUrlNum === 1
              ? require('../../../assets/Image-Step-1.png')
              : imageUrlNum === 2
              ? require('../../../assets/Image-Step-2.png')
              : imageUrlNum === 3
              ? require('../../../assets/Image-Step-3.png')
              : ''
          }
          style={styles.image}
        />
      </View>
      <View style={styles.progress_dot}>{dotProgress}</View>
      <Text style={[styles.title, {color: color}]}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginTop: 70,
  },

  progress_dot: {
    marginTop: 50,
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 30,
  },

  image_holder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  description: {
    fontSize: 12,
    color: '#222222',
  },
});

export default AllStepContainer;
