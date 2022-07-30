import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import scale from '../../../../../responsive';
import CUSTOM_COLOR from '../../../../constants/color';

const Custom_TextHead = props => {
  return (
    <View>
      <Text
        style={{
          top: scale(0),
          fontSize: scale(17),
          height: scale(23),
          width: scale(140),
          fontWeight: '600',
          color: CUSTOM_COLOR.Black,
        }}>
        {props.text}
      </Text>
    </View>
  );
};

export default Custom_TextHead;
