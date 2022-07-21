/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
<<<<<<< HEAD
//import OnboardingScreen from './src/screens/onboarding';
import HomeScreen from './src/screens/home';
//import LoginScreen from './src/screens/auth';
const App = props => {
  //return <OnboardingScreen></OnboardingScreen>;
  return <HomeScreen></HomeScreen>;
  //return <LoginScreen></LoginScreen>;
=======
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {IMG_Logo} from './src/assets/images/images';
import {IMG_Background} from './src/assets/images/images';
import CUSTOM_COLOR from './src/constants/colors';
import FONT_FAMILY from './src/constants/fonts';
import OnboardingScreen from './src/screens/onboarding';

const App = props => {
  return <OnboardingScreen {...props} />;
>>>>>>> e51852857c05cb3f560428b32216a3d2ff4ad911
};

export default App;
