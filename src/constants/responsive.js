<<<<<<< HEAD
import React from 'react';
import {Dimensions} from 'react-native';

const designWidth = 414;

export function scale(number) {
=======
/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';

const designWidth = 414;
// const designHeight = 896;

function scale(number) {
>>>>>>> Tournesol/dev
  let scaleNumber;
  const currentDeviceWidth = Dimensions.get('window').width;
  scaleNumber = (number / designWidth) * currentDeviceWidth;
  return scaleNumber;
}
<<<<<<< HEAD
=======
export default scale;
>>>>>>> Tournesol/dev
