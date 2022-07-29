import {Text, StyleSheet, View, Dimensions, TextInput} from 'react-native';
import React, {Component, useState} from 'react';
import COLORS from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';

const UnderlinedInput = props => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.SignInContainer}>
      <Text style={styles.Text}>{props.label}</Text>
      <TextInput
        style={styles.TextInput}
        onChangeText={text => {
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
    borderColor: COLORS.Black,
    backgroundColor: COLORS.Concrete,
    alignSelf: 'center',
    color: COLORS.Black,
    justifyContent: 'center',
  },
  Text: {
    color: COLORS.Black,
    opacity: 0.4,
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 10,
  },
  TextInput: {
    color: COLORS.Black,
    fontFamily: FONT_FAMILY.TextBold,
  },
});

export default React.memo(UnderlinedInput);
