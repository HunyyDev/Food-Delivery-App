import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  NavigationContainer,
  Navigator,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import HomeScreen from '../screens/home';

export default class CustomButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const value = {
      colorButton: CUSTOM_COLOR.Black,
      colorText: CUSTOM_COLOR.SunsetOrange,
    };
    if (this.props.type === 'Primary') {
      value.colorButton = CUSTOM_COLOR.White;
      value.colorText = CUSTOM_COLOR.SunsetOrange;
    } else if (this.props.type === 'Secondary') {
      value.colorButton = CUSTOM_COLOR.SunsetOrange;
      value.colorText = CUSTOM_COLOR.White;
    }
    const CustomStyleWithType = {
      BackgroundButton: {
        backgroundColor: value.colorButton,
      },
      colorOfText: {
        color: value.colorText,
      },
    };
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.container,
          this.props.style,
          CustomStyleWithType.BackgroundButton,
        ]}
        onPress={this.props.onPress}>
        <Text style={[styles.Title, CustomStyleWithType.colorOfText]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    width: 314,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 17,
    fontWeight: '600',
  },
});
