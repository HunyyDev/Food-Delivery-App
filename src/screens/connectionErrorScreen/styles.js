import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  noConnection: {
    marginTop: 250,
    alignSelf: 'center',
  },
  note: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 28,
    lineHeight: 33,
    color: CUSTOM_COLOR.Black,
  },
  detailsText: {
    width: 330,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: FONT_FAMILY.ProTextSemibold,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
    opacity: 0.57,
    marginTop: 17,
  },
  tryAgainButton: {
    marginTop: 55,
    marginBottom: 260,
  },
});

export default styles;
