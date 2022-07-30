import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import scale from '../../../../../responsive';
import CUSTOM_COLOR from '../../../../constants/color';

const Custom_Text2 = props => {
  return (
    <View>
      <Text
        style={{
          top: props.top,
          left: props.left,
          fontSize: scale(17),
          fontWeight: props.fontWeight,
          color: CUSTOM_COLOR.Black,
        }}>
        {props.text}
      </Text>
    </View>
  );
};

export default Custom_Text2;
