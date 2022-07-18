import {Text, StyleSheet, View, Dimensions} from 'react-native';
import React, {Component, useState} from 'react';
import CUSTOM_COLOR from '../constants/colors';

import FONT_FAMILY from '../constants/fonts';

const CustomButton = props => {
  return (
    <View style={styles.buttonBackground}>
      {props.label === 'primary' ? (
        <View style={styles.buttonWhite}>
          <Text style={styles.TextButtonWhite}>{props.text}</Text>
        </View>
      ) : (
        <View style={styles.buttonOrange}>
          <Text style={styles.TextButtonOrange}>{props.text}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWhite: {
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 35,
    height: '100%',
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
    margin: 20,
  },
  TextButtonWhite: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 15,
    color: CUSTOM_COLOR.SunsetOrange,
  },
  buttonOrange: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    borderRadius: 35,
    height: '100%',
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
    margin: 20,
  },
  TextButtonOrange: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 15,
    color: CUSTOM_COLOR.White,
  },
  buttonBackground: {
    backgroundColor: CUSTOM_COLOR.Concrete,
    // borderRadius: 999,
    height: '9%',
    //padding: 20,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
});

export default CustomButton;
