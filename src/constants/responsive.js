import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const widthOfDesign = 414;
const height = Dimensions.get('screen').height;
const heightOfDesign = 414;

const scale = {
  scaleWidth(number) {
    return (width / widthOfDesign) * number;
  },

  scaleHeight(number) {
    return (height / heightOfDesign) * number;
  },
};

export default scale;
