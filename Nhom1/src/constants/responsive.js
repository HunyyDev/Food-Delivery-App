import {Dimensions} from 'react-native';

const Device_Width = 414;

function scale(number) {
  let scaleNumber;
  const currentDeviceWidth = Dimensions.get('window').width;
  scaleNumber = (number / Device_Width) * currentDeviceWidth;
  return scaleNumber;
}

export default scale;
