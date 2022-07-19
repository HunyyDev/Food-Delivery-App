import {StyleSheet, Dimensions} from 'react-native';

import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.SUNSET_ORANGE,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  logo: {
    marginTop: 40,
    left: 49,
  },
  header: {
    marginTop: 31,
    marginLeft: 51,
    fontSize: 65,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
  },
  heroImage: {
    marginTop: 31,
  },
});

export default styles;
