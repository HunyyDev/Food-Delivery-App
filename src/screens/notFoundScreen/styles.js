import {StyleSheet} from 'react-native';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  backButton: {
    position: 'absolute',
    top: 76,
    left: 51,
  },
  foodName: {
    position: 'absolute',
    top: 71,
    left: 101,
    fontSize: 17,
    fontFamily: FONT_FAMILY.Bold,
    fontStyle: 'normal',
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  bigSearch: {
    position: 'absolute',
    top: 285,
    left: 130,
  },
  note: {
    position: 'absolute',
    top: 450,
    left: 100,
    color: CUSTOM_COLOR.Black,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 28,
    lineHeight: 30,
  },
  detailsText: {
    color: CUSTOM_COLOR.Black,
    marginTop: 500,
    opacity: 0.57,
    fontFamily: FONT_FAMILY.ProTextSemibold,
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
  },
});
