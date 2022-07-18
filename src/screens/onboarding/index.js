const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const designWidth = 414;
const designHeight = 896;

function scaleWidth(number) {
  let scaleNumber;
  scaleNumber = (number / designWidth) * width;
  return scaleNumber;
}

function scaleHeight(number) {
  let scaleNumber;
  scaleNumber = (number / designHeight) * height;
  return scaleNumber;
}

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
import {IMG_Logo} from 'D:/ReactNative/food-delivery-app/src/assets/images/images';
import {IMG_Background} from 'D:/ReactNative/food-delivery-app/src/assets/images/images';
import CUSTOM_COLOR from 'D:/ReactNative/food-delivery-app/src/constants/colors.js';
import FONT_FAMILY from 'D:/ReactNative/food-delivery-app/src/constants/fonts.js';

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={IMG_Logo} style={styles.logo} resizeMode={'contain'} />
      </View>
      <>
        <Text style={styles.title}>{'Food for \nEveryone'}</Text>
      </>
      <ImageBackground
        style={styles.background}
        source={IMG_Background}
        resizeMode={'contain'}
      />
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Get started</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  logoContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    width: scaleWidth(74),
    height: scaleWidth(74),
    borderRadius: scaleWidth(74) / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(49),
    marginLeft: scaleWidth(49),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 65,
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.Black,
    marginLeft: scaleWidth(49),
    lineHeight: 65,
    letterSpacing: -0.5,
  },
  backgroundContainer: {
    justifyContent: 'center',
  },
  background: {
    width: Dimensions.get('window').width,
    height: scaleHeight(540),
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    width: scaleWidth(314),
    height: scaleHeight(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    alignSelf: 'center',
    position: 'absolute',
    bottom: scaleHeight(20),
  },
  buttonText: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 17,
  },
});

export default OnboardingScreen;
