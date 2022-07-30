import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../../../constants/color';
import scale from '../../../../../responsive';

const Custom_Border = props => {
  return (
    <View
      style={{
        width: scale(232),
        height: 0,
        opacity: 0.3,
        borderColor: CUSTOM_COLOR.Black,
        borderBottomWidth: 0.5,
        top: props.top,
      }}
    />
  );
};

export default Custom_Border;
