import {StyleSheet} from 'react-native';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';

export const general = StyleSheet.create({
  button: {
    width: 314,
    height: 70,
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.ProTextSemibold,
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 35,
    marginBottom: 20,
    paddingVertical: 20,
  },
});

export const primary = StyleSheet.create({
  buttonCommentContainer: {
    color: CUSTOM_COLOR.SunsetYellow,
    borderColor: CUSTOM_COLOR.White,
    backgroundColor: CUSTOM_COLOR.White,
  },
  buttonPress: {
    backgroundColor: CUSTOM_COLOR.SunsetYellow,
    color: CUSTOM_COLOR.White,
  },
});

export const secondary = StyleSheet.create({
  buttonCommentContainer: {
    color: CUSTOM_COLOR.White,
    borderColor: CUSTOM_COLOR.SunsetYellow,
    backgroundColor: CUSTOM_COLOR.SunsetYellow,
  },
  buttonPress: {
    backgroundColor: CUSTOM_COLOR.White,
    color: CUSTOM_COLOR.SunsetYellow,
  },
});
