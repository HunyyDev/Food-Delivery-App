import {Text, TextInput, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';
import scale from '../../responsive';

export class CustomInput extends Component {
  render() {
    return (
      <>
        <Text style={styles.textInput}>{this.props.label}</Text>
        <TextInput
          secureTextEntry={this.props.secureText}
          placeholder={this.props.label}
          style={styles.inputContainer}
        />
      </>
    );
  }
}

export default CustomInput;

const styles = StyleSheet.create({
  sectionInput: {
    flex: 4,
    marginTop: 25,
    marginHorizontal: 30,
  },

  inputContainer: {
    backgroundColor: CUSTOM_COLOR.Silver,
    marginTop: 10,
    borderWidth: 1,
    fontFamily: FONT_FAMILY.ExtraBold,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
  },

  textInput: {
    marginTop: 20,
    fontFamily: FONT_FAMILY.ExtraBold,
    width: scale(200),
    height: scale(20),
  },
});
