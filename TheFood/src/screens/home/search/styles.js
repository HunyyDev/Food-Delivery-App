import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {normalize, scaleX, scaleY} from '../../../helperFunction';
import colors from '../../../assets/constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GALLERY,
    flexDirection: 'row',
    marginHorizontal: scaleX(50),
    borderRadius: normalize(30),
  },
  icsearch: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scaleX(35),
    marginRight: scaleX(16),
  },
  input: {
    width: '100%',
    fontFamily: 'FontsFree-Net-SF-Pro-Rounded-Semibold',
  },
});

export default styles;
