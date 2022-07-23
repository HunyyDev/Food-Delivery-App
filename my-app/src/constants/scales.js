import {Dimensions} from 'react-native';

const designHeight = 896;
const designWidth = 414;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function scale(number) {
  let scaleNumber;
  const currentDevicewidth = Dimensions.get('window').width;
  scaleNumber = (number / designWidth) * currentDevicewidth;
  console.log('scaleNumber', scaleNumber);
  return scaleNumber;
}

export default scale;
