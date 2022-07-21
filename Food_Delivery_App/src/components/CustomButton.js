import React from "react";
import {TouchableOpacity, StyleSheet, Text, View} from "react-native";
import CUSTOM_COLOR from '../constants/colors'
import scaleHeight from '../responsive/ScaleHeight';
import scaleWidth from '../responsive/ScaleWidth';
import FONT_FAMILY from '../constants/fonts'

export class CustomButton extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          {this.props.type === 'primary' ? (
            <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={this.props.onPress}>
              <Text style={[styles.textButton, styles.textButtonPrimary]}>
                {this.props.text}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={this.props.onPress}>
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
    height: scaleHeight(70),
    width: scaleWidth(314),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleWidth(30),
    alignSelf: 'center',
  },

  buttonPrimary: {
    backgroundColor: CUSTOM_COLOR.White,
  },

  buttonSecondary: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  textButton: {
    fontSize: scaleWidth(17),
    fontFamily: FONT_FAMILY.Bold,
  },

  textButtonPrimary: {
    color: CUSTOM_COLOR.SunsetOrange,
  },

  textButtonSecondary: {
    color: CUSTOM_COLOR.White,
  },
});
