import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Concrete,
  },
  logoBackground: {
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: COLORS.White,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  logo: {
    width: '70%',
    height: '70%',
    alignSelf: 'center',
  },
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  forgotBackground: {
    width: '75%',
    height: '8%',
    margin: 30,
    marginBottom: 10,
    backgroundColor: COLORS.Concrete,
    alignSelf: 'center',
  },
  forgot: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 14,
    color: COLORS.SunsetOrange,
  },
  forgotPressed: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 14,
    color: COLORS.White,
  },
  SignInContainer: {
    margin: 30,
    marginBottom: 10,
    width: '75%',
    height: '8%',
    borderBottomWidth: 1,
    borderColor: COLORS.Black,
    backgroundColor: COLORS.Concrete,
    alignSelf: 'center',
    color: COLORS.Black,
    justifyContent: 'center',
  },
  Text: {
    color: COLORS.Black,
    opacity: 0.4,
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 10,
  },
  TextInput: {
    color: COLORS.Black,
    fontFamily: FONT_FAMILY.TextBold,
    marginBottom: 50,
  },
  buttonWhite: {
    backgroundColor: COLORS.White,
    borderRadius: 35,
    height: Dimensions.get('window').height * 0.08,
    padding: 20,
    width: Dimensions.get('window').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 30,
    margin: 30,
  },
  TextButtonWhite: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 15,
    color: COLORS.SunsetOrange,
  },
  buttonOrange: {
    backgroundColor: COLORS.SunsetOrange,
    borderRadius: 35,
    height: Dimensions.get('window').height * 0.08,
    padding: 20,
    width: Dimensions.get('window').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 30,
    margin: 30,
  },
  TextButtonOrange: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 15,
    color: COLORS.White,
  },
  buttonBackground: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
  googleButton: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.Black,
    padding: 15,
    width: 300,
    alignSelf: 'center',
  },
  googleText: {
    color: COLORS.Black,
    textAlign: 'center',
  },
});

export default styles;
