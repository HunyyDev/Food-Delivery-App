import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from './src/constants/colors';
import FONT_FAMILY from './src/constants/fonts';
import {useState} from 'react';
const Custom_Text_Input = props => {
  const {label, ...moreProps} = props;
  return (
    <View style={styles.background}>
      <Text style={styles.title}>{label}:</Text>
      <TextInput style={styles.input}>{...moreProps}</TextInput>
    </View>
  );
};

export default Custom_Text_Input;

const styles = StyleSheet.create({
  background: {
    marginBottom: 45,
  },
  title: {
    color: CUSTOM_COLOR.Black,
    opacity: 0.4,
    fontWeight: 'bold',
  },
  input: {
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomWidth: 2,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: FONT_FAMILY.ProTextRegular,
  },
});
