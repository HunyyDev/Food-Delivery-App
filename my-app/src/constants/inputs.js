/* eslint-disable no-unused-vars */
import {Text, StyleSheet, View, TextInput} from 'react-native';
import React, {Component, useState} from 'react';
import scale from './scales';
import FONT_FAMILY from './fonts';
import CUSTOM_COLOR from './colors';

function CustomInput(props) {
  console.log('props', props);

  const [value, setValue] = useState(props.label);

  return (
    <>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText={text => {
          props.onInputChange(text);
          setValue(text);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: scale(40),
    marginLeft: scale(50),
    fontSize: 15,
    fontFamily: FONT_FAMILY.SFProText_Semibold,
  },

  inputContainer: {
    marginLeft: scale(50),
    marginRight: scale(50),
    height: 40,
    fontSize: 17,
    // overflow: 'hidden',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomWidth: 0.5,
    fontFamily: FONT_FAMILY.SFProText_Semibold,
  },
});

export default CustomInput;
