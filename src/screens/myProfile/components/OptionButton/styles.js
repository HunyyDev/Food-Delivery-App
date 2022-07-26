import CUSTOM_COLOR from '../../../../constants/colors';
import FONT_FAMILY from '../../../../constants/fonts';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 60,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 20,
    shadowColor: CUSTOM_COLOR.Black,
    shadowOffset: {width: 10, height: 40},
    shadowOpacity: 0.03,
    shadowRadius: 20,
  },
  textContainer: {
    position: 'absolute',
    top: 20,
    left: 23,
    right: 141,
    bottom: 19,
  },
  text: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 18,
    lineHeight: 21,
    fontStyle: 'normal',
    color: CUSTOM_COLOR.Black,
  },
  image: {
    position: 'absolute',
    top: 19,
    left: 264,
    right: 27,
    bottom: 17,
  },
});
export default styles;
