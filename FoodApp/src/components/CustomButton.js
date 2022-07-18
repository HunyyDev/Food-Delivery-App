import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';
import React from 'react';

const CustomButton = (props, {title, onPress, buttonStyle}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    padding: 20,
    width: '70%',
    borderRadius: 25,
    alignItems: 'center',
    fontSize: 16,
  },

  title: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: FONT_FAMILY.Bold,
  },
});
