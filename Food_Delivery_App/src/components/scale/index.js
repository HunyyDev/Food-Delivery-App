/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
const designWidth = 414;
// const designHeight = 896;

const scale = number => {
  let scaleNumber;
  const currentDeviceWidth = Dimensions.get('window').width;
  scaleNumber = (number / designWidth) * currentDeviceWidth;
  return scaleNumber;
};
export default scale;
