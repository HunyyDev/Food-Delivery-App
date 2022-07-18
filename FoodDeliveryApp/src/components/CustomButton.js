import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../constants/responsive';

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
    height: scale(70),
    width: scale(314),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  buttonPrimary: {
    backgroundColor: CUSTOM_COLOR.White,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
    alignSelf: 'center',
    padding: 20,
  },

  textButtonPrimary: {
    fontSize: scale(17),
    color: CUSTOM_COLOR.Orange,
  },

  buttonSecondary:{
    backgroundColor: CUSTOM_COLOR.Orange,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
    alignSelf: 'center',
    padding: 20,
  },

  textButtonSecondary: {
    fontSize: scale(17),
    color: CUSTOM_COLOR.White,
  },

});
