import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetColor,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    width: 73,
    height: 73,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    backgroundColor: CUSTOM_COLOR.white,
    overflow: 'hidden',
    marginTop: 56,
    marginLeft: 49,
  },
  title: {
    fontSize: 65,
    fontFamily: FONT_FAMILY.Heavy,
    color: CUSTOM_COLOR.white,
    marginLeft: 49,
  },
  backgroundContainer: {},
  background: {
    width: Dimensions.get('window').width,
    height: 540,
    justifyContent: 'flex-end',
  },
  // button: {
  //   backgroundColor: CUSTOM_COLOR.white,
  //   height: 70,
  //   width: 314,
  //   borderRadius: 35,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  // },
  // buttonComment: {
  //   fontSize: 17,
  //   fontFamily: FONT_FAMILY.ProTextSemibold,
  //   color: CUSTOM_COLOR.SunsetColor,
  // },
});
