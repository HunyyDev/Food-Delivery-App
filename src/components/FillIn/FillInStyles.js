import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

export const general = StyleSheet.create({
  title: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_REGULAR,
    color: COLORS.BLACK,
    opacity: 0.4,
    marginLeft: 50,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.BLACK,
    marginTop: 14,
    marginLeft: 50,
    marginRight: 50,
    opacity: 0.4,
  },
  input: {
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_BOLD,
    fontSize: 17,
    color: COLORS.BLACK,
    marginTop: 9,
    marginLeft: 50,
  },
});
export const emailInput = StyleSheet.create({
  margin: {
    marginTop: 62,
  },
});
export const passInput = StyleSheet.create({
  margin: {
    marginTop: 46,
  },
});
