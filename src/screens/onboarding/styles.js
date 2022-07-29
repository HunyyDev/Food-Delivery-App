import {StyleSheet, Dimensions} from 'react-native';
<<<<<<< HEAD

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
=======
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    width: 73,
    height: 73,
    left: 49,
    top: 56,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 37,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  title: {
    fontSize: 65,
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.RoundedHeavy,
    marginTop: 55,
    marginLeft: 51,
  },
  backgroundContainer: {},
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.65,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 999,
    height: 70,
    width: 314,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textButton: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 17,
    color: CUSTOM_COLOR.SunsetOrange,
>>>>>>> ChimCanhCut/dev_khangnt
  },
});

export default styles;
