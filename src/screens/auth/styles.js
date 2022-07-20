import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  logoBackground: {
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: CUSTOM_COLOR.White,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  logo: {
    width: '70%',
    height: '70%',
    alignSelf: 'center',
  },
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  forgotBackground: {
    width: '75%',
    height: '8%',
    margin: 30,
    marginBottom: 10,
    backgroundColor: CUSTOM_COLOR.Concrete,
    alignSelf: 'center',
  },
  forgot: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 14,
    color: CUSTOM_COLOR.SunsetOrange,
  },
  forgotPressed: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 14,
    color: CUSTOM_COLOR.White,
  },
});

export default styles;
