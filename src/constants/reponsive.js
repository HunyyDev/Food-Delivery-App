import React from 'react';
import {Dimensions} from 'react-native';

const designWidth = 414;

export function scale(number) {
  let scaleNumber;
  const currentDeviceWidth = Dimensions.get('window').width;
  scaleNumber = (number / designWidth) * currentDeviceWidth;
  return scaleNumber;
}
