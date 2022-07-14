import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const designWidth = 414;
const designHeight = 896;

function scaleWidth(number) {
  let scaleNumber;
  scaleNumber = (number / designWidth) * width;
  return scaleNumber;
}

function scaleHeight(number) {
  let scaleNumber;
  scaleNumber = (number / designHeight) * height;
  return scaleNumber;
}

export default scaleWidth;
