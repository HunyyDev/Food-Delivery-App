/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
});

export default App;
