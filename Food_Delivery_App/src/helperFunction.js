import {Dimensions} from 'react-native';

export const scaleX = number => {
  const currentDeviceWidth = parseInt(Dimensions.get('screen').width);
  const designDeviceWidth = parseInt(414);

  return (number / designDeviceWidth) * currentDeviceWidth;
};

export const scaleY = number => {
  const currentDeviceHeight = parseInt(Dimensions.get('screen').height);
  const designDeviceHeight = parseInt(896);

  return (number / designDeviceHeight) * currentDeviceHeight;
};
