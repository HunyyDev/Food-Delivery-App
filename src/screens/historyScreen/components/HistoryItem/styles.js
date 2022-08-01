import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../../../constants/colors';
import FONT_FAMILY from '../../../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 102,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 20,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  itemID: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 14,
    lineHeight: 22,
    position: 'absolute',
    top: 20,
    left: 120,
  },
  price: {
    color: CUSTOM_COLOR.OriolesOrange,
    position: 'absolute',
    top: 50,
    left: 120,
    fontFamily: FONT_FAMILY.Medium,
    lineHeight: 19,
  },
  status: {
    position: 'absolute',
    top: 20,
    left: 225,
    fontFamily: FONT_FAMILY.Medium,
    lineHeight: 22,
    color: CUSTOM_COLOR.UFOGreen,
    fontSize: 14,
  },
});
export default styles;
