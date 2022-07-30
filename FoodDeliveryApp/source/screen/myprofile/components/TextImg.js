import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import scale from '../../../../responsive';
import CUSTOM_COLOR from '../../../constants/color';

const TextImg = props => {
  return (
    <Text
      style={{
        fontSize: scale(15),
        fontWeight: '400',
        color: CUSTOM_COLOR.Black,
        opacity: 0.5,
        top: props.top,
      }}>
      {props.text}
    </Text>
  );
};

export default TextImg;

const styles = StyleSheet.create({});