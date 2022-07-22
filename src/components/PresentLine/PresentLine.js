import React from 'react';
import {View} from 'react-native';

import {general, longLeft, longRight, mobile} from './PresentLineStyle';
const PresentLine = props => {
  const {type} = props;
  let styles;
  switch (type) {
    case 'longLeft':
      styles = longLeft;
      break;
    case 'longRight':
      styles = longRight;
      break;
    case 'mobile':
      styles = mobile;
      break;
    default:
      styles = mobile;
      break;
  }
  return <View style={[general.margin, styles.margin]}></View>;
};

export default PresentLine;
