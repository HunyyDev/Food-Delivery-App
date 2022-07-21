import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';
import scale from '../constants/responsive';
export class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  setValue = text => {
    this.state.value = text;
  };

  render() {
    return (
      <View marginTop={scale(25)} alignSelf={'center'}>
        <Text style={styles.containerText}>{this.props.label}</Text>
        {this.props.secureTextEntry === true ? (
          <TextInput
            style={styles.containerTextInput}
            secureTextEntry
            onChangeText={text => this.setValue(text)}
          />
        ) : (
          <TextInput
            style={styles.containerTextInput}
            onChangeText={text => this.setValue(text)}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerText: {
    color: CUSTOM_COLOR.Black,
    opacity: 0.4,
    fontSize: 15,
    fontFamily: FONT_FAMILY.Black,
  },
  containerTextInput: {
    color: CUSTOM_COLOR.Black,
    height: scale(40),
    width: scale(314),
    fontFamily: FONT_FAMILY.Black,
    fontSize: 15,
    lineHeight: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: CUSTOM_COLOR.Black,
  },
});

export default CustomInput;
