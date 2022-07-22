import React, {Component} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import scale from '../../responsive';
import CUSTOM_COLOR from '../constants/color';

export class CUSTOM_UnderlineButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {isChoosing, onPress, style, textStyle, children} = this.props;
    return (
      <Pressable
        onPress={onPress}
        style={[styles.background(isChoosing), style]}>
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </Pressable>
    );
  }
}

export default CUSTOM_UnderlineButton;

const styles = StyleSheet.create({
  background: isChoosing => ({
    borderBottomWidth: 3,
    borderBottomColor: isChoosing ? CUSTOM_COLOR.SunsetOrange : 'transparent',
  }),
  text: {
    color: CUSTOM_COLOR.Manatee,
    padding: scale(15),
    fontWeight: '700',
    fontSize: scale(17),
  },
});
