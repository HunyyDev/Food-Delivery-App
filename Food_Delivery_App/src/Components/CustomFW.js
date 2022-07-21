import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constant/color';
import FONT_FAMILY from '../constant/font';

const CustomFW = props => {
  return (
    <Pressable
      onPress={() => {
        alert('Stupied :))');
      }}
      style={styles.container}>
      <Text style={styles.text}>{props.label}</Text>
    </Pressable>
  );
};

export default CustomFW;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 50,
  },
  text: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: FONT_FAMILY.Regular_Sf,
  },
});
