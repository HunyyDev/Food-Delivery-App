import CUSTOM_COLOR from '../../../../constants/colors';
import FONT_FAMILY from '../../../../constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  foodContainer: {
    flexDirection: 'row',
    width: 315,
    height: 102,
    borderRadius: 20,
    marginLeft: 50,
    backgroundColor: CUSTOM_COLOR.White,
  },
  food: {
    position: 'absolute',
    top: 12,
    left: -7,
    bottom: 13,
  },
  name: {
    position: 'absolute',
    left: 90,
    top: 27,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 14,
    color: CUSTOM_COLOR.Black,
    lineHeight: 22,
  },
  price: {
    position: 'absolute',
    left: 90,
    top: 58,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 14,
    lineHeight: 19,
    color: CUSTOM_COLOR.Vermilion,
  },
  amountContainer: {
    backgroundColor: CUSTOM_COLOR.Vermilion,
    width: 55,
    height: 20,
    borderRadius: 30,
    position: 'absolute',
    top: 64,
    left: 239,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  number: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 13,
    lineHeight: 17,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 45,
  },
  circle: {
    backgroundColor: CUSTOM_COLOR.AlizarinCrimson,
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
