import {StyleSheet} from 'react-native';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  backButton: {
    marginTop: 66,
    marginLeft: 50,
  },
  header: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 34,
    lineHeight: 51,
    letterSpacing: -0.05,
    color: CUSTOM_COLOR.Black,
    marginTop: 46,
    marginLeft: 50,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  note: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 28,
    lineHeight: 42,
    letterSpacing: -0.02,
    marginTop: 275,
    textAlign: 'center',
    color: CUSTOM_COLOR.Black,
  },
  detailsText: {
    opacity: 0.57,
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 17,
    lineHeight: 26,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },
});
