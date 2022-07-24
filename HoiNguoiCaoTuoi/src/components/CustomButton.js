import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import {scaleWidth} from '../constants/responsive';

export class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          {this.props.type === 'primary' ? (
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={this.props.onPress}>
              <Text style={styles.textButtonPrimary}>{this.props.text}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={this.props.onPress}>
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
    flex: 1,
    height: scaleWidth(60),
    width: scaleWidth(300),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },

  buttonPrimary: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    height: '100%',
    width: '100%',
    borderRadius: scaleWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },

  textButtonPrimary: {
    fontSize: scaleWidth(17),
    color: CUSTOM_COLOR.Vermilion,
  },

  buttonSecondary: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    height: '100%',
    width: '100%',
    borderRadius: scaleWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },

  textButtonSecondary: {
    fontSize: scaleWidth(17),
    color: CUSTOM_COLOR.White,
  },
});
