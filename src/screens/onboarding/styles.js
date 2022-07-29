import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetYellow,
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
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    marginTop: 56,
    marginLeft: 49,
  },
  title: {
    fontSize: 65,
    fontFamily: FONT_FAMILY.Heavy,
    color: CUSTOM_COLOR.White,
    marginLeft: 49,
  },
  backgroundContainer: {},
  background: {
    width: Dimensions.get('window').width,
    height: 540,
  },
});
