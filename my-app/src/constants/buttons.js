import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import scale from './scales';
import CUSTOM_COLOR from './colors';
import FONT_FAMILY from './fonts';

const CustomButton = ({titleButton, onPress = () => {}}) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.titleButton}>{titleButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: scale(70),
    width: scale(314),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    alignSelf: 'center',
    backgroundColor: CUSTOM_COLOR.White,
  },

  titleButton: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFProText_Semibold,
    color: CUSTOM_COLOR.Vermilion,
  },

  //   buttonSecondary: {
  //     height: scale(70),
  //     width: scale(314),
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 35,
  //     alignSelf: 'center',
  //     backgroundColor: CUSTOM_COLOR.Vermilion,
  //   },

  //   titleButtonSecondary: {
  //     fontSize: 17,
  //     fontFamily: FONT_FAMILY.SFProText_Semibold,
  //     color: CUSTOM_COLOR.White,
  //   },
});
