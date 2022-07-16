import {Dimensions} from 'react-native';

export const scaleWidth = number => {
  const currentDeviceWidth = parseInt(Dimensions.get('screen').width);
  const designDeviceWidth = parseInt(414);
  return (number / designDeviceWidth) * currentDeviceWidth;
};

export const scaleHeight = number => {
  const currentDeviceHeight = parseInt(Dimensions.get('screen').width);
  const designDeviceHeight = parseInt(896);
  return (number / designDeviceHeight) * currentDeviceHeight;
};
