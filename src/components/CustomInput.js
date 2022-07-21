import {Text, TextInput, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';

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
      <View style={{marginTop: 25, alignSelf: 'center'}}>
        <Text style={styles.containerText}>{this.props.label}</Text>
        {this.props.secureTextEntry ? (
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
    fontFamily: FONT_FAMILY.Medium,
  },
  containerTextInput: {
    color: CUSTOM_COLOR.Black,
    height: 40,
    width: 314,
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 15,
    lineHeight: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: CUSTOM_COLOR.Black,
  },
});

export default CustomInput;
