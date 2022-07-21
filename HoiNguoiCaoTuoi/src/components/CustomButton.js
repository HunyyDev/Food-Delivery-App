import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import {scaleWidth} from '../constants/responsive';

export class CustomButton extends Component {
  render() {
    return (
      <>
        <TouchableOpacity style={styles.container}>
          {this.props.type === 'primary' ? (
            <View style={styles.buttonPrimary}>
              <Text style={styles.textButtonPrimary}>{this.props.text}</Text>
            </View>
          ) : (
            <View style={styles.buttonSecondary}>
              <Text style={styles.textButtonSecondary}>{this.props.text}</Text>
            </View>
          )}
        </TouchableOpacity>
      </>
    );
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: scaleWidth(60),
    width: scaleWidth(300),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  buttonPrimary: {
    backgroundColor: CUSTOM_COLOR.White,
    height: '100%',
    width: '100%',
    borderRadius: scaleWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  textButtonPrimary: {
    fontSize: scaleWidth(17),
    color: CUSTOM_COLOR.Vermilion,
  },

  buttonSecondary: {
    backgroundColor: CUSTOM_COLOR.Vermilion,
    height: '100%',
    width: '100%',
    borderRadius: scaleWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  textButtonSecondary: {
    fontSize: scaleWidth(17),
    color: CUSTOM_COLOR.White,
  },
});
