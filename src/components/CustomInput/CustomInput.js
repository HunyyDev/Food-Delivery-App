import {Text, TextInput, View, StyleSheet} from 'react-native';
import React, {Component, useState} from 'react';

export class CustomInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.label}</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
