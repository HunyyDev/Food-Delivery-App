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
import CUSTOM_COLOR from './src/constants/colors';
import OnboardingScreen from './src/screens/onboarding';

const App = props => {
  return <OnboardingScreen {...props}></OnboardingScreen>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
});

export default App;
