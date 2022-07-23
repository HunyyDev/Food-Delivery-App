import {Dimensions} from 'react-native';

export const scaleWidth = number => {
  const currentDeviceWidth = parseInt(Dimensions.get('screen').width, 10);
  const designDeviceWidth = parseInt(414, 10);
  return (number / designDeviceWidth) * currentDeviceWidth;
};

export const scaleHeight = number => {
  const currentDeviceHeight = parseInt(Dimensions.get('screen').width, 10);
  const designDeviceHeight = parseInt(896, 10);
  return (number / designDeviceHeight) * currentDeviceHeight;
};
