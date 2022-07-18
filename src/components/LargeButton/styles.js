import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

export const generalStyles = StyleSheet.create({
  button: {
    width: 314,
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 20,
    paddingVertical: 20,
  },
});

export const primaryStyles = StyleSheet.create({
  button: {
    color: COLORS.SUNSET_ORANGE,
    borderColor: COLORS.WHITE,
    backgroundColor: COLORS.WHITE,
  },
  buttonHover: {
    backgroundColor: COLORS.SUNSET_ORANGE,
    color: COLORS.WHITE,
  },
});

export const secondaryStyles = StyleSheet.create({
  button: {
    color: COLORS.WHITE,
    borderColor: COLORS.SUNSET_ORANGE,
    backgroundColor: COLORS.SUNSET_ORANGE,
  },
  buttonHover: {
    backgroundColor: COLORS.WHITE,
    color: COLORS.SUNSET_ORANGE,
  },
});
