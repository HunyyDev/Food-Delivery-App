import {Text, StyleSheet, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import FONT_FAMILY from '../constants/fonts';
import scale from '../responsive/responsive';
import CUSTOM_COLOR from '../constants/colors';

export default class CustomInput extends Component {
  render() {
    return (
      <>
        <Text style={styles.inputLabel}> {this.props.label}</Text>
        <TextInput
          secureTextEntry={this.props.secureText}
          placeholder={this.props.label}
          style={styles.inputcontainer}></TextInput>
      </>
    );
  }
}

const styles = StyleSheet.create({
  inputLabel: {
    marginTop: 20,
    fontFamily: FONT_FAMILY.Semibold,
    fontSize: scale(17),
  },
  inputcontainer: {
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomWidth: 1,
    fontFamily: FONT_FAMILY.Bold,
  },
});
