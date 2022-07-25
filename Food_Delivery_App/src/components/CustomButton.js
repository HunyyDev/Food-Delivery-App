import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../../responsive';
import FONT_FAMILY from '../constants/fonts';

export class CustomButton extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          {this.props.type === 'primary' ? (
            <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
              <Text style={[styles.textButton, styles.textButtonPrimary]}>
                {this.props.text}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
              <Text style={[styles.textButton, styles.textButtonSecondary]}>
                {this.props.text}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </>
    );
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
  },

  button: {
    height: scale(70),
    width: scale(314),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
    alignSelf: 'center',
  },

  buttonPrimary: {
    backgroundColor: CUSTOM_COLOR.White,
  },

  buttonSecondary: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  textButton: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Bold,
  },

  textButtonPrimary: {
    color: CUSTOM_COLOR.SunsetOrange,
  },

  textButtonSecondary: {
    color: CUSTOM_COLOR.White,
  },
});
