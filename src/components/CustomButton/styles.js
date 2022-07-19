import {StyleSheet} from 'react-native';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';

export const general = StyleSheet.create({
  button: {
    width: 314,
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.ProTextSemibold,
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 20,
    paddingVertical: 20,
  },
});

export const primary = StyleSheet.create({
  buttonContainer: {
    width: 314,
    height: 70,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonComment: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.ProTextSemibold,
    color: CUSTOM_COLOR.SunsetColor,
  },
});

export const secondary = StyleSheet.create({
  buttonContainer: {
    width: 314,
    height: 70,
    backgroundColor: CUSTOM_COLOR.SunsetColor,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonComment: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.ProTextSemibold,
    color: CUSTOM_COLOR.White,
  },
});
