import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from './src/constants/colors.js';
import {IMG_Background, IMG_Logo} from './src/assets/images/index.js';
import FONT_FAMILY from './src/constants/fonts.js';
import LoginScreen from './src/screens/auth/index.js';

const App = props => {
  return <LoginScreen {...props} />;
};

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
    //width: 275,
    //height: 112,
    marginTop: 55,
    marginLeft: 51,
  },
  backgroundContainer: {
    //backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  background: {
    width: Dimensions.get('window').width,
    height: 500,
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
  },
});

export default App;
