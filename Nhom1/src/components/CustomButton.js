import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../constants/responsive';
class CustomButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.type === 'primary') {
      return (
        <TouchableOpacity onPress={this.props.onPress}>
          <View
            style={styles.ButtonContainer}
            backgroundColor={CUSTOM_COLOR.White}>
            <Text style={(styles.Text, {color: CUSTOM_COLOR.Orange})}>
              {this.props.text}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    if (this.props.type === 'secondary') {
      return (
        <TouchableOpacity onPress={this.props.onPress}>
          <View
            style={styles.ButtonContainer}
            backgroundColor={CUSTOM_COLOR.Orange}>
            <Text style={(styles.Text, {color: CUSTOM_COLOR.White})}>
              {this.props.text}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  ButtonContainer: {
    height: scale(70),
    width: scale(314),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Text: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.Black,
  },
});
