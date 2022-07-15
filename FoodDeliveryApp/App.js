import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from './source/constant/color';
import { IMG_LOGO, IMG_BACKGROUND } from './source/assets/images';
import FONT_FAMILY from './source/constant/fonts';
import scale from './responsive';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={IMG_LOGO} />
      </View>
      <Text style={styles.text1}>Food for Everyone </Text>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          style={styles.background}
          source={IMG_BACKGROUND}
          resizeMode={'contain'}
        />
        <>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get started</Text>
          </View>
        </>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  logoContainer: {
    width: scale(74),
    height: scale(74),
    borderRadius: scale(37),
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(50),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  text1: {
    marginLeft: scale(50),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    color: CUSTOM_COLOR.White,
    fontSize: scale(65),
  },
  backgroundContainer: {},
  background: {
    width: Dimensions.get('window').width,
    height: scale(450),
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(30),
    justifyContent: 'center',
    height: scale(70),
    width: scale(314),
    alignItems: 'center',
    alignSelf: 'center',
    top: scale(-10),
  },
  buttonText: {
    fontSize: scale(17),
    color: CUSTOM_COLOR.Vermilion,
  },
});