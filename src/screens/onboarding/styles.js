import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SunsetOrange,
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
    backgroundColor: COLORS.White,
    borderRadius: 37,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  title: {
    fontSize: 65,
    color: COLORS.White,
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
    backgroundColor: COLORS.White,
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
    color: COLORS.SunsetOrange,
  },
});

export default styles;
