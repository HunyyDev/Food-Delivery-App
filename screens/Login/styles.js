/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import scale from '../../src/constants/responsive';
import CUSTOM_COLOR from '../../src/constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey',
  },
  navContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    position: 'absolute',
    width: scale(414),
    height: scale(382),
    left: 0,
    borderRadius: 30,
    top: scale(-15),
  },
  logoContainer: {
    // flex: 1,
    position: 'absolute',
    width: scale(131.53),
    height: scale(162.38),
    left: scale(136),
    top: scale(113),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  text: {
    flex: 1,
    // fontSize: scale(18),
  },
  login: {
    flex: 1,
    position: 'absolute',
    width: scale(49),
    height: scale(24),
    left: scale(89),
    top: scale(330),
  },
  signUp: {
    flex: 1,
    position: 'absolute',
    width: scale(71),
    height: scale(24),
    left: scale(263),
    top: scale(330),
  },
  textLogin: {
    fontSize: scale(18),
    fontWeight: '600',
    color: 'black',
  },
  textSignUp: {
    fontSize: scale(18),
    fontWeight: '600',
    color: 'black',
  },
  rightLine: {
    position: 'absolute',
    width: scale(134),
    height: scale(3),
    left: scale(-39),
    top: scale(51),
    // top: scale(366),
    backgroundColor: '#FA4A0C',
    borderRadius: 40,
  },
  leftLine: {
    position: 'absolute',
    width: scale(134),
    height: scale(3),
    left: scale(-31),
    top: scale(51),
    backgroundColor: '#FA4A0C',
    borderRadius: 40,
  },
  inputLogin: {
    position: 'absolute',
    top: scale(116),
    left: scale(-39),
    // backgroundColor: 'grey',
  },
  inputSignUp: {
    position: 'absolute',
    top: scale(116),
    left: scale(-213),
    // backgroundColor: 'grey',
  },
  button: {
    position: 'absolute',
    bottom: scale(41),
    alignSelf: 'center',
  },
});

export default styles;