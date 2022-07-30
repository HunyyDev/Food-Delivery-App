import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import scale from '../../../../responsive';
import CUSTOM_COLOR from '../../../constants/color';
import {IC_Next} from '../../../assets/icons';

const Custom_ChooseButton = props => {
  return (
    <TouchableOpacity
      style={{
        width: scale(315),
        height: scale(70),
        left: scale(52),
        top: props.top,
        borderRadius: 20,
        backgroundColor: CUSTOM_COLOR.White,

      }}>
      <Text style={styles.text1}>{props.text}</Text>
      <View style={styles.viewIC}>
        <IC_Next></IC_Next>
      </View>
    </TouchableOpacity>
  );
};

export default Custom_ChooseButton;

const styles = StyleSheet.create({
  text1: {
    fontWeight: '600',
    fontSize: scale(19),
    left: scale(23),
    top: scale(22),
    color: CUSTOM_COLOR.Black,
  },
  viewIC: {
    left: scale(264),
    width: scale(24),
    height: scale(24),
    top: scale(-5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});