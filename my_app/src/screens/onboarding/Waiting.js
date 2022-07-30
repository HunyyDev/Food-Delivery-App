import {ImageBackground, StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMG_Waiting} from '../../assets/images';
import scale from '../../constants/scales';

const WaitingScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.backgroundContainer}>
        <Image source={IMG_Waiting} resizeMode={'contain'} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WaitingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundContainer: {
    width: scale(414),
    height: scale(896),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
