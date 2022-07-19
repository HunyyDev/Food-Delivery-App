import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../constants/responsive';
import FONT_FAMILY from '../constants/fonts';

export class CustomButton extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          {this.props.type === 'primary' ? (
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.textButtonPrimary}>{this.props.text}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.textButtonSecondary}>{this.props.text}</Text>
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

  buttonPrimary: {
    backgroundColor: CUSTOM_COLOR.White,
    height: scale(70),
    width: scale(314),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
    alignSelf: 'center',
    padding: 20,
  },

  textButtonPrimary: {
    fontSize: scale(17),
    color: CUSTOM_COLOR.Orange,
    fontFamily: FONT_FAMILY.ExtraBold,
  },

  buttonSecondary: {
    backgroundColor: CUSTOM_COLOR.Orange,
    height: scale(70),
    width: scale(314),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
    alignSelf: 'center',
    padding: 20,
  },

  textButtonSecondary: {
    fontSize: scale(17),
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.ExtraBold,
  },
});
