import {Text, StyleSheet, View, Dimensions, Pressable} from 'react-native';
import React, {Component, useState} from 'react';
import CUSTOM_COLOR from '../constants/colors';

import FONT_FAMILY from '../constants/fonts';

const CustomButton = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.buttonBackground,
      ]}>
      {props.label === 'primary'
        ? ({pressed}) =>
            pressed ? (
              <View style={styles.buttonOrange}>
                <Text style={styles.TextButtonOrange}>{props.text}</Text>
              </View>
            ) : (
              <View style={styles.buttonWhite}>
                <Text style={styles.TextButtonWhite}>{props.text}</Text>
              </View>
            )
        : ({pressed}) =>
            pressed ? (
              <View style={styles.buttonWhite}>
                <Text style={styles.TextButtonWhite}>{props.text}</Text>
              </View>
            ) : (
              <View style={styles.buttonOrange}>
                <Text style={styles.TextButtonOrange}>{props.text}</Text>
              </View>
            )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWhite: {
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 35,
    height: Dimensions.get('window').height * 0.08,
    padding: 20,
    width: Dimensions.get('window').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 30,
    margin: 30,
  },
  TextButtonWhite: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 15,
    color: CUSTOM_COLOR.SunsetOrange,
  },
  buttonOrange: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    borderRadius: 35,
    height: Dimensions.get('window').height * 0.08,
    padding: 20,
    width: Dimensions.get('window').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 30,
    margin: 30,
  },
  TextButtonOrange: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 15,
    color: CUSTOM_COLOR.White,
  },
  buttonBackground: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
});

export default React.memo(CustomButton);
