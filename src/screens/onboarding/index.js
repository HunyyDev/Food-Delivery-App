/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {IMG_Background} from '../../assets/images';
import {IMG_Logo} from '../../assets/images';
import FONT_FAMILY from '../../constants/font';
import CUSTOM_COLOR from '../../constants/color';

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <>
        <View style={styles.logoContainer}>
          <Image source={IMG_Logo} style={styles.logo} resizeMode="contain" />
        </View>
      </>

      {/* Title */}
      <>
        <View>
          <Text style={styles.title}>{'Food for \nEveryone'}</Text>
        </View>
      </>

      {/* Background */}
      <>
        <View style={styles.backgroundContainer}>
          <ImageBackground
            source={IMG_Background}
            style={styles.background}
            resizeMode="contain">
            {/* Button */}
            <>
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>Get Started</Text>
              </View>
            </>
          </ImageBackground>
        </View>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  title: {
    fontFamily: FONT_FAMILY.Black,
    fontSize: 65,
    color: CUSTOM_COLOR.White,
    marginLeft: 50,
  },

  buttonContainer: {
    alignContent: 'center',
    width: 314,
    height: 70,
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    alignSelf: 'center',
    color: CUSTOM_COLOR.SunsetOrange,
  },

  button: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 20,
  },

  logoContainer: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  backgroundContainer: {},

  background: {
    width: Dimensions.get('window').width,
    height: 490,
    justifyContent: 'flex-end',
  },
});
export default OnboardingScreen;
