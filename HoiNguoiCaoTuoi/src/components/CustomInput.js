import {Text, TextInput, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import FONT_FAMILY from '../constants/fonts';

export class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigate = location => {
    this.props.navigation.navigate(location);
  };

  render() {
    return (
      <>
        <Text style={styles.textInput}>{this.props.label}</Text>
        <TextInput
          style={styles.inputContainer}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.label}
        />
      </>
    );
  }
}

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    fontFamily: FONT_FAMILY.Bold,
    marginBottom: 46,
    borderBottomWidth: 0.5,
  },
  textInput: {
    fontFamily: FONT_FAMILY.Black,
    marginTop: 12,
  },
});
