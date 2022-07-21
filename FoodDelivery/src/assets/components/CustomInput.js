import React, {Component} from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';
import FONT_FAMILY from '../constants/fonts';
import scale from '../constants/responsive';

export class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      value: '',
      secureTextEntry: props.secureTextEntry,
    };
  }
  render() {
    return (
      <>
        <Text>{this.state.label}</Text>
        <TextInput
          style={styles.inputContainer}
          onChangeText={text => this.setState({value: text})}
          secureTextEntry={this.props.secureTextEntry}
          value={this.state.value}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    top: scale(-10),
    height: scale(47),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#000',
    fontFamily: FONT_FAMILY.SFProTextBold,
  },
});
