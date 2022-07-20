import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../constants/responsive';
<<<<<<< HEAD
import CUSTOM_FONT from '../constants/fonts';
=======
import FONT_FAMILY from '../constants/fonts';
>>>>>>> 941fea3f76a6f6c499497724bcbe380adf2dccf4

export class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigate = location => {
    this.props.navigation.navigate(location);
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          {this.props.type === 'primary' ? (
            <TouchableOpacity
              style={[styles.button, styles.buttonPrimary]}
              onPress={this.props.onPress}>
              <Text style={[styles.text, styles.textButtonPrimary]}>
                {this.props.text}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.button, styles.buttonSecondary]}
              onPress={this.props.onPress}>
              <Text style={[styles.text, styles.textButtonSecondary]}>
                {this.props.text}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </>
    );
  }
}

// onPress={() => this.props.navigation.navigate

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
    padding: 20,
  },

  buttonPrimary: {
    backgroundColor: CUSTOM_COLOR.White,
  },

  text: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.ExtraBold,
  },

  textButtonPrimary: {
    color: CUSTOM_COLOR.Orange,
    fontFamily: CUSTOM_FONT.Black,
  },

  buttonSecondary: {
    backgroundColor: CUSTOM_COLOR.Orange,
  },

  textButtonSecondary: {
    color: CUSTOM_COLOR.White,
    fontFamily: CUSTOM_FONT.Black,
  },
});
