import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from './src/contants/colors';
import {IMG_Logo, IMG_Background} from './src/assets/images';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Logo */}
      <>
        <View style={styles.logoContainer}>
          <Image source={IMG_Logo} style={styles.logo} resizeMode={'contain'}>
        </View>
      </>
      {/* Title */}
      <></>
      {/* Image */}
      <></>
      {/* Button */}
      <></>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetColor,
  },
  logo:{
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    width: 73,
    height: 73,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    backgroundColor: CUSTOM_COLOR.white,
    overflow: 'hidden',
  },
});
