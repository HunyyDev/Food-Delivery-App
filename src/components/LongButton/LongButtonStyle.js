import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

export const general = StyleSheet.create({
  TextFrame: {
    width: 314,
    height: 70,
    marginLeft: 51,
    marginTop: -25,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 36,
  },
  Text2: {
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_BOLD,
    fontSize: 17,
    color: COLORS.SUNSET_ORANGE,
  },
});
export const Long_White_Button = StyleSheet.create({
  TextFrame: {
    backgroundColor: COLORS.WHITE,
  },
  Text2: {
    color: COLORS.SUNSET_ORANGE,
  },
});
export const Long_Orange_Button = StyleSheet.create({
  TextFrame: {
    backgroundColor: COLORS.SUNSET_ORANGE,
  },
  Text2: {
    color: COLORS.WHITE,
  },
});
