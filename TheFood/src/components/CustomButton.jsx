import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {scaleX, scaleY, normalize} from '../helperFunction';
import CUSTOM_COLOR from '../assets/constants/colors';

class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.customInputContainer,
          {
            backgroundColor:
              this.props.type === 'primary'
                ? CUSTOM_COLOR.WHITE
                : CUSTOM_COLOR.VERMILION,
          },
        ]}>
        <Text
          style={{
            color:
              this.props.type === 'primary'
                ? CUSTOM_COLOR.VERMILION
                : CUSTOM_COLOR.WHITE,
            fontSize: normalize(21),
            fontWeight: 'bold',
          }}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  customInputContainer: {
    width: scaleX(314),
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: scaleY(20),
    overflow: 'hidden',
    borderRadius: normalize(35),
  },
});

export default CustomButton;
