import {Text, StyleSheet, View, Dimensions, TextInput} from 'react-native';
import React, {Component, useState} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';

const CustomInput = props => {
  console.log('props', props);
  const [value, setValue] = useState('');
  return (
    <View style={styles.SignInContainer}>
      <Text style={styles.Text}>{props.label}</Text>
      <TextInput
        style={styles.TextInput}
        onChangeText={text => {
          console.log('value', text);
          // value = text;
          setValue(text);
        }}
        value={value}
        secureTextEntry={props.secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SignInContainer: {
    margin: 30,
    marginBottom: 10,
    width: '75%',
    height: '8%',
    borderBottomWidth: 1,
    borderColor: CUSTOM_COLOR.Black,
    backgroundColor: CUSTOM_COLOR.Concrete,
    alignSelf: 'center',
    color: CUSTOM_COLOR.Black,
    justifyContent: 'center',
  },
  Text: {
    color: CUSTOM_COLOR.Black,
    opacity: 0.4,
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 10,
  },
  TextInput: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.TextBold,
  },
});

export default React.memo(CustomInput);
