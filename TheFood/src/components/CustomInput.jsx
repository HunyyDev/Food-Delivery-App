import {Text, TextInput, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {scaleX, scaleY, normalize} from '../helperFunction';
import CUSTOM_COLOR from '../assets/constants/colors';

class CustomInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.customInputContainer}>
        <Text style={styles.customInputLabel}>{this.props.label}</Text>
        <TextInput
          style={styles.customInputText}
          secureTextEntry={this.props.secureTextEntry || false}
          onChangeText={text => this.props.action(text)}
          placeholder={this.props.placeholder}></TextInput>
        <View
          style={{
            borderBottomColor: CUSTOM_COLOR.BLACK,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  customInputContainer: {
    marginLeft: scaleX(50),
    marginRight: scaleX(50),
  },
  customInputLabel: {
    fontSize: normalize(20),
    color: CUSTOM_COLOR.BLACK,
    opacity: 0.4,
  },
  customInputText: {
    fontSize: normalize(21),
    fontWeight: 'bold',
    marginLeft: scaleX(-5),
  },
});

export default CustomInput;
