import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import FillIn from '../../components/FillIn/FillIn';
import LongButton from '../../components/LongButton/LongButton';

export const general = StyleSheet.create({
  margin: {
    height: 3,
    backgroundColor: COLORS.SUNSET_ORANGE,
    borderRadius: 40,
    marginTop: -18,
    marginLeft: 50,
    width: 134,
  },
});
export const longLeft = StyleSheet.create({
  margin: {
    marginTop: -18,
    marginLeft: 50,
    width: 134,
  },
});
export const longRight = StyleSheet.create({
  margin: {
    marginTop: -18,
    right: -150,
    width: 134,
  },
});
export const mobile = StyleSheet.create({
  margin: {
    marginTop: 0,
    width: 134,
  },
});
