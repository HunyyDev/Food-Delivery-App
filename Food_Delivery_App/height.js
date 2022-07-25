import {Dimensions} from 'react-native';

const designHeight = 896;

function scaleHeight(number) {
  let scaleNumber;
  const currentDeviceHeight = Dimensions.get('window').height;
  scaleNumber = (number / designHeight) * currentDeviceHeight;
  return scaleNumber;
}

export default scaleHeight;
