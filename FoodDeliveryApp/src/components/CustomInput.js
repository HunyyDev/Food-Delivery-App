<<<<<<< HEAD
import {Text, View, TextInput, StyleSheet} from 'react-native';
=======
import {Text, TextInput, StyleSheet} from 'react-native';
>>>>>>> 941fea3f76a6f6c499497724bcbe380adf2dccf4
import React, {Component} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';
import scale from '../constants/responsive';

export class CustomInput extends Component {
  render() {
    return (
      <>
        <Text style={styles.textInput}>{this.props.label}</Text>
        <TextInput
          secureTextEntry={this.props.secureText}
<<<<<<< HEAD
          placeholder={this.props.label}
=======
          placeholder={'Enter ' + this.props.label}
>>>>>>> 941fea3f76a6f6c499497724bcbe380adf2dccf4
          style={styles.inputContainer}
        />
      </>
    );
  }
}

export default CustomInput;

const styles = StyleSheet.create({
<<<<<<< HEAD
  sectionInput: {
    flex: 4,
    marginTop: 25,
    marginHorizontal: 30,
  },

  inputContainer: {
    backgroundColor: CUSTOM_COLOR.Silver,
    marginTop: 10,
    // borderButtonColor: CUSTOM_COLOR.Black,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderWidth: 1,
    fontFamily: FONT_FAMILY.ExtraBold,
=======
  inputContainer: {
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    marginTop: 10,
    fontFamily: FONT_FAMILY.ExtraBold,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.Black,
>>>>>>> 941fea3f76a6f6c499497724bcbe380adf2dccf4
  },

  textInput: {
    marginTop: 20,
    fontFamily: FONT_FAMILY.ExtraBold,
<<<<<<< HEAD
    width: scale(200),
    height: scale(20),
=======
>>>>>>> 941fea3f76a6f6c499497724bcbe380adf2dccf4
  },
});
