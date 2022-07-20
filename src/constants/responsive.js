import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const widthOfDesign = 414;
function scale(number) {
  return (width / widthOfDesign) * number;
}

export default scale;
