import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  background: {
    marginBottom: 45,
  },
  title: {
    color: CUSTOM_COLOR.Black,
    opacity: 0.4,
    fontWeight: 'bold',
  },
  input: {
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomWidth: 2,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: FONT_FAMILY.ProTextRegular,
  },
});

export default styles;
