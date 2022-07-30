import {ImageBackground, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMG_Waiting} from '../../assets/images';
import scale from '../../constants/scales';

const Splash = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.backgroundContainer}>
        <Image source={IMG_Waiting} resizeMode={'contain'} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Splash;

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
